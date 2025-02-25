"use client";

import { ReactNode, useState, useEffect } from "react";

export function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrating, setIsHydrating] = useState(true);

  useEffect(() => {
    setIsHydrating(false);
  }, []);

  return !isHydrating ? <>{children}</> : <span>Carregando...</span>;
}
