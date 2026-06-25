"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { Grid2X2, List, RotateCcw, SlidersHorizontal, X } from "lucide-react";

import { ProductCard } from "@/src/components/ProductCard/ProductCard";
import { products } from "@/src/data/shop";
import type { Product } from "@/src/types/shop";

import styles from "./CatalogPage.module.scss";

type SortValue = "popular" | "price_asc" | "price_desc" | "new" | "rating";
type ViewValue = "grid" | "list";

const uniq = (items: string[]) => Array.from(new Set(items)).sort();
const minProductPrice = (product: Product) =>
  Math.min(product.price, ...product.variants.map((variant) => variant.price));

const sizes = uniq(
  products.flatMap((product) => [
    product.size.replaceAll(" ", ""),
    ...product.variants.map((variant) => variant.size.replaceAll(" ", "")),
  ]),
);
const firmness = uniq(products.map((product) => product.firmness));
const brands = uniq(products.map((product) => product.brand));
const categories = uniq(products.map((product) => product.category));
const maxCatalogPrice = Math.max(...products.map(minProductPrice));
const categoryAliases: Record<string, string> = {
  mattresses: "Матрасы",
  beds: "Кровати",
  pillows: "Подушки",
  accessories: "Аксессуары",
};
const normalizeCategory = (value: string | null) =>
  value ? (categoryAliases[value] ?? value) : "";
const catalogHeroVideoUrl =
  "https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4";

export function CatalogPage() {
  const searchParams = useSearchParams();
  const initialSize = searchParams.get("size");
  const initialCategory = normalizeCategory(searchParams.get("category"));
  const initialSale = searchParams.get("sale") === "true";
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [maxPrice, setMaxPrice] = useState(maxCatalogPrice);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(
    initialSize ? [initialSize] : [],
  );
  const [selectedFirmness, setSelectedFirmness] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [onlySale, setOnlySale] = useState(initialSale);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sort, setSort] = useState<SortValue>("popular");
  const [view, setView] = useState<ViewValue>("grid");

  const toggleValue = (
    value: string,
    selected: string[],
    setSelected: (value: string[]) => void,
  ) => {
    setSelected(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value],
    );
  };

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => {
        const productSizes = [
          product.size.replaceAll(" ", ""),
          ...product.variants.map((variant) => variant.size.replaceAll(" ", "")),
        ];
        const searchText = [
          product.title,
          product.brand,
          product.category,
          product.size,
          product.firmness,
          product.sku,
        ]
          .join(" ")
          .toLowerCase();
        const matchesQuery = normalizedQuery
          ? searchText.includes(normalizedQuery)
          : true;
        const matchesCategory = selectedCategory
          ? product.category === selectedCategory
          : true;
        const matchesSize = selectedSizes.length
          ? selectedSizes.some((size) => productSizes.includes(size))
          : true;
        const matchesFirmness = selectedFirmness.length
          ? selectedFirmness.includes(product.firmness)
          : true;
        const matchesBrand = selectedBrands.length
          ? selectedBrands.includes(product.brand)
          : true;
        const matchesSale = onlySale ? Boolean(product.oldPrice) : true;
        const matchesStock = onlyInStock ? product.stock === "in_stock" : true;
        const matchesPrice = minProductPrice(product) <= maxPrice;

        return (
          matchesQuery &&
          matchesCategory &&
          matchesSize &&
          matchesFirmness &&
          matchesBrand &&
          matchesSale &&
          matchesStock &&
          matchesPrice
        );
      })
      .toSorted((a, b) => {
        if (sort === "price_asc") return minProductPrice(a) - minProductPrice(b);
        if (sort === "price_desc") return minProductPrice(b) - minProductPrice(a);
        if (sort === "new") {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        if (sort === "rating") return b.rating - a.rating;

        return b.reviews - a.reviews;
      });
  }, [
    maxPrice,
    onlyInStock,
    onlySale,
    query,
    selectedBrands,
    selectedCategory,
    selectedFirmness,
    selectedSizes,
    sort,
  ]);

  const activeChips = [
    ...selectedSizes.map((value) => ({
      label: `Размер ${value}`,
      onRemove: () => setSelectedSizes(selectedSizes.filter((item) => item !== value)),
    })),
    ...selectedFirmness.map((value) => ({
      label: value,
      onRemove: () =>
        setSelectedFirmness(selectedFirmness.filter((item) => item !== value)),
    })),
    ...selectedBrands.map((value) => ({
      label: value,
      onRemove: () =>
        setSelectedBrands(selectedBrands.filter((item) => item !== value)),
    })),
    selectedCategory
      ? { label: selectedCategory, onRemove: () => setSelectedCategory("") }
      : null,
    onlySale ? { label: "Со скидкой", onRemove: () => setOnlySale(false) } : null,
    onlyInStock
      ? { label: "В наличии", onRemove: () => setOnlyInStock(false) }
      : null,
  ].filter(Boolean) as Array<{ label: string; onRemove: () => void }>;

  const resetFilters = () => {
    setQuery("");
    setMaxPrice(maxCatalogPrice);
    setSelectedSizes([]);
    setSelectedFirmness([]);
    setSelectedBrands([]);
    setSelectedCategory("");
    setOnlySale(false);
    setOnlyInStock(false);
    setSort("popular");
  };

  return (
    <main className="page-main" id="main-content">
      <section className={styles.hero}>
        <div className="container">
          <video autoPlay loop muted playsInline preload="auto">
            <source src={catalogHeroVideoUrl} type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span>каталог</span>
            <h1>Ортопедические матрасы</h1>
            <p>
              Гибкая фильтрация по цене, размеру, жесткости, бренду, наличию и
              скидкам. Логика уже готова к переносу на backend API.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.catalog}>
        <div className={`container ${styles.layout}`}>
          <aside className={styles.filters}>
            <div className={styles.filterTitle}>
              <SlidersHorizontal size={20} />
              <strong>Фильтры</strong>
              <button type="button" onClick={resetFilters}>
                <RotateCcw size={16} /> Сбросить
              </button>
            </div>

            <label>
              Поиск
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Название, бренд, размер"
              />
            </label>

            <label>
              Цена до {maxPrice.toLocaleString("ru-RU")} ₽
              <input
                max={maxCatalogPrice}
                min="10000"
                step="1000"
                type="range"
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
              />
            </label>

            <FilterGroup title="Категория">
              <div className={styles.chips}>
                {categories.map((category) => (
                  <button
                    className={selectedCategory === category ? styles.activeChip : ""}
                    key={category}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category ? "" : category,
                      )
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Размер">
              <div className={styles.chips}>
                {sizes.map((size) => (
                  <button
                    className={selectedSizes.includes(size) ? styles.activeChip : ""}
                    key={size}
                    type="button"
                    onClick={() => toggleValue(size, selectedSizes, setSelectedSizes)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Жесткость">
              <div className={styles.checks}>
                {firmness.map((item) => (
                  <label key={item}>
                    <input
                      checked={selectedFirmness.includes(item)}
                      type="checkbox"
                      onChange={() =>
                        toggleValue(item, selectedFirmness, setSelectedFirmness)
                      }
                    />
                    {item}
                  </label>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Бренд">
              <div className={styles.checks}>
                {brands.map((brand) => (
                  <label key={brand}>
                    <input
                      checked={selectedBrands.includes(brand)}
                      type="checkbox"
                      onChange={() =>
                        toggleValue(brand, selectedBrands, setSelectedBrands)
                      }
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </FilterGroup>

            <div className={styles.checks}>
              <label>
                <input
                  checked={onlyInStock}
                  type="checkbox"
                  onChange={(event) => setOnlyInStock(event.target.checked)}
                />
                Только в наличии
              </label>
              <label>
                <input
                  checked={onlySale}
                  type="checkbox"
                  onChange={(event) => setOnlySale(event.target.checked)}
                />
                Товары со скидкой
              </label>
            </div>
          </aside>

          <div className={styles.content}>
            <div className={styles.toolbar}>
              <span>{filteredProducts.length} товаров найдено</span>
              <div className={styles.toolbarActions}>
                <select
                  value={sort}
                  aria-label="Сортировка"
                  onChange={(event) => setSort(event.target.value as SortValue)}
                >
                  <option value="popular">Сначала популярные</option>
                  <option value="price_asc">Сначала дешевле</option>
                  <option value="price_desc">Сначала дороже</option>
                  <option value="new">Сначала новинки</option>
                  <option value="rating">Сначала рейтинг</option>
                </select>
                <div className={styles.viewToggle}>
                  <button
                    className={view === "grid" ? styles.activeView : ""}
                    type="button"
                    onClick={() => setView("grid")}
                    aria-label="Плитка"
                  >
                    <Grid2X2 size={18} />
                  </button>
                  <button
                    className={view === "list" ? styles.activeView : ""}
                    type="button"
                    onClick={() => setView("list")}
                    aria-label="Список"
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {activeChips.length ? (
              <div className={styles.activeFilters}>
                {activeChips.map((chip) => (
                  <button key={chip.label} type="button" onClick={chip.onRemove}>
                    {chip.label} <X size={14} />
                  </button>
                ))}
              </div>
            ) : null}

            <div className={view === "list" ? styles.list : styles.grid}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details open className={styles.filterGroup}>
      <summary>{title}</summary>
      {children}
    </details>
  );
}
