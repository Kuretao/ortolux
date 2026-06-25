import type { Metadata } from "next";

import { Partners } from "@/src/sections/Partners/Partners";

export const metadata: Metadata = {
  title: "Партнеры и интеграции",
  description:
    "Партнеры OrtoLux: службы доставки, логистические сервисы, поставщики матрасов и будущие интеграции интернет-магазина.",
};

export default function Page() {
  return (
    <main className="page-main" id="main-content">
      <Partners />
    </main>
  );
}
