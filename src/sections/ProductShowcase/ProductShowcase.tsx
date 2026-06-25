import Link from "next/link";

import { ProductCard } from "@/src/components/ProductCard/ProductCard";
import { SectionHeading } from "@/src/components/SectionHeading/SectionHeading";
import { products } from "@/src/data/shop";

import styles from "./ProductShowcase.module.scss";

export function ProductShowcase() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Популярные матрасы"
          text="Карточки сделаны под сценарий обычного магазина: цена, скидка, свойства, рейтинг и быстрое добавление."
        />
        <div className={styles.grid}>
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className={styles.more}>
          <Link className="secondary-link" href="/catalog">
            Смотреть весь каталог
          </Link>
        </div>
      </div>
    </section>
  );
}
