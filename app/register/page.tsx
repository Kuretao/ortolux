import type { Metadata } from "next";

import { AuthPage } from "@/src/sections/AuthPage/AuthPage";

export const metadata: Metadata = {
  title: "Регистрация покупателя",
  description:
    "Создайте аккаунт OrtoLux, чтобы сохранять избранные матрасы, адреса доставки и историю заказов.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <AuthPage mode="register" />;
}
