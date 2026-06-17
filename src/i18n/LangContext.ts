import { createContext } from "react";
import type { Lang } from "./types";
import type { Dictionary } from "./dictionaries";

export type LangContextValue = {
  lang: Lang;
  dict: Dictionary;
};

/**
 * Created with a sentinel undefined so consumers without a provider
 * fail loudly in dev — easier to spot a missing `<LangProvider>` wrapper.
 */
export const LangContext = createContext<LangContextValue | undefined>(undefined);
