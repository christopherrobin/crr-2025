"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

// Use React.ComponentProps to extract props type directly from NextThemesProvider
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}