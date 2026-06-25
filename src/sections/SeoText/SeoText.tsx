import { seoFaq } from "@/src/data/shop";
import { SectionHeading } from "@/src/components/SectionHeading/SectionHeading";

import styles from "./SeoText.module.scss";

export function SeoText() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeading
            title="Как выбрать ортопедический матрас"
            text="SEO-блок написан человеческим языком и закрывает базовые поисковые запросы без переспама."
          />
          <div className={styles.text}>
            <p>
              OrtoLux помогает выбрать ортопедический матрас для ежедневного сна:
              по размеру кровати, весу, привычной позе и желаемой жесткости.
              В каталоге есть матрасы 160x200, 180x200, односпальные и детские
              модели, а также подушки, кровати и аксессуары.
            </p>
            <p>
              Для обычного интернет-магазина на 60-100 товаров важно, чтобы
              покупатель быстро сравнил характеристики, увидел цену и смог
              перейти к оформлению без лишних шагов. Поэтому интерфейс строится
              вокруг каталога, фильтров, карточек товаров и понятной структуры
              страниц.
            </p>
          </div>
        </div>

        <div className={styles.faq}>
          {seoFaq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
