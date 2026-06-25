import type { Metadata } from "next";
import { Suspense } from "react";

import { CatalogPage } from "@/src/sections/CatalogPage/CatalogPage";

export const metadata: Metadata = {
  title: "Каталог ортопедических матрасов",
  description:
    "Каталог ортопедических матрасов OrtoLux: размеры 80x200, 90x200, 160x200, 180x200, фильтры по цене и жесткости.",
};

export default function Page() {
  return (
    <Suspense>
      <CatalogPage />
    </Suspense>
  );
}
