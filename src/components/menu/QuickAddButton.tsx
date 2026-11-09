"use client";

import React, { useState } from "react";
import { Plus, Check } from "lucide-react";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";

export default function QuickAddButton({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(item, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      aria-label={`Add ${item.name} to basket`}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
        justAdded
          ? "bg-olive text-white"
          : "bg-charcoal text-white hover:bg-copper hover:text-white"
      }`}
    >
      {justAdded ? (
        <>
          <Check className="w-3.5 h-3.5" />
          <span>Added</span>
        </>
      ) : (
        <>
          <Plus className="w-3.5 h-3.5" />
          <span>Add</span>
        </>
      )}
    </button>
  );
}
