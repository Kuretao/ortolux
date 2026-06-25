/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import styles from "./SelectionCards.module.scss";

const cards = [
  {
    title: "Подобрать матрас",
    text: "Правильно подобранный матрас влияет на самочувствие в течение дня",
    href: "/catalog?category=mattresses",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Подобрать подушки",
    text: "Сон начинается с подушки, поэтому важно подобрать подходящую",
    href: "/catalog?category=pillows",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Подобрать диван",
    text: "Диваны бывают разных форм, размеров и материалов",
    href: "/catalog?q=диван",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
  },
];

export function SelectionCards() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        {cards.map((card) => (
          <Link className={styles.card} href={card.href} key={card.title}>
            <div>
              <h2>
                {card.title}
                <span>
                  <ChevronRight size={18} />
                </span>
              </h2>
              <p>{card.text}</p>
            </div>
            <img src={card.image} alt={card.title} />
          </Link>
        ))}
      </div>
    </section>
  );
}
