"use client";

import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { CopilotKitProvider } from "@copilotkit/react-core";
import { ThemeToggle } from "@/components/theme-toggle";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CopilotKitProvider
        copilotApiUrl="/api/copilotkit"
      >
        <ThemeToggle />
        {children}
      </CopilotKitProvider>
    </ThemeProvider>
  );
}
