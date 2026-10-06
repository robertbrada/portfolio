/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * PostHog project API key. This is a publishable, write-only key that ships
   * in the client bundle by design - it is not a secret.
   */
  readonly VITE_POSTHOG_KEY?: string;
  /** PostHog ingestion host. Defaults to the US cloud region. */
  readonly VITE_POSTHOG_HOST?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
