import { jsx as _jsx } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider as ReactQueryClientProvider, } from "@tanstack/react-query";
const queryClient = new QueryClient();
export function QueryClientProvider({ children, }) {
    return (_jsx(ReactQueryClientProvider, { client: queryClient, children: children }));
}
