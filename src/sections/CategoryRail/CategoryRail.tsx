/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { categories } from "@/src/data/shop";
import { SectionHeading } from "@/src/components/SectionHeading/SectionHeading";

import styles from "./CategoryRail.module.scss";

export function CategoryRail() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Категории для быстрого выбора"
          text="Структура похожа на привычный каталог: покупатель сразу понимает, куда идти."
        />
        <div className={styles.grid}>
          {categories.map((category) => (
            <Link className={styles.card} href={category.href} key={category.id}>
              <img src={category.image} alt={category.title} />
              <div className={styles.content}>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
              <span className={styles.icon}>
                <ArrowUpRight size={20} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
