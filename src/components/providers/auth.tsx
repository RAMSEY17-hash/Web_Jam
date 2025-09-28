import { createContext, useContext } from "react";

// Provider d'auth simplifié pour un site statique
const AuthContext = createContext({
    isAuthenticated: false,
    user: null,
    signinRedirect: () => { },
    removeUser: () => { },
    isLoading: false,
    error: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <AuthContext.Provider value={{
            isAuthenticated: false,
            user: null,
            signinRedirect: () => console.log("Auth non configuré"),
            removeUser: () => { },
            isLoading: false,
            error: null,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);