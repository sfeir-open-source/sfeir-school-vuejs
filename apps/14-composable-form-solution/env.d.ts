/// <reference types="vite/client" />
/// <reference types="naive-ui/volar" />

interface ImportMetaEnv {
  readonly VITE_BASE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
