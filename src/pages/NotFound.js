import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
export default function NotFound() {
    const location = useLocation();
    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: _jsxs("div", { className: "text-center space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h1", { className: "text-6xl font-bold text-muted-foreground", children: "404" }), _jsx("h2", { className: "text-2xl font-semibold", children: "Page Not Found" })] }), _jsx("p", { className: "text-lg text-muted-foreground max-w-md mx-auto", children: "This page does not exist." }), _jsx("div", { className: "pt-4", children: _jsx(Button, { asChild: true, children: _jsx(Link, { to: "/", children: "Return to Home" }) }) })] }) }));
}
