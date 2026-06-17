import { useContext } from "react";
import { LangContext } from "./LangContext";

/**
 * Access the current language and full dictionary.
 * Use this when you need conditional logic per locale or want to read
 * deep dict fields. For simple key access, prefer `useT` / `useDict`.
 */
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error(
      "useLang must be used inside <LangProvider>. Did you forget to wrap a route?",
    );
  }
  return ctx;
}
