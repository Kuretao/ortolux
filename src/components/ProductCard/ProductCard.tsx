"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { useAtomValue, useSetAtom } from "jotai";

import { AddToCartButton } from "@/src/components/AddToCartButton/AddToCartButton";
import {
  favoriteProductIdsAtom,
  toggleFavoriteAtom,
} from "@/src/store/favorites";
import type { Product } from "@/src/types/shop";
import { formatPrice } from "@/src/utils/format";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const favoriteIds = useAtomValue(favoriteProductIdsAtom);
  const toggleFavorite = useSetAtom(toggleFavoriteAtom);
  const isFavorite = favoriteIds.includes(product.id);

  return (
    <article className="flex flex-col overflow-hidden rounded-[22px] border border-white/80 bg-white shadow-[0_14px_38px_rgb(29_32_35/0.07)] transition duration-200 hover:-translate-y-1 hover:border-white hover:shadow-[0_20px_52px_rgb(29_32_35/0.13)]">
      <div className="relative aspect-[1/0.82] overflow-hidden bg-[linear-gradient(135deg,#f9fafb_0%,#f3f4f6_100%)]">
        <Link className="group block h-full" href={`/product/${product.slug}`}>
          <img
            className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
            src={product.image}
            alt={product.title}
          />
        </Link>
        <div className="absolute left-2.5 top-2.5 flex flex-wrap gap-1.5">
          {product.badges.map((badge) => (
            <span
              className="rounded-md bg-[linear-gradient(135deg,#fff1e8_0%,#ffb18b_100%)] px-2.5 py-1 text-xs font-black text-[#7c2d12] shadow-[0_2px_4px_rgb(0_0_0/0.1)] backdrop-blur"
              key={badge}
            >
              {badge}
            </span>
          ))}
        </div>
        <button
          className={`absolute right-2.5 top-2.5 z-[1] inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-0 bg-white/92 text-[var(--color-ink)] shadow-[0_2px_8px_rgb(0_0_0/0.12)] backdrop-blur transition duration-200 hover:scale-110 hover:bg-white hover:text-[var(--color-rose)] hover:shadow-[0_4px_12px_rgb(239_68_68/0.25)] active:scale-95 ${
            isFavorite ? "!bg-[var(--color-rose)] !text-white" : ""
          }`}
          type="button"
          aria-label={isFavorite ? "Убрать из избранного" : "В избранное"}
          aria-pressed={isFavorite}
          onClick={() => toggleFavorite(product.id)}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <div className="flex flex-wrap gap-1.5 text-[13px] text-[var(--color-muted)]">
          <span>{product.brand}</span>
          <span>{product.size}</span>
        </div>
        <Link
          className="line-clamp-2 min-h-[42px] overflow-hidden text-[15px] font-semibold leading-[1.35] text-[var(--color-ink)] transition duration-200 hover:text-[var(--color-accent)]"
          href={`/product/${product.slug}`}
        >
          {product.title}
        </Link>
        <div className="flex flex-wrap gap-1.5 text-[13px] text-[var(--color-muted)]">
          <span
            className="relative inline-flex items-center gap-1 pl-5 before:absolute before:left-[7px] before:h-[7px] before:w-[7px] before:rounded-full before:bg-[var(--color-mint)] data-[status=out_of_stock]:before:bg-[#9aa3af] data-[status=preorder]:before:bg-[var(--color-accent)]"
            data-status={product.stock}
          >
            {product.stock === "in_stock"
              ? "В наличии"
              : product.stock === "preorder"
                ? "Под заказ"
                : "Нет в наличии"}
          </span>
          <span className="inline-flex items-center gap-1">
            <Star className="text-[#ffb800]" size={15} fill="currentColor" />{" "}
            {product.rating} / {product.reviews}
          </span>
        </div>
        <p className="w-fit rounded-full bg-emerald-500/10 px-2.5 py-1 text-[13px] font-bold leading-[1.4] text-[var(--color-mint)]">
          Завтра, ПВЗ или курьером
        </p>
        <p className="m-0 text-xs leading-[1.4] text-[var(--color-muted)]">
          {product.size} · {product.firmness} · {product.height}
        </p>
        <div className="mt-auto grid gap-2.5 border-t border-[var(--color-line)] pt-3">
          <div>
            <strong className="block text-xl leading-[1.1] text-[var(--color-ink)]">
              {formatPrice(product.price)}
            </strong>
            {product.oldPrice ? (
              <s className="mt-0.5 block text-[13px] text-[var(--color-muted)]">
                {formatPrice(product.oldPrice)}
              </s>
            ) : null}
          </div>
          <AddToCartButton compact productId={product.id} />
        </div>
      </div>
    </article>
  );
}
