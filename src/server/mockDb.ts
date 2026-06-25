import type { CartLine } from "../types/shop";

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
};

export type OrderRecord = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  city: string;
  comment?: string;
  items: CartLine[];
  status: "new" | "processing" | "completed";
  createdAt: string;
};

type MockDatabase = {
  users: UserRecord[];
  orders: OrderRecord[];
};

const globalForDb = globalThis as typeof globalThis & {
  __ortoluxMockDb?: MockDatabase;
};

export const mockDb =
  globalForDb.__ortoluxMockDb ??
  (globalForDb.__ortoluxMockDb = {
    users: [],
    orders: [],
  });

export function createId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
