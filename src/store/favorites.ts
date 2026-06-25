"use client";

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const favoriteProductIdsAtom = atomWithStorage<string[]>(
  "ortolux-favorites",
  [],
);

export const favoriteCountAtom = atom((get) => get(favoriteProductIdsAtom).length);

export const toggleFavoriteAtom = atom(null, (get, set, productId: string) => {
  const favorites = get(favoriteProductIdsAtom);

  set(
    favoriteProductIdsAtom,
    favorites.includes(productId)
      ? favorites.filter((item) => item !== productId)
      : [...favorites, productId],
  );
});
