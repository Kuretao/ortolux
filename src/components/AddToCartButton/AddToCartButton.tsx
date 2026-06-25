"use client";

import { ShoppingCart } from "lucide-react";
import { useSetAtom } from "jotai";
import { useState } from "react";

import { addToCartAtom } from "@/src/store/cart";

type AddToCartButtonProps = {
  productId: string;
  variantId?: string;
  label?: string;
  compact?: boolean;
};

export function AddToCartButton({
  productId,
  variantId,
  label = "В корзину",
  compact = false,
}: AddToCartButtonProps) {
  const addToCart = useSetAtom(addToCartAtom);
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    addToCart({ productId, variantId });
    setIsAdded(true);
    window.setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <button
      className={`inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[9px] border-0 bg-[linear-gradient(135deg,var(--color-primary)_0%,var(--color-primary-dark)_100%)] font-bold text-white shadow-[0_2px_8px_rgb(29_32_35/0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,var(--color-primary-dark)_0%,#000_100%)] hover:shadow-[0_4px_16px_rgb(29_32_35/0.3)] active:translate-y-0 active:shadow-[0_1px_4px_rgb(29_32_35/0.2)] ${compact ? "min-h-[38px] px-3 text-sm" : "min-h-11 px-4 text-[15px]"}`}
      type="button"
      onClick={handleClick}
    >
      <ShoppingCart size={18} />
      <span>{isAdded ? "В корзине" : label}</span>
    </button>
  );
}
