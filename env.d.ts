/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HERCULES_OIDC_AUTHORITY: string;
  readonly VITE_HERCULES_OIDC_CLIENT_ID: string;
  readonly VITE_CONVEX_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
