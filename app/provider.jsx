import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "@/app/_components/AppHeader";
import { AppSidebar } from "@/app/_components/AppSidebar";

function Provider({ children, ...props }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="System"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <SidebarProvider>
        <AppSidebar />
        
        
        <div className="w-full"><AppHeader />{children}</div>
      </SidebarProvider>
    </NextThemesProvider>
  );
}

export default Provider;
