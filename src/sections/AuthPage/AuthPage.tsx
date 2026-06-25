"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";

import { authSessionAtom, type AuthUser } from "@/src/store/auth";
import styles from "./AuthPage.module.scss";

type AuthPageProps = {
  mode: "login" | "register";
};

type AuthMode = AuthPageProps["mode"];

const authVideoUrl =
  "https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4";

type AuthResponse = {
  message?: string;
  token?: string;
  user?: AuthUser;
};

export function AuthPage({ mode }: AuthPageProps) {
  const router = useRouter();
  const setAuthSession = useSetAtom(authSessionAtom);
  const [activeMode, setActiveMode] = useState<AuthMode>(mode);
  const [status, setStatus] = useState<string>("");
  const [registeredUser, setRegisteredUser] = useState<AuthUser | null>(null);
  const isRegister = activeMode === "register";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch(`/api/auth/${activeMode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json()) as AuthResponse;

    if (!response.ok || !result.user) {
      setStatus(result.message ?? "Не удалось выполнить действие");
      return;
    }

    const token = result.token ?? `demo-token-${result.user.id}`;

    setAuthSession({
      user: result.user,
      token,
      createdAt: new Date().toISOString(),
    });

    if (activeMode === "register") {
      setRegisteredUser(result.user);
      setStatus(result.message ?? "Аккаунт создан");
      return;
    }

    router.push("/account");
  };

  const switchMode = (nextMode: AuthMode) => {
    setActiveMode(nextMode);
    setStatus("");
    setRegisteredUser(null);
  };

  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <video autoPlay loop muted playsInline preload="auto">
            <source src={authVideoUrl} type="video/mp4" />
          </video>
          <div className={styles.contentOverlay} />
          <div className={styles.contentCopy}>
            <span>личный кабинет</span>
            <h1>Профиль для спокойных покупок</h1>
            <p>
              Сохраняйте заказы, адреса и избранные товары без лишних шагов.
            </p>
          </div>
        </div>

        <aside className={styles.formPanel}>
          {registeredUser ? (
            <div className={styles.successPanel}>
              <span>регистрация завершена</span>
              <h2>{registeredUser.name}, аккаунт готов</h2>
              <p>
                Мы сохранили demo-сессию для {registeredUser.email}. Теперь можно
                открыть личный кабинет и посмотреть историю, адреса и быстрые
                действия.
              </p>
              <div className={styles.successActions}>
                <Link className="primary-link" href="/account">
                  Перейти в кабинет
                </Link>
                <button type="button" onClick={() => switchMode("login")}>
                  Войти другим аккаунтом
                </button>
              </div>
            </div>
          ) : (
            <>
          <div className={styles.tabs} role="tablist" aria-label="Авторизация">
            <button
              className={activeMode === "login" ? styles.activeTab : ""}
              type="button"
              role="tab"
              aria-selected={activeMode === "login"}
              onClick={() => switchMode("login")}
            >
              Вход
            </button>
            <button
              className={activeMode === "register" ? styles.activeTab : ""}
              type="button"
              role="tab"
              aria-selected={activeMode === "register"}
              onClick={() => switchMode("register")}
            >
              Регистрация
            </button>
          </div>

          <div className={styles.formIntro}>
            <span>{isRegister ? "новый покупатель" : "возвращаемся"}</span>
            <h2>{isRegister ? "Создать аккаунт" : "Войти в аккаунт"}</h2>
            <p>
              {isRegister
                ? "Зарегистрируйтесь, чтобы сохранять адреса, товары и историю заказов."
                : "Войдите, чтобы продолжить покупки и быстро оформить новый заказ."}
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
            {isRegister ? (
              <label className={styles.agreement}>
                <input name="agreement" required type="checkbox" />
                <span>
                  Соглашаюсь с{" "}
                  <Link href="/privacy">политикой конфиденциальности</Link> и{" "}
                  <Link href="/terms">пользовательским соглашением</Link>
                </span>
              </label>
            ) : null}
            <button className="primary-link" type="submit">
              {isRegister ? "Создать аккаунт" : "Войти"}
            </button>
            {status ? <p className={styles.status}>{status}</p> : null}
          </form>
            </>
          )}
        </aside>
      </section>
    </main>
  );
}
