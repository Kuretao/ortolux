import { mockDb } from "@/src/server/mockDb";
import { badRequest, ok } from "@/src/server/responses";

type LoginPayload = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginPayload;
  const email = body.email?.toLowerCase().trim();
  const password = body.password ?? "";
  const user = mockDb.users.find(
    (item) => item.email === email && item.password === password,
  );

  if (!user) {
    return badRequest("Неверный email или пароль");
  }

  return ok({
    message: "Вход выполнен",
    user: { id: user.id, name: user.name, email: user.email },
    token: `demo-token-${user.id}`,
  });
}
