// Hook d'auth simplifié
export function useAuth() {
    return {
        isAuthenticated: false,
        user: null,
        signinRedirect: () => console.log("Auth non configuré"),
        removeUser: () => { },
        isLoading: false,
        error: null,
        fetchAccessToken: async () => null,
    };
}

export function useUser({ shouldRedirect }: { shouldRedirect?: boolean } = {}) {
    return {
        id: null,
        name: null,
        email: null,
        avatar: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
    };
}