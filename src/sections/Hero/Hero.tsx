/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowRight, BadgePercent, Truck } from "lucide-react";

import { heroSlides } from "@/src/data/shop";
import { Reveal } from "@/src/components/Reveal/Reveal";

import styles from "./Hero.module.scss";

export function Hero() {
  const [mainSlide, secondSlide] = heroSlides;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.content}>
          <span className={styles.kicker}>интернет-магазин товаров для сна</span>
          <h1>{mainSlide.title}</h1>
          <p>{mainSlide.text}</p>
          <div className={styles.actions}>
            <Link className="primary-link" href="/catalog">
              Перейти в каталог <ArrowRight size={18} />
            </Link>
            <Link className="secondary-link" href="/catalog?sale=true">
              Смотреть акции
            </Link>
          </div>
          <div className={styles.facts}>
            <span>
              <Truck size={18} /> Доставка и подъем
            </span>
            <span>
              <BadgePercent size={18} /> Скидки до 35%
            </span>
          </div>
        </Reveal>

        <Reveal className={styles.visual} delay={0.08}>
          <img src={mainSlide.image} alt="Спальня с ортопедическим матрасом" />
          <div className={styles.offer}>
            <strong>Матрас 160x200</strong>
            <span>от 17 990 ₽</span>
          </div>
        </Reveal>

        <Reveal className={styles.sideBanner} delay={0.16}>
          <img src={secondSlide.image} alt="Акция на товары для сна" />
          <div>
            <strong>Готовые комплекты</strong>
            <span>матрас + основание + подушка</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
