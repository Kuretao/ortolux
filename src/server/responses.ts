import { NextResponse } from "next/server";

export function ok<T>(data: T, init?: ResponseInit) {
  return NextResponse.json(data, init);
}

export function badRequest(message: string) {
  return NextResponse.json({ message }, { status: 400 });
}

export function notFound(message = "Не найдено") {
  return NextResponse.json({ message }, { status: 404 });
}
