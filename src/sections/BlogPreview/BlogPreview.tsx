import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { blogArticles } from "@/src/data/shop";
import { SectionHeading } from "@/src/components/SectionHeading/SectionHeading";

import styles from "./BlogPreview.module.scss";

export function BlogPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Полезно перед покупкой"
          text="Статьи закрывают информационный спрос и поддерживают SEO по выбору матрасов."
        />
        <div className={styles.grid}>
          {blogArticles.map((article) => (
            <Link className={styles.card} href={`/blog/${article.slug}`} key={article.id}>
              <span>{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <small>
                {article.readTime} <ArrowRight size={16} />
              </small>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
