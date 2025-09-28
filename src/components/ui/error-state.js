import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { AlertCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils.ts";
const ErrorState = React.forwardRef(({ className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, "data-slot": "error-state", className: cn("flex min-h-[400px] w-full flex-col items-center justify-center gap-6 rounded-lg border-2 border-dashed border-destructive/50 p-8 text-center", className), ...props }));
});
ErrorState.displayName = "ErrorState";
function ErrorStateIcon({ className, children, ...props }) {
    return (_jsx("div", { "data-slot": "error-state-icon", className: cn("text-destructive flex size-12 items-center justify-center [&_svg]:size-full", className), ...props, children: children ?? _jsx(AlertCircleIcon, {}) }));
}
function ErrorStateTitle({ className, ...props }) {
    return (_jsx("h3", { "data-slot": "error-state-title", className: cn("text-lg font-semibold", className), ...props }));
}
function ErrorStateDescription({ className, ...props }) {
    return (_jsx("p", { "data-slot": "error-state-description", className: cn("text-muted-foreground text-sm", className), ...props }));
}
function ErrorStateContent({ className, ...props }) {
    return (_jsx("div", { "data-slot": "error-state-content", className: cn("flex flex-col items-center gap-2", className), ...props }));
}
function ErrorStateAction({ className, ...props }) {
    return (_jsx("div", { "data-slot": "error-state-action", className: cn("mt-2", className), ...props }));
}
export { ErrorState, ErrorStateIcon, ErrorStateTitle, ErrorStateDescription, ErrorStateContent, ErrorStateAction, };
