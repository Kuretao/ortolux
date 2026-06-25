import { products } from "@/src/data/shop";
import { ok } from "@/src/server/responses";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase().trim();
  const category = searchParams.get("category");
  const sale = searchParams.get("sale");
  const inStock = searchParams.get("inStock");
  const sort = searchParams.get("sort") ?? "popular";
  const minPrice = Number(searchParams.get("minPrice") ?? 0);
  const maxPrice = Number(searchParams.get("maxPrice") ?? Number.MAX_SAFE_INTEGER);

  let result = products.filter((product) => {
    const categoryAlias: Record<string, string> = {
      mattresses: "Матрасы",
      beds: "Кровати",
      pillows: "Подушки",
      accessories: "Аксессуары",
      "Детские матрасы": "Детские матрасы",
      "Матрасы в рулоне": "Матрасы в рулоне",
    };
    const normalizedCategory = category ? (categoryAlias[category] ?? category) : null;
    const matchesQuery = query
      ? [product.title, product.brand, product.category, product.size]
          .join(" ")
          .toLowerCase()
          .includes(query)
      : true;
    const matchesCategory = normalizedCategory
      ? product.category === normalizedCategory
      : true;
    const matchesSale = sale === "true" ? Boolean(product.oldPrice) : true;
    const matchesStock = inStock === "true" ? product.stock === "in_stock" : true;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

    return (
      matchesQuery &&
      matchesCategory &&
      matchesSale &&
      matchesStock &&
      matchesPrice
    );
  });

  result = result.toSorted((a, b) => {
    if (sort === "price_asc") return a.price - b.price;
    if (sort === "price_desc") return b.price - a.price;
    if (sort === "new") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    if (sort === "rating") return b.rating - a.rating;

    return b.reviews - a.reviews;
  });

  return ok({
    items: result,
    total: result.length,
    filters: {
      minPrice,
      maxPrice,
      category,
      sale,
      inStock,
      sort,
      query,
    },
  });
}
