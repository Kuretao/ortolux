import { createId, mockDb } from "@/src/server/mockDb";
import { badRequest, ok } from "@/src/server/responses";

type RegisterPayload = {
  name?: string;
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as RegisterPayload;
  const name = body.name?.trim();
  const email = body.email?.toLowerCase().trim();
  const password = body.password ?? "";

  if (!name || !email || password.length < 6) {
    return badRequest("Заполните имя, email и пароль от 6 символов");
  }

  const existingUser = mockDb.users.find((user) => user.email === email);

  if (existingUser) {
    return badRequest("Пользователь с таким email уже зарегистрирован");
  }

  const user = {
    id: createId("usr"),
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
  };

  mockDb.users.push(user);

  return ok({
    message: "Аккаунт создан",
    user: { id: user.id, name: user.name, email: user.email },
    token: `demo-token-${user.id}`,
  });
}
