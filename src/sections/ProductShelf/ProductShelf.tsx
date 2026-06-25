"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { ProductCard } from "@/src/components/ProductCard/ProductCard";
import { SectionHeading } from "@/src/components/SectionHeading/SectionHeading";
import type { Product } from "@/src/types/shop";

import styles from "./ProductShelf.module.scss";

type ProductShelfProps = {
  title: string;
  text?: string;
  products: Product[];
};

export function ProductShelf({ title, text, products }: ProductShelfProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const element = ref.current;

    if (!element) return;

    element.scrollBy({
      left: direction === "right" ? 720 : -720,
      behavior: "smooth",
    });
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <SectionHeading title={title} text={text} />
          <div className={styles.arrows}>
            <button type="button" onClick={() => scroll("left")} aria-label="Назад">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => scroll("right")} aria-label="Вперед">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className={styles.rail} ref={ref}>
          {products.map((product) => (
            <div className={styles.item} key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
