import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { AuthProvider } from "@/components/providers/auth.tsx";
import { QueryClientProvider } from "@/components/providers/query-client.tsx";

export function DefaultProviders({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <QueryClientProvider>
                <TooltipProvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <Toaster />
                        {children}
                    </ThemeProvider>
                </TooltipProvider>
            </QueryClientProvider>
        </AuthProvider>
    );
}