import { createId, mockDb } from "@/src/server/mockDb";
import { badRequest, ok } from "@/src/server/responses";
import type { CartLine } from "@/src/types/shop";

type OrderPayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  comment?: string;
  items?: CartLine[];
};

export async function GET() {
  return ok({
    items: mockDb.orders,
    total: mockDb.orders.length,
  });
}

export async function POST(request: Request) {
  const body = (await request.json()) as OrderPayload;

  if (!body.name || !body.phone || !body.city) {
    return badRequest("Заполните имя, телефон и город доставки");
  }

  if (!body.items?.length) {
    return badRequest("В заказе нет товаров");
  }

  const order = {
    id: createId("ord"),
    name: body.name,
    phone: body.phone,
    email: body.email,
    city: body.city,
    comment: body.comment,
    items: body.items,
    status: "new" as const,
    createdAt: new Date().toISOString(),
  };

  mockDb.orders.push(order);

  return ok(
    {
      message: "Заказ принят",
      orderId: order.id,
      order,
    },
    { status: 201 },
  );
}
