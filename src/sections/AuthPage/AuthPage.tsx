"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import styles from "./AuthPage.module.scss";

type AuthPageProps = {
  mode: "login" | "register";
};

export function AuthPage({ mode }: AuthPageProps) {
  const [status, setStatus] = useState<string>("");
  const isRegister = mode === "register";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json()) as { message?: string };

    setStatus(result.message ?? "Готово");
  };

  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <span>личный кабинет</span>
          <h1>{isRegister ? "Регистрация покупателя" : "Вход в аккаунт"}</h1>
          <p>
            Кабинет нужен для истории заказов, избранного, повторной покупки и
            сохранения адресов доставки.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {isRegister ? (
            <label>
              Имя
              <input name="name" minLength={2} required placeholder="Лариса" />
            </label>
          ) : null}
          <label>
            Email
            <input
              name="email"
              required
              type="email"
              placeholder="client@mail.ru"
            />
          </label>
          <label>
            Пароль
            <input
              name="password"
              required
              type="password"
              minLength={6}
              placeholder="Минимум 6 символов"
            />
          </label>
          <button className="primary-link" type="submit">
            {isRegister ? "Создать аккаунт" : "Войти"}
          </button>
          {status ? <p className={styles.status}>{status}</p> : null}
          <p>
            {isRegister ? "Уже есть аккаунт?" : "Еще нет аккаунта?"}{" "}
            <Link href={isRegister ? "/login" : "/register"}>
              {isRegister ? "Войти" : "Зарегистрироваться"}
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
