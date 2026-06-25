"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { ArrowLeft, Save } from "lucide-react";

import { CustomSelect } from "@/src/components/CustomSelect/CustomSelect";
import { authSessionAtom } from "@/src/store/auth";

import styles from "./AccountEditPage.module.scss";

export function AccountEditPage() {
  const router = useRouter();
  const [session, setSession] = useAtom(authSessionAtom);
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!session) {
      router.push("/login");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const updatedUser = {
      ...session.user,
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim().toLowerCase(),
      phone: String(formData.get("phone") ?? "").trim(),
      city: String(formData.get("city") ?? "").trim(),
      address: String(formData.get("address") ?? "").trim(),
      sleepPreference: String(formData.get("sleepPreference") ?? "").trim(),
      preferredSize: String(formData.get("preferredSize") ?? "").trim(),
    };

    setSession({ ...session, user: updatedUser });
    setStatus("Профиль сохранен");
  };

  if (!session) {
    return (
      <main className="page-main" id="main-content">
        <section className={`container ${styles.guest}`}>
          <span>профиль</span>
          <h1>Войдите, чтобы редактировать данные</h1>
          <Link className="primary-link" href="/login">
            Войти
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.layout}`}>
        <aside className={styles.hero}>
          <Link href="/account">
            <ArrowLeft size={18} /> Назад в кабинет
          </Link>
          <span>редактирование</span>
          <h1>Настройки профиля</h1>
          <p>
            Эти данные используются в demo-кабинете для быстрых заказов, адресов
            и персональных подсказок.
          </p>
        </aside>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <label>
              Имя
              <input name="name" required defaultValue={session.user.name} />
            </label>
            <label>
              Email
              <input
                name="email"
                required
                type="email"
                defaultValue={session.user.email}
              />
            </label>
            <label>
              Телефон
              <input
                name="phone"
                placeholder="+7 900 000-00-00"
                defaultValue={session.user.phone ?? ""}
              />
            </label>
            <label>
              Город
              <input
                name="city"
                placeholder="Москва"
                defaultValue={session.user.city ?? ""}
              />
            </label>
            <label className={styles.wide}>
              Адрес доставки
              <input
                name="address"
                placeholder="Улица, дом, квартира"
                defaultValue={session.user.address ?? ""}
              />
            </label>
            <label>
              Предпочтение по жесткости
              <CustomSelect
                name="sleepPreference"
                defaultValue={session.user.sleepPreference ?? "Средняя жесткость"}
                options={[
                  { value: "Мягкая поддержка", label: "Мягкая поддержка" },
                  { value: "Средняя жесткость", label: "Средняя жесткость" },
                  { value: "Жесткая поддержка", label: "Жесткая поддержка" },
                  { value: "Разносторонний матрас", label: "Разносторонний матрас" },
                ]}
              />
            </label>
            <label>
              Любимый размер
              <CustomSelect
                name="preferredSize"
                defaultValue={session.user.preferredSize ?? "160 x 200"}
                options={[
                  { value: "90 x 200", label: "90 x 200" },
                  { value: "140 x 200", label: "140 x 200" },
                  { value: "160 x 200", label: "160 x 200" },
                  { value: "180 x 200", label: "180 x 200" },
                ]}
              />
            </label>
          </div>

          <button className="primary-link" type="submit">
            <Save size={18} /> Сохранить
          </button>
          {status ? <p className={styles.status}>{status}</p> : null}
        </form>
      </section>
    </main>
  );
}
