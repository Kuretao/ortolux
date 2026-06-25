import type { Metadata } from "next";

import { AuthPage } from "@/src/sections/AuthPage/AuthPage";

export const metadata: Metadata = {
  title: "Вход в личный кабинет",
  description:
    "Вход в личный кабинет OrtoLux: история заказов, избранные товары, адреса доставки и повторная покупка матрасов.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <AuthPage mode="login" />;
}
