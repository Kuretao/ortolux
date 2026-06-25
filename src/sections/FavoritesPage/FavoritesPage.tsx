"use client";

import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";
import { useAtomValue } from "jotai";

import { ProductCard } from "@/src/components/ProductCard/ProductCard";
import { products } from "@/src/data/shop";
import { favoriteProductIdsAtom } from "@/src/store/favorites";

import styles from "./FavoritesPage.module.scss";

const favoritesVideoUrl =
  "https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4";

export function FavoritesPage() {
  const favoriteIds = useAtomValue(favoriteProductIdsAtom);
  const favoriteProducts = products.filter((product) =>
    favoriteIds.includes(product.id),
  );

  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.hero}`}>
        <video autoPlay loop muted playsInline preload="auto">
          <source src={favoritesVideoUrl} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroCopy}>
          <span>избранное</span>
          <h1>Сохраненные товары</h1>
          <p>
            Собирайте матрасы, кровати и аксессуары в короткий список, чтобы
            спокойно сравнить их перед покупкой.
          </p>
        </div>
        <aside className={styles.summary}>
          <Heart size={28} fill="currentColor" />
          <strong>{favoriteProducts.length}</strong>
          <span>товаров сохранено</span>
        </aside>
      </section>

      <section className={`container ${styles.content}`}>
        {favoriteProducts.length ? (
          <div className={styles.grid}>
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <Sparkles size={32} />
            <h2>Пока ничего не сохранено</h2>
            <p>
              Нажмите на сердечко в карточке товара или на странице товара, и
              он появится здесь.
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
