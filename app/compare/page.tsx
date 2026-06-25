import type { Metadata } from "next";

import { ComparePage } from "@/src/sections/ComparePage/ComparePage";

export const metadata: Metadata = {
  title: "Сравнение товаров",
  description:
    "Сравнение матрасов и товаров OrtoLux по цене, размеру, жесткости, высоте, нагрузке и гарантии.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ComparePage />;
}
