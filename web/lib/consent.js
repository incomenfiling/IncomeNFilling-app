"use client";
import { useSyncExternalStore } from "react";

// Visitor's analytics and chat choice: "all", "essential", or null (not chosen yet).
const KEY = "inf_consent";
let mem = null;
const listeners = new Set();
function read() {
  if (mem) return mem;
  try { return localStorage.getItem(KEY); } catch { return null; }
}
function subscribe(cb) { listeners.add(cb); return () => listeners.delete(cb); }
export function setConsent(v) {
  mem = v;
  try { localStorage.setItem(KEY, v); } catch { /* storage blocked: choice lasts for this visit */ }
  listeners.forEach((f) => f());
}
export function useConsent() {
  return useSyncExternalStore(subscribe, read, () => "unknown");
}
