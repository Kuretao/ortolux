import type { BlogArticle, Brand, Category, Partner, Product } from "../types/shop";

export const categories: Category[] = [
  {
    id: "mattresses",
    title: "Матрасы",
    description: "Ортопедические, беспружинные, детские и модели в рулоне.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    href: "/catalog?category=mattresses",
  },
  {
    id: "beds",
    title: "Кровати",
    description: "Мягкие кровати, основания и подъемные механизмы.",
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=80",
    href: "/catalog?category=beds",
  },
  {
    id: "pillows",
    title: "Подушки",
    description: "Анатомические подушки для сна на спине, боку и животе.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
    href: "/catalog?category=pillows",
  },
  {
    id: "accessories",
    title: "Аксессуары",
    description: "Наматрасники, защитные чехлы, одеяла и текстиль.",
    image:
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=900&q=80",
    href: "/catalog?category=accessories",
  },
];

export const products: Product[] = [
  {
    id: "p-001",
    slug: "ortolux-balance-160x200",
    title: "OrtoLux Balance",
    sku: "OL-BAL-160200",
    brand: "OrtoLux",
    category: "Матрасы",
    size: "160 x 200",
    firmness: "Средний",
    height: "22 см",
    weightLimit: "до 120 кг",
    country: "Россия",
    warranty: "18 месяцев",
    stock: "in_stock",
    createdAt: "2026-05-18",
    price: 34990,
    oldPrice: 42990,
    rating: 4.8,
    reviews: 41,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=85",
    ],
    badges: ["Хит", "-19%"],
    description:
      "Универсальный ортопедический матрас для пары: независимый пружинный блок, комфортная пена и усиленный периметр.",
    composition: ["Независимые пружины", "Пена OrtoFoam", "Жаккардовый чехол"],
    characteristics: {
      "Тип матраса": "Пружинный",
      "Жесткость сторон": "Средняя / средняя",
      "Наполнитель": "OrtoFoam, спанбонд",
      "Макс. нагрузка": "120 кг на место",
      "Гарантия": "18 месяцев",
    },
    variants: [
      {
        id: "p-001-140x200",
        size: "140 x 200",
        firmness: "Средний",
        height: "22 см",
        price: 29990,
        oldPrice: 36990,
        stock: "in_stock",
        sku: "OL-BAL-140200",
      },
      {
        id: "p-001-160x200",
        size: "160 x 200",
        firmness: "Средний",
        height: "22 см",
        price: 34990,
        oldPrice: 42990,
        stock: "in_stock",
        sku: "OL-BAL-160200",
      },
      {
        id: "p-001-180x200",
        size: "180 x 200",
        firmness: "Средний",
        height: "22 см",
        price: 39990,
        oldPrice: 48990,
        stock: "preorder",
        sku: "OL-BAL-180200",
      },
    ],
  },
  {
    id: "p-002",
    slug: "ortolux-cloud-180x200",
    title: "OrtoLux Cloud",
    sku: "OL-CLO-180200",
    brand: "OrtoLux",
    category: "Матрасы",
    size: "180 x 200",
    firmness: "Мягкий",
    height: "26 см",
    weightLimit: "до 110 кг",
    country: "Россия",
    warranty: "24 месяца",
    stock: "preorder",
    createdAt: "2026-06-04",
    price: 51990,
    oldPrice: 58990,
    rating: 4.9,
    reviews: 27,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=85",
    ],
    badges: ["Премиум"],
    description:
      "Мягкая модель с выраженным анатомическим эффектом для тех, кто любит ощущение гостиничной кровати.",
    composition: ["Memory Foam", "Латексированный слой", "Трикотажный чехол"],
    characteristics: {
      "Тип матраса": "Беспружинный",
      "Жесткость сторон": "Мягкая / средняя",
      "Наполнитель": "Memory Foam, латекс",
      "Макс. нагрузка": "110 кг на место",
      "Гарантия": "24 месяца",
    },
    variants: [
      {
        id: "p-002-160x200",
        size: "160 x 200",
        firmness: "Мягкий",
        height: "26 см",
        price: 45990,
        oldPrice: 52990,
        stock: "in_stock",
        sku: "OL-CLO-160200",
      },
      {
        id: "p-002-180x200",
        size: "180 x 200",
        firmness: "Мягкий",
        height: "26 см",
        price: 51990,
        oldPrice: 58990,
        stock: "preorder",
        sku: "OL-CLO-180200",
      },
    ],
  },
  {
    id: "p-003",
    slug: "ortolux-hard-pro-160x200",
    title: "OrtoLux Hard Pro",
    sku: "OL-HRD-160200",
    brand: "OrtoLux Pro",
    category: "Матрасы",
    size: "160 x 200",
    firmness: "Жесткий",
    height: "24 см",
    weightLimit: "до 140 кг",
    country: "Россия",
    warranty: "24 месяца",
    stock: "in_stock",
    createdAt: "2026-04-12",
    price: 38990,
    rating: 4.7,
    reviews: 34,
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=85",
    ],
    badges: ["Жесткий"],
    description:
      "Плотный матрас с кокосовой койрой и усиленной поддержкой позвоночника.",
    composition: ["Кокосовая койра", "Пружины Pocket", "Пена высокой плотности"],
    characteristics: {
      "Тип матраса": "Пружинный",
      "Жесткость сторон": "Высокая / высокая",
      "Наполнитель": "Кокосовая койра, OrtoFoam",
      "Макс. нагрузка": "140 кг на место",
      "Гарантия": "24 месяца",
    },
    variants: [
      {
        id: "p-003-160x200",
        size: "160 x 200",
        firmness: "Жесткий",
        height: "24 см",
        price: 38990,
        stock: "in_stock",
        sku: "OL-HRD-160200",
      },
      {
        id: "p-003-180x200",
        size: "180 x 200",
        firmness: "Жесткий",
        height: "24 см",
        price: 44990,
        stock: "in_stock",
        sku: "OL-HRD-180200",
      },
    ],
  },
  {
    id: "p-004",
    slug: "ortolux-kids-mini",
    title: "OrtoLux Kids Mini",
    sku: "OL-KID-80160",
    brand: "OrtoLux Kids",
    category: "Детские матрасы",
    size: "80 x 160",
    firmness: "Средний",
    height: "14 см",
    weightLimit: "до 70 кг",
    country: "Россия",
    warranty: "12 месяцев",
    stock: "in_stock",
    createdAt: "2026-06-10",
    price: 12990,
    oldPrice: 15990,
    rating: 4.9,
    reviews: 19,
    image:
      "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?auto=format&fit=crop&w=1000&q=85",
    ],
    badges: ["Детский"],
    description:
      "Детский матрас умеренной жесткости с гипоаллергенными материалами и съемным чехлом.",
    composition: ["Пена Kids Foam", "Холлкон", "Съемный чехол"],
    characteristics: {
      "Тип матраса": "Беспружинный",
      "Жесткость сторон": "Средняя",
      "Наполнитель": "Kids Foam, холлкон",
      "Макс. нагрузка": "70 кг",
      "Гарантия": "12 месяцев",
    },
    variants: [
      {
        id: "p-004-80160",
        size: "80 x 160",
        firmness: "Средний",
        height: "14 см",
        price: 12990,
        oldPrice: 15990,
        stock: "in_stock",
        sku: "OL-KID-80160",
      },
      {
        id: "p-004-90200",
        size: "90 x 200",
        firmness: "Средний",
        height: "14 см",
        price: 15990,
        oldPrice: 18990,
        stock: "preorder",
        sku: "OL-KID-90200",
      },
    ],
  },
  {
    id: "p-005",
    slug: "ortolux-duo-side",
    title: "OrtoLux Duo Side",
    sku: "OL-DUO-140200",
    brand: "OrtoLux",
    category: "Матрасы",
    size: "140 x 200",
    firmness: "Разносторонний",
    height: "23 см",
    weightLimit: "до 120 кг",
    country: "Россия",
    warranty: "18 месяцев",
    stock: "in_stock",
    createdAt: "2026-03-21",
    price: 31990,
    rating: 4.6,
    reviews: 22,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=85",
    ],
    badges: ["2 жесткости"],
    description:
      "Две стороны жесткости в одном матрасе: мягче для отдыха, плотнее для поддержки спины.",
    composition: ["Пена Comfort", "Кокосовая койра", "Независимые пружины"],
    characteristics: {
      "Тип матраса": "Пружинный",
      "Жесткость сторон": "Средняя / высокая",
      "Наполнитель": "Comfort Foam, кокос",
      "Макс. нагрузка": "120 кг на место",
      "Гарантия": "18 месяцев",
    },
    variants: [
      {
        id: "p-005-140x200",
        size: "140 x 200",
        firmness: "Разносторонний",
        height: "23 см",
        price: 31990,
        stock: "in_stock",
        sku: "OL-DUO-140200",
      },
      {
        id: "p-005-160x200",
        size: "160 x 200",
        firmness: "Разносторонний",
        height: "23 см",
        price: 36990,
        stock: "in_stock",
        sku: "OL-DUO-160200",
      },
    ],
  },
  {
    id: "p-006",
    slug: "ortolux-air-roll",
    title: "OrtoLux Air Roll",
    sku: "OL-AIR-90200",
    brand: "OrtoLux Roll",
    category: "Матрасы в рулоне",
    size: "90 x 200",
    firmness: "Средний",
    height: "18 см",
    weightLimit: "до 100 кг",
    country: "Россия",
    warranty: "12 месяцев",
    stock: "out_of_stock",
    createdAt: "2026-05-30",
    price: 17990,
    oldPrice: 21990,
    rating: 4.7,
    reviews: 53,
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85",
    ],
    badges: ["В рулоне"],
    description:
      "Компактная модель в вакуумной упаковке, которую удобно доставить и разложить дома.",
    composition: ["Пена Air Foam", "Рельефная поверхность", "Стрейч-чехол"],
    characteristics: {
      "Тип матраса": "Беспружинный",
      "Жесткость сторон": "Средняя",
      "Наполнитель": "Air Foam",
      "Макс. нагрузка": "100 кг",
      "Гарантия": "12 месяцев",
    },
    variants: [
      {
        id: "p-006-90200",
        size: "90 x 200",
        firmness: "Средний",
        height: "18 см",
        price: 17990,
        oldPrice: 21990,
        stock: "out_of_stock",
        sku: "OL-AIR-90200",
      },
      {
        id: "p-006-120200",
        size: "120 x 200",
        firmness: "Средний",
        height: "18 см",
        price: 21990,
        oldPrice: 25990,
        stock: "preorder",
        sku: "OL-AIR-120200",
      },
    ],
  },
  {
    id: "p-007",
    slug: "ortolux-base-lift",
    title: "OrtoLux Base Lift",
    sku: "OL-BAS-160200",
    brand: "DreamBase",
    category: "Кровати",
    size: "160 x 200",
    firmness: "Средний",
    height: "110 см",
    weightLimit: "до 240 кг",
    country: "Россия",
    warranty: "18 месяцев",
    stock: "preorder",
    createdAt: "2026-06-12",
    price: 54990,
    oldPrice: 64990,
    rating: 4.8,
    reviews: 18,
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1000&q=85",
    ],
    badges: ["Кровать", "Подъемный механизм"],
    description:
      "Мягкая кровать с подъемным механизмом, бельевым коробом и универсальным дизайном для современной спальни.",
    composition: ["Тканевая обивка", "Металлическое основание", "Ламели"],
    characteristics: {
      "Тип товара": "Кровать",
      "Основание": "Ортопедическое",
      "Механизм": "Подъемный",
      "Короб": "Есть",
      "Гарантия": "18 месяцев",
    },
    variants: [
      {
        id: "p-007-140x200",
        size: "140 x 200",
        firmness: "Средний",
        height: "110 см",
        price: 49990,
        oldPrice: 58990,
        stock: "preorder",
        sku: "OL-BAS-140200",
      },
      {
        id: "p-007-160x200",
        size: "160 x 200",
        firmness: "Средний",
        height: "110 см",
        price: 54990,
        oldPrice: 64990,
        stock: "preorder",
        sku: "OL-BAS-160200",
      },
    ],
  },
  {
    id: "p-008",
    slug: "ortolux-memory-pillow",
    title: "OrtoLux Memory Pillow",
    sku: "OL-PIL-MEM",
    brand: "Comfort Line",
    category: "Подушки",
    size: "60 x 40",
    firmness: "Средний",
    height: "12 см",
    weightLimit: "универсальная",
    country: "Россия",
    warranty: "12 месяцев",
    stock: "in_stock",
    createdAt: "2026-06-16",
    price: 5990,
    oldPrice: 7990,
    rating: 4.9,
    reviews: 46,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85",
    ],
    badges: ["Новинка", "Memory Foam"],
    description:
      "Анатомическая подушка с эффектом памяти для сна на боку и спине.",
    composition: ["Memory Foam", "Съемный чехол", "Вентиляционные каналы"],
    characteristics: {
      "Тип товара": "Подушка",
      "Материал": "Memory Foam",
      "Чехол": "Съемный",
      "Поза сна": "На боку и спине",
      "Гарантия": "12 месяцев",
    },
    variants: [
      {
        id: "p-008-6040",
        size: "60 x 40",
        firmness: "Средний",
        height: "12 см",
        price: 5990,
        oldPrice: 7990,
        stock: "in_stock",
        sku: "OL-PIL-MEM",
      },
    ],
  },
  {
    id: "p-009",
    slug: "ortolux-protect-cover",
    title: "OrtoLux Protect Cover",
    sku: "OL-COV-160200",
    brand: "SleepForm",
    category: "Аксессуары",
    size: "160 x 200",
    firmness: "Мягкий",
    height: "2 см",
    weightLimit: "универсальный",
    country: "Россия",
    warranty: "12 месяцев",
    stock: "in_stock",
    createdAt: "2026-06-18",
    price: 4990,
    rating: 4.7,
    reviews: 31,
    image:
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1000&q=85",
    ],
    badges: ["Защита", "В наличии"],
    description:
      "Защитный наматрасник с резинками по углам, который продлевает срок службы матраса.",
    composition: ["Микрофибра", "Влагозащитный слой", "Эластичные крепления"],
    characteristics: {
      "Тип товара": "Наматрасник",
      "Крепление": "Резинки по углам",
      "Защита": "От влаги и загрязнений",
      "Уход": "Машинная стирка",
      "Гарантия": "12 месяцев",
    },
    variants: [
      {
        id: "p-009-140x200",
        size: "140 x 200",
        firmness: "Мягкий",
        height: "2 см",
        price: 4490,
        stock: "in_stock",
        sku: "OL-COV-140200",
      },
      {
        id: "p-009-160x200",
        size: "160 x 200",
        firmness: "Мягкий",
        height: "2 см",
        price: 4990,
        stock: "in_stock",
        sku: "OL-COV-160200",
      },
      {
        id: "p-009-180x200",
        size: "180 x 200",
        firmness: "Мягкий",
        height: "2 см",
        price: 5490,
        stock: "in_stock",
        sku: "OL-COV-180200",
      },
    ],
  },
];

export const heroSlides = [
  {
    title: "Матрасы под сон, а не под витрину",
    text: "Подберем размер, жесткость и бюджет для спальни, детской или съемной квартиры.",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Скидки на популярные размеры",
    text: "160x200, 180x200 и детские модели с доставкой и подъемом.",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1800&q=85",
  },
];

export const commerceBanners = [
  {
    id: "summer-sale",
    title: "Большая распродажа матрасов",
    text: "Скидки до 45% на популярные размеры 160x200 и 180x200. Доставка по городу от 0 ₽.",
    label: "акция недели",
    href: "/catalog?sale=true",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "kids",
    title: "Детские матрасы и подушки",
    text: "Гипоаллергенные материалы, съемные чехлы и размеры для детских кроватей.",
    label: "для детской",
    href: "/catalog?category=Детские матрасы",
    image:
      "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "sets",
    title: "Комплект для спальни выгоднее",
    text: "Матрас, основание, подушка и защитный чехол в одном заказе.",
    label: "комплекты",
    href: "/catalog",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1800&q=85",
  },
];

export const quickCatalog = [
  { title: "Матрасы 160x200", href: "/catalog?size=160x200", value: "от 17 990 ₽" },
  { title: "Матрасы 180x200", href: "/catalog?size=180x200", value: "от 39 990 ₽" },
  { title: "Детские матрасы", href: "/catalog?category=Детские матрасы", value: "от 12 990 ₽" },
  { title: "Матрасы в рулоне", href: "/catalog?category=Матрасы в рулоне", value: "доставка проще" },
  { title: "Кровати", href: "/catalog?category=beds", value: "под заказ" },
  { title: "Подушки", href: "/catalog?category=pillows", value: "для сна и шеи" },
];

export const cityDelivery = [
  {
    city: "Москва",
    delivery: "доставка сегодня или завтра",
    pickup: "18 пунктов выдачи",
  },
  {
    city: "Санкт-Петербург",
    delivery: "доставка 1-2 дня",
    pickup: "12 пунктов выдачи",
  },
  {
    city: "Тосно",
    delivery: "доставка 1-3 дня из Санкт-Петербурга",
    pickup: "самовывоз по согласованию",
  },
  {
    city: "Саратов",
    delivery: "доставка 1-2 дня",
    pickup: "городская доставка и подъем",
  },
];

export const seoFaq = [
  {
    question: "Как выбрать жесткость матраса?",
    answer:
      "Для большинства покупателей подходит средняя жесткость. Жесткие модели чаще выбирают для высокой нагрузки или по рекомендации врача, мягкие - если важен выраженный комфортный слой.",
  },
  {
    question: "Какой размер матраса самый популярный?",
    answer:
      "Для двуспальной кровати чаще всего покупают матрасы 160x200 и 180x200 см. Для односпальной кровати популярны 80x200 и 90x200 см.",
  },
  {
    question: "Можно ли заменить наполнение и фото из CMS?",
    answer:
      "Да, структура данных уже отделена от интерфейса: товары, категории, SEO-тексты и баннеры можно будет подключить к CMS без переписывания компонентов.",
  },
];

export const brands: Brand[] = [
  { id: "ortolux", title: "OrtoLux", country: "Россия" },
  { id: "ortolux-pro", title: "OrtoLux Pro", country: "Россия" },
  { id: "sleep-form", title: "SleepForm", country: "Россия" },
  { id: "comfort-line", title: "Comfort Line", country: "Россия" },
  { id: "dream-base", title: "DreamBase", country: "Россия" },
];

export const partners: Partner[] = [
  {
    id: "cdek",
    title: "СДЭК",
    type: "Доставка",
    description:
      "Расчет доставки, пункты выдачи и статусы отправлений для региональных заказов.",
  },
  {
    id: "boxberry",
    title: "Boxberry",
    type: "Доставка",
    description:
      "Дополнительный провайдер доставки небольших товаров и аксессуаров.",
  },
  {
    id: "delovie-linii",
    title: "Деловые Линии",
    type: "Логистика",
    description:
      "Перевозка крупногабаритных матрасов, оснований и кроватей между городами.",
  },
  {
    id: "yandex-delivery",
    title: "Яндекс.Доставка",
    type: "Курьерская доставка",
    description:
      "Быстрая городская доставка и трекинг статуса заказа в реальном времени.",
  },
  {
    id: "manufacturers",
    title: "Производители матрасов",
    type: "Поставщики",
    description:
      "Бренды и фабрики, которые передают остатки, цены, сертификаты и изображения товаров.",
  },
];

export const blogArticles: BlogArticle[] = [
  {
    id: "a-001",
    slug: "kak-vybrat-zhestkost-matrasa",
    title: "Как выбрать жесткость матраса",
    excerpt:
      "Разбираем мягкие, средние и жесткие модели: кому что подходит и когда лучше смотреть разносторонний матрас.",
    category: "Выбор матраса",
    readTime: "6 минут",
    publishedAt: "2026-06-02",
  },
  {
    id: "a-002",
    slug: "matras-160x200-ili-180x200",
    title: "160x200 или 180x200: какой размер взять",
    excerpt:
      "Короткая памятка для двуспальной кровати: запас по ширине, привычки сна и ограничения спальни.",
    category: "Размеры",
    readTime: "4 минуты",
    publishedAt: "2026-05-20",
  },
  {
    id: "a-003",
    slug: "uhod-za-matrasom",
    title: "Как продлить срок службы матраса",
    excerpt:
      "Поворот сторон, защитный чехол, проветривание и базовый уход без сложной химии.",
    category: "Уход",
    readTime: "5 минут",
    publishedAt: "2026-04-28",
  },
  {
    id: "a-004",
    slug: "kak-oformit-spalnyu",
    title: "Как собрать спокойную спальню",
    excerpt:
      "Матрас, кровать, текстиль и свет: что влияет на ощущение отдыха сильнее всего.",
    category: "Интерьер",
    readTime: "7 минут",
    publishedAt: "2026-04-14",
  },
  {
    id: "a-005",
    slug: "pochemu-vazhna-podushka",
    title: "Почему подушка меняет качество сна",
    excerpt:
      "Разбираем высоту, форму, жесткость и привычную позу сна на простых примерах.",
    category: "Подушки",
    readTime: "5 минут",
    publishedAt: "2026-03-28",
  },
];

export const promoBanners = [
  {
    title: "Комплект для спальни со скидкой",
    text: "Матрас, основание и анатомическая подушка в одном заказе.",
    href: "/catalog?sale=true",
  },
  {
    title: "Бесплатная доставка от 30 000 ₽",
    text: "Для матрасов и комплектов по городу при оформлении онлайн.",
    href: "/delivery",
  },
];
