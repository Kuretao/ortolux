"use client";

import { FormEvent, useState } from "react";
import { useAtomValue } from "jotai";

import { cartItemsAtom } from "@/src/store/cart";

import styles from "./CheckoutPage.module.scss";

export function CheckoutPage() {
  const items = useAtomValue(cartItemsAtom);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, items }),
    });
    const result = (await response.json()) as { message?: string; orderId?: string };

    setStatus(
      result.orderId
        ? `${result.message}. Номер заказа: ${result.orderId}`
        : result.message ?? "Заявка отправлена",
    );
  };

  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.layout}`}>
        <div>
          <span>оформление</span>
          <h1>Контакты, доставка и оплата</h1>
          <p>
            В MVP заказ сохраняется через `/api/orders`. Позже этот маршрут
            отдаст заказ в Laravel/PHP backend, CRM или 1С.
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Имя
            <input name="name" required placeholder="Лариса" />
          </label>
          <label>
            Телефон
            <input name="phone" required placeholder="+7 900 000-00-00" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="client@mail.ru" />
          </label>
          <label>
            Город доставки
            <input name="city" required placeholder="Саратов" />
          </label>
          <label>
            Комментарий
            <textarea name="comment" placeholder="Удобное время доставки" />
          </label>
          <button className="primary-link" type="submit">
            Подтвердить заказ
          </button>
          {status ? <p className={styles.status}>{status}</p> : null}
        </form>
      </section>
    </main>
  );
}
