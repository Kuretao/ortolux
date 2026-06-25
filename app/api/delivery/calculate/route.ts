import { badRequest, ok } from "@/src/server/responses";

type DeliveryPayload = {
  city?: string;
  subtotal?: number;
};

export async function POST(request: Request) {
  const body = (await request.json()) as DeliveryPayload;
  const city = body.city?.trim();
  const subtotal = Number(body.subtotal ?? 0);

  if (!city) {
    return badRequest("Укажите город доставки");
  }

  const price = subtotal >= 30000 ? 0 : 900;
  const days = city.toLowerCase() === "саратов" ? "1-2 дня" : "3-7 дней";

  return ok({
    provider: "demo-delivery",
    city,
    price,
    days,
    message:
      price === 0
        ? "Доставка бесплатная"
        : "Стоимость рассчитана по базовому тарифу MVP",
  });
}
