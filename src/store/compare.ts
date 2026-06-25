"use client";

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const MAX_COMPARE_ITEMS = 3;

export const compareProductIdsAtom = atomWithStorage<string[]>(
  "ortolux-compare",
  [],
);

export const compareCountAtom = atom((get) =>
  Math.min(get(compareProductIdsAtom).length, MAX_COMPARE_ITEMS),
);

export const toggleCompareAtom = atom(null, (get, set, productId: string) => {
  const compareIds = get(compareProductIdsAtom);

  if (compareIds.includes(productId)) {
    set(
      compareProductIdsAtom,
      compareIds.filter((item) => item !== productId),
    );
    return;
  }

  set(compareProductIdsAtom, [...compareIds, productId].slice(-MAX_COMPARE_ITEMS));
});

export const clearCompareAtom = atom(null, (_get, set) => {
  set(compareProductIdsAtom, []);
});
