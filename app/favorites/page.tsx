import type { Metadata } from "next";

import { FavoritesPage } from "@/src/sections/FavoritesPage/FavoritesPage";

export const metadata: Metadata = {
  title: "Избранное",
  description:
    "Избранные товары OrtoLux: сохраненные матрасы, кровати и аксессуары для быстрого возврата к покупке.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <FavoritesPage />;
}
