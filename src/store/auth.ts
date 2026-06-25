"use client";

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  address?: string;
  sleepPreference?: string;
  preferredSize?: string;
};

export type AuthSession = {
  user: AuthUser;
  token: string;
  createdAt: string;
};

export const authSessionAtom = atomWithStorage<AuthSession | null>(
  "ortolux-auth-session",
  null,
);

export const logoutAuthAtom = atom(null, (_get, set) => {
  set(authSessionAtom, null);
});
