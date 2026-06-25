"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ShoppingCart, Scale, Trash2 } from "lucide-react";
import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";

import { products } from "@/src/data/shop";
import { addToCartAtom } from "@/src/store/cart";
import {
  clearCompareAtom,
  compareProductIdsAtom,
  toggleCompareAtom,
} from "@/src/store/compare";
import { formatPrice } from "@/src/utils/format";

import styles from "./ComparePage.module.scss";

const compareVideoUrl =
  "https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4";

const rows = [
  { label: "Цена", getValue: (id: string) => formatPrice(getProduct(id)?.price ?? 0) },
  { label: "Категория", getValue: (id: string) => getProduct(id)?.category ?? "-" },
  { label: "Размер", getValue: (id: string) => getProduct(id)?.size ?? "-" },
  { label: "Жесткость", getValue: (id: string) => getProduct(id)?.firmness ?? "-" },
  { label: "Высота", getValue: (id: string) => getProduct(id)?.height ?? "-" },
  { label: "Нагрузка", getValue: (id: string) => getProduct(id)?.weightLimit ?? "-" },
  { label: "Гарантия", getValue: (id: string) => getProduct(id)?.warranty ?? "-" },
  { label: "Страна", getValue: (id: string) => getProduct(id)?.country ?? "-" },
];

function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function ComparePage() {
  const compareIds = useAtomValue(compareProductIdsAtom);
  const addToCart = useSetAtom(addToCartAtom);
  const toggleCompare = useSetAtom(toggleCompareAtom);
  const clearCompare = useSetAtom(clearCompareAtom);
  const [addedProductId, setAddedProductId] = useState("");
  const selectedCompareIds = compareIds.slice(-3);
  const selectedProducts = selectedCompareIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);
  const handleAddToCart = (productId: string) => {
    addToCart(productId);
    setAddedProductId(productId);
    window.setTimeout(() => setAddedProductId(""), 1600);
  };

  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.hero}`}>
        <video autoPlay loop muted playsInline preload="auto">
          <source src={compareVideoUrl} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroCopy}>
          <span>сравнение</span>
          <h1>Сравните товары по важным параметрам</h1>
          <p>
            Добавляйте до трех моделей и смотрите разницу по цене, размеру,
            жесткости, высоте, нагрузке и гарантии.
          </p>
        </div>
        <aside className={styles.summary}>
          <Scale size={28} />
          <strong>{selectedProducts.length}</strong>
          <span>товаров в сравнении</span>
        </aside>
      </section>

      <section className={`container ${styles.content}`}>
        {selectedProducts.length ? (
          <>
            <div className={styles.toolbar}>
              <strong>Товары для сравнения</strong>
              <button type="button" onClick={clearCompare}>
                <Trash2 size={17} /> Очистить
              </button>
            </div>
            <div className={styles.tableWrap}>
              <div
                className={styles.compareGrid}
                style={{
                  gridTemplateColumns: `190px repeat(${selectedProducts.length}, minmax(220px, 1fr))`,
                }}
              >
                <div className={styles.corner}>Параметр</div>
                {selectedProducts.map((product) =>
                  product ? (
                    <article className={styles.productHead} key={product.id}>
                      <button
                        type="button"
                        onClick={() => toggleCompare(product.id)}
                        aria-label="Убрать из сравнения"
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className={styles.productImage}>
                        <img src={product.image} alt={product.title} />
                      </div>
                      <Link href={`/product/${product.slug}`}>{product.title}</Link>
                      <span className={styles.pricePill}>
                        {formatPrice(product.price)}
                      </span>
                      <div className={styles.buyAction}>
                        <button
                          type="button"
                          onClick={() => handleAddToCart(product.id)}
                        >
                          <ShoppingCart size={17} />
                          {addedProductId === product.id ? "В корзине" : "В корзину"}
                        </button>
                      </div>
                    </article>
                  ) : null,
                )}

                {rows.map((row) => (
                  <div className={styles.rowGroup} key={row.label}>
                    <div className={styles.rowLabel}>{row.label}</div>
                    {selectedProducts.map((product) =>
                      product ? (
                        <div className={styles.cell} key={`${row.label}-${product.id}`}>
                          {row.getValue(product.id)}
                        </div>
                      ) : null,
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.empty}>
            <Scale size={34} />
            <h2>Пока нечего сравнивать</h2>
            <p>
              Откройте карточку товара и нажмите “Сравнить”, чтобы модель
              появилась здесь.
            </p>
            <Link className="primary-link" href="/catalog">
              Перейти в каталог
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
