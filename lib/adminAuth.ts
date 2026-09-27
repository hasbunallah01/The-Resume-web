import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE_NAME = "veylora_admin_session";
const SESSION_HOURS = 12;

function sign(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function adminAuthConfigured() {
  return Boolean(process.env.ADMIN_REVIEWS_PASSWORD && process.env.ADMIN_SESSION_SECRET);
}

export function checkAdminPassword(password: unknown) {
  const expected = process.env.ADMIN_REVIEWS_PASSWORD;
  if (!expected || typeof password !== "string") return false;
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function createSessionCookieValue() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not configured.");
  const expires = Date.now() + SESSION_HOURS * 60 * 60 * 1000;
  const payload = String(expires);
  return `${payload}.${sign(payload, secret)}`;
}

export function verifySessionCookieValue(value: string | undefined | null) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || !value) return false;
  const [payload, sig] = value.split(".");
  if (!payload || !sig) return false;
  const expected = sign(payload, secret);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  return Number(payload) > Date.now();
}
