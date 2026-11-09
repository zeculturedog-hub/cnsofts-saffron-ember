import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.resolve(__dirname, '../public/images/restaurant');

const images = [
  {
    filename: 'hero.jpg',
    description: 'Contemporary coastal dining table with ocean view and elegant warm ambiance',
    photographer: 'Jason Leung',
    photographerUrl: 'https://unsplash.com/@ninjason',
    unsplashUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80',
    originalUrl: 'https://unsplash.com/photos/poI7DelFiVA'
  },
  {
    filename: 'interior.jpg',
    description: 'Sophisticated warm-toned restaurant dining room with architectural lighting',
    photographer: 'Petr Sevcovic',
    photographerUrl: 'https://unsplash.com/@sevcovic',
    unsplashUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80',
    originalUrl: 'https://unsplash.com/photos/qE1jxYXiwOA'
  },
  {
    filename: 'grilled-chicken.jpg',
    description: 'Flame-grilled marinated chicken dish with fresh coastal herbs and spices',
    photographer: 'Chad Montano',
    photographerUrl: 'https://unsplash.com/@briewilly',
    unsplashUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=80',
    originalUrl: 'https://unsplash.com/photos/eeqbbemH9-c'
  },
  {
    filename: 'seafood.jpg',
    description: 'Indian Ocean coastal grilled king prawns with garlic butter and lemon',
    photographer: 'Dan Gold',
    photographerUrl: 'https://unsplash.com/@danielcgold',
    unsplashUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1200&q=80',
    originalUrl: 'https://unsplash.com/photos/4_jhDO54BYg'
  },
  {
    filename: 'pasta.jpg',
    description: 'Handcrafted tagliatelle with coastal blue swimmer crab and saffron sauce',
    photographer: 'Mgg Vitchakorn',
    photographerUrl: 'https://unsplash.com/@mggvitchakorn',
    unsplashUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    originalUrl: 'https://unsplash.com/photos/JNOuAkT542U'
  },
  {
    filename: 'dessert.jpg',
    description: 'Cardamom infused panna cotta with passionfruit glaze and edible florals',
    photographer: 'Ksenia Chernaya',
    photographerUrl: 'https://unsplash.com/@kseniachernaya',
    unsplashUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    originalUrl: 'https://unsplash.com/photos/bpPTlXWTOvg'
  },
  {
    filename: 'drinks.jpg',
    description: 'Signature hibiscus and spiced tamarind botanical spritz with rosemary garnish',
    photographer: 'Kobby Mendez',
    photographerUrl: 'https://unsplash.com/@kobbymendez',
    unsplashUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    originalUrl: 'https://unsplash.com/photos/q50Hg1mGd8Y'
  }
];

async function downloadImage(item) {
  const filePath = path.join(targetDir, item.filename);
  console.log(`Downloading ${item.filename} from Unsplash...`);
  try {
    const res = await fetch(item.unsplashUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(filePath, buffer);
    console.log(`✓ Saved ${item.filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
    return { ...item, sizeKb: (buffer.length / 1024).toFixed(1), status: 'success' };
  } catch (err) {
    console.error(`✗ Error downloading ${item.filename}:`, err.message);
    return { ...item, status: 'failed', error: err.message };
  }
}

async function run() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const results = [];
  for (const img of images) {
    const res = await downloadImage(img);
    results.push(res);
  }

  // Generate Manifest Markdown
  let manifest = `# Saffron & Ember — Visual Asset Manifest\n\n`;
  manifest += `This manifest documents all photographic assets used on the Saffron & Ember website. All assets are sourced from Unsplash under the [Unsplash License](https://unsplash.com/license) (free for commercial and personal use, no permission required).\n\n`;
  manifest += `| Filename | Description | Photographer | Unsplash Source | Status |\n`;
  manifest += `| :--- | :--- | :--- | :--- | :--- |\n`;

  for (const r of results) {
    manifest += `| \`${r.filename}\` | ${r.description} | [${r.photographer}](${r.photographerUrl}) | [View on Unsplash](${r.originalUrl}) | ${r.status === 'success' ? '✓ Downloaded (' + r.sizeKb + ' KB)' : '✗ ' + r.error} |\n`;
  }

  const manifestPath = path.resolve(__dirname, '../public/images/restaurant/README.md');
  fs.writeFileSync(manifestPath, manifest, 'utf8');
  console.log(`Manifest written to ${manifestPath}`);
}

run();
