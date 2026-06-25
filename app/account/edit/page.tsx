import type { Metadata } from "next";

import { AccountEditPage } from "@/src/sections/AccountEditPage/AccountEditPage";

export const metadata: Metadata = {
  title: "Редактирование профиля",
  description:
    "Редактирование профиля OrtoLux: контакты, город доставки, адрес и предпочтения по товарам для сна.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <AccountEditPage />;
}
