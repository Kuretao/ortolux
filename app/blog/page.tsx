import type { Metadata } from "next";
import Link from "next/link";

import { blogArticles } from "@/src/data/shop";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Блог о матрасах и здоровом сне",
  description:
    "Полезные статьи OrtoLux: как выбрать жесткость матраса, какой размер купить, как ухаживать за матрасом и продлить срок службы.",
};

export default function Page() {
  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.hero}`}>
        <span>блог</span>
        <h1>Статьи о выборе матрасов и здоровом сне</h1>
        <p>
          Информационные страницы помогают пользователю разобраться в покупке и
          дают сайту органический SEO-трафик.
        </p>
      </section>
      <section className={`container ${styles.grid}`}>
        {blogArticles.map((article) => (
          <Link className={styles.card} href={`/blog/${article.slug}`} key={article.id}>
            <span>{article.category}</span>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <small>{article.publishedAt} · {article.readTime}</small>
          </Link>
        ))}
      </section>
    </main>
  );
}
