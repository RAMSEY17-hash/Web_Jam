import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useCallback, useEffect } from "react";
import { Loader2, LogIn, LogOut } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils.ts";
import { useAuth } from "@/hooks/use-auth.ts";
import { Button } from "@/components/ui/button.tsx";
/**
 * A button component that handles authentication sign in/out with proper loading states
 * and accessibility features.
 */
export const SignInButton = forwardRef(({ onClick, disabled, showIcon = true, signInText = "Sign In", signOutText = "Sign Out", loadingText, className, variant, size, asChild = false, ...props }, ref) => {
    const { isAuthenticated, signinRedirect, removeUser, isLoading, error } = useAuth();
    useEffect(() => {
        if (error) {
            toast.error("Login error", {
                description: error.message,
            });
            console.error("Login error", error);
        }
    }, [error]);
    const handleClick = useCallback(async (event) => {
        // Run custom onClick first
        onClick?.(event);
        try {
            if (isAuthenticated) {
                await removeUser();
            }
            else {
                await signinRedirect();
            }
        }
        catch (err) {
            console.error("Authentication error:", err);
            // Don't prevent the default here as the auth library handles errors
        }
    }, [isAuthenticated, signinRedirect, removeUser, onClick]);
    const isDisabled = disabled || isLoading;
    const defaultLoadingText = isAuthenticated
        ? "Signing Out..."
        : "Signing In...";
    const currentLoadingText = loadingText || defaultLoadingText;
    const buttonText = isLoading
        ? currentLoadingText
        : isAuthenticated
            ? signOutText
            : signInText;
    const icon = isLoading ? (_jsx(Loader2, { className: "size-4 animate-spin" })) : isAuthenticated ? (_jsx(LogOut, { className: "size-4" })) : (_jsx(LogIn, { className: "size-4" }));
    return (_jsxs(Button, { ref: ref, onClick: handleClick, disabled: isDisabled, variant: variant, size: size, className: cn(className), asChild: asChild, "aria-label": isAuthenticated
            ? "Sign out of your account"
            : "Sign in to your account", "aria-describedby": error ? "auth-error" : undefined, ...props, children: [showIcon && icon, buttonText] }));
});
SignInButton.displayName = "SignInButton";
