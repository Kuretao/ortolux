import { products } from "@/src/data/shop";
import { notFound, ok } from "@/src/server/responses";

type ProductRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function GET(_: Request, { params }: ProductRouteProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return notFound("Товар не найден");
  }

  return ok({ item: product });
}
