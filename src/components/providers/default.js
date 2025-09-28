import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ConvexProviderWithAuth } from "convex/react";
import { ThemeProvider } from "next-themes";
import { convex } from "@/lib/convex.ts";
import { useAuth } from "@/hooks/use-auth.ts";
import { Toaster } from "@/components/ui/sonner.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { AuthProvider } from "@/components/providers/auth.tsx";
import { QueryClientProvider } from "@/components/providers/query-client.tsx";
export function DefaultProviders({ children }) {
    return (_jsx(AuthProvider, { children: _jsx(ConvexProviderWithAuth, { client: convex, useAuth: useAuth, children: _jsx(QueryClientProvider, { children: _jsx(TooltipProvider, { children: _jsxs(ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, children: [_jsx(Toaster, {}), children] }) }) }) }) }));
}
