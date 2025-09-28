import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { AuthProvider as ReactAuthProvider, } from "react-oidc-context";
const AUTH_CONFIG = {
    authority: import.meta.env.VITE_HERCULES_OIDC_AUTHORITY,
    client_id: import.meta.env.VITE_HERCULES_OIDC_CLIENT_ID,
    redirect_uri: window.location.origin,
    response_type: "code",
    scope: "openid profile email",
};
export function AuthProvider({ children }) {
    const onSigninCallback = useCallback(() => {
        window.history.replaceState({}, document.title, window.location.pathname);
    }, []);
    const onSignoutCallback = useCallback(() => {
        window.location.pathname = "/";
    }, []);
    return (_jsx(ReactAuthProvider, { ...AUTH_CONFIG, onSigninCallback: onSigninCallback, onSignoutCallback: onSignoutCallback, children: children }));
}
