"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LENS, type Lens } from "@/content/site";

interface LensContextValue {
  lens: Lens;
  setLens: (lens: Lens) => void;
}

const LensContext = createContext<LensContextValue>({ lens: DEFAULT_LENS, setLens: () => {} });

/**
 * Holds the visitor's chosen lens. The server renders the lens from the URL
 * (?for=…), so shared links arrive tailored with no flash; switching updates
 * the URL in place so the tailored view can be copied and sent on.
 */
export function LensProvider({ initial, children }: { initial: Lens; children: ReactNode }) {
  const [lens, setLensState] = useState<Lens>(initial);
  const setLens = useCallback((next: Lens) => {
    setLensState(next);
    const url = new URL(window.location.href);
    url.searchParams.set("for", next);
    window.history.replaceState(window.history.state, "", url);
  }, []);
  const value = useMemo(() => ({ lens, setLens }), [lens, setLens]);
  return <LensContext.Provider value={value}>{children}</LensContext.Provider>;
}

export const useLens = () => useContext(LensContext);
