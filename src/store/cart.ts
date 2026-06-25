"use client";

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import type { CartLine } from "../types/shop";

export const cartItemsAtom = atomWithStorage<CartLine[]>("ortolux-cart", []);

export const cartCountAtom = atom((get) =>
  get(cartItemsAtom).reduce((sum, item) => sum + item.quantity, 0),
);

type AddToCartPayload =
  | string
  | {
      productId: string;
      variantId?: string;
    };

const getPayload = (payload: AddToCartPayload) =>
  typeof payload === "string" ? { productId: payload } : payload;

const isSameLine = (
  item: CartLine,
  payload: { productId: string; variantId?: string },
) => item.productId === payload.productId && item.variantId === payload.variantId;

export const addToCartAtom = atom(null, (get, set, payload: AddToCartPayload) => {
  const selected = getPayload(payload);
  const items = get(cartItemsAtom);
  const existing = items.find((item) => isSameLine(item, selected));

  if (existing) {
    set(
      cartItemsAtom,
      items.map((item) =>
        isSameLine(item, selected)
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
    return;
  }

  set(cartItemsAtom, [...items, { ...selected, quantity: 1 }]);
});

export const updateCartItemAtom = atom(
  null,
  (
    get,
    set,
    payload: { productId: string; variantId?: string; quantity: number },
  ) => {
    const quantity = Math.max(1, payload.quantity);

    set(
      cartItemsAtom,
      get(cartItemsAtom).map((item) =>
        isSameLine(item, payload) ? { ...item, quantity } : item,
      ),
    );
  },
);

export const removeCartItemAtom = atom(
  null,
  (get, set, payload: { productId: string; variantId?: string }) => {
  set(
    cartItemsAtom,
    get(cartItemsAtom).filter((item) => !isSameLine(item, payload)),
  );
  },
);
