import type { Metadata } from "next";

import { AccountPage } from "@/src/sections/AccountPage/AccountPage";

export const metadata: Metadata = {
  title: "Личный кабинет",
  description:
    "Личный кабинет OrtoLux: профиль покупателя, заказы, адреса доставки, корзина и быстрые действия.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <AccountPage />;
}
