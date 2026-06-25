import Link from "next/link";

import { brands, promoBanners } from "@/src/data/shop";
import { SectionHeading } from "@/src/components/SectionHeading/SectionHeading";

import styles from "./PromoAndBrands.module.scss";

export function PromoAndBrands() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Акции, бренды и комплекты"
          text="Блоки из ТЗ для коммерческого веса главной: промо, производители и готовые сценарии покупки."
        />
        <div className={styles.promos}>
          {promoBanners.map((banner) => (
            <Link className={styles.promo} href={banner.href} key={banner.title}>
              <span>предложение</span>
              <h3>{banner.title}</h3>
              <p>{banner.text}</p>
            </Link>
          ))}
        </div>
        <div className={styles.brands} aria-label="Бренды">
          {brands.concat(brands).map((brand, index) => (
            <span key={`${brand.id}-${index}`}>{brand.title}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
