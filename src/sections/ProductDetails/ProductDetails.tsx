"use client";

/* eslint-disable @next/next/no-img-element */

import { Check, Heart, Scale, Star } from "lucide-react";
import { useMemo, useState } from "react";

import { AddToCartButton } from "@/src/components/AddToCartButton/AddToCartButton";
import type { Product } from "@/src/types/shop";
import { formatPrice } from "@/src/utils/format";

import styles from "./ProductDetails.module.scss";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const defaultVariant =
    product.variants.find((variant) => variant.sku === product.sku) ??
    product.variants[0];
  const [selectedVariantId, setSelectedVariantId] = useState(defaultVariant?.id);
  const selectedVariant = useMemo(
    () =>
      product.variants.find((variant) => variant.id === selectedVariantId) ??
      defaultVariant,
    [defaultVariant, product.variants, selectedVariantId],
  );
  const currentPrice = selectedVariant?.price ?? product.price;
  const currentOldPrice = selectedVariant?.oldPrice ?? product.oldPrice;
  const currentSku = selectedVariant?.sku ?? product.sku;
  const currentSize = selectedVariant?.size ?? product.size;
  const currentHeight = selectedVariant?.height ?? product.height;
  const currentFirmness = selectedVariant?.firmness ?? product.firmness;
  const currentStock = selectedVariant?.stock ?? product.stock;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    sku: currentSku,
    brand: product.brand,
    image: product.gallery,
    description: product.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
    offers: {
      "@type": "Offer",
      price: currentPrice,
      priceCurrency: "RUB",
      availability:
        currentStock === "in_stock"
          ? "https://schema.org/InStock"
          : currentStock === "preorder"
            ? "https://schema.org/PreOrder"
            : "https://schema.org/OutOfStock",
    },
  };

  return (
    <main className="page-main" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <section className={`container ${styles.layout}`}>
        <div className={styles.gallery}>
          <img src={product.image} alt={product.title} />
          <div className={styles.thumbs}>
            {product.gallery.map((image) => (
              <img src={image} alt="" key={image} />
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.meta}>
            <span>Арт. {currentSku}</span>
            <span>{product.category}</span>
            <span>
              <Star size={16} fill="currentColor" /> {product.rating} ·{" "}
              {product.reviews} отзывов
            </span>
          </div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          <div className={styles.variantPicker}>
            <div className={styles.pickerHeader}>
              <strong>Размер и комплектация</strong>
              <span>
                {currentStock === "in_stock"
                  ? "В наличии"
                  : currentStock === "preorder"
                    ? "Под заказ"
                    : "Нет в наличии"}
              </span>
            </div>
            <div className={styles.variantGrid}>
              {product.variants.map((variant) => (
                <button
                  className={
                    variant.id === selectedVariant?.id ? styles.activeVariant : ""
                  }
                  type="button"
                  key={variant.id}
                  onClick={() => setSelectedVariantId(variant.id)}
                >
                  <strong>{variant.size}</strong>
                  <span>{formatPrice(variant.price)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.priceRow}>
            <div>
              <strong>{formatPrice(currentPrice)}</strong>
              {currentOldPrice ? <s>{formatPrice(currentOldPrice)}</s> : null}
            </div>
            <AddToCartButton
              label="Добавить в корзину"
              productId={product.id}
              variantId={selectedVariant?.id}
            />
          </div>

          <div className={styles.secondaryActions}>
            <button type="button">
              <Heart size={18} /> В избранное
            </button>
            <button type="button">
              <Scale size={18} /> Сравнить
            </button>
          </div>

          <div className={styles.props}>
            <div>
              <span>Размер</span>
              <strong>{currentSize}</strong>
            </div>
            <div>
              <span>Жесткость</span>
              <strong>{currentFirmness}</strong>
            </div>
            <div>
              <span>Высота</span>
              <strong>{currentHeight}</strong>
            </div>
            <div>
              <span>Нагрузка</span>
              <strong>{product.weightLimit}</strong>
            </div>
            <div>
              <span>Страна</span>
              <strong>{product.country}</strong>
            </div>
            <div>
              <span>Гарантия</span>
              <strong>{product.warranty}</strong>
            </div>
          </div>

          <div className={styles.composition}>
            <h2>Состав</h2>
            {product.composition.map((item) => (
              <span key={item}>
                <Check size={18} /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`container ${styles.tabs}`}>
        <details open>
          <summary>Описание</summary>
          <p>{product.description}</p>
          <p>
            Подходит для ежедневного сна, устойчив к нагрузке и совместим с
            большинством ортопедических оснований.
          </p>
        </details>
        <details open>
          <summary>Характеристики</summary>
          <dl>
            {Object.entries(product.characteristics).map(([name, value]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </details>
        <details>
          <summary>Доставка и возврат</summary>
          <p>
            Доставка рассчитывается после выбора города. Для MVP заложен API
            `/api/delivery/calculate`, который позже подключается к СДЭК,
            Boxberry или другому провайдеру.
          </p>
        </details>
      </section>
    </main>
  );
}
