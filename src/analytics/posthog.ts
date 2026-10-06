import type { PostHog } from 'posthog-js';
import { Project } from '../types';

const apiKey = import.meta.env.VITE_POSTHOG_KEY;
const apiHost = import.meta.env.VITE_POSTHOG_HOST ?? 'https://us.i.posthog.com';

let client: PostHog | null = null;

/**
 * Loads and starts PostHog in its own chunk, so the ~100 kB library never sits
 * in the initial bundle and never blocks the first render.
 *
 * Skipped during `pnpm dev` so local browsing stays out of the production
 * project, and skipped when no key is configured. Use `pnpm build && pnpm
 * preview` to exercise tracking locally.
 */
export async function initAnalytics() {
  if (import.meta.env.DEV) {
    return;
  }

  if (typeof apiKey !== 'string' || apiKey.length === 0) {
    return;
  }

  const { default: posthog } = await import('posthog-js');

  posthog.init(apiKey, {
    api_host: apiHost,
    // This is a single page app, so pageviews follow history changes
    // rather than full page loads.
    capture_pageview: 'history_change',
    // Only the events declared in this module are tracked.
    autocapture: false,
    disable_session_recording: true,
  });

  client = posthog;
}

function capture(event: string, properties: Record<string, string>) {
  if (!client) {
    return;
  }

  client.capture(event, properties);
}

/** Where on the page a tracked link lives. */
export type LinkLocation = 'description' | 'reference' | 'logo';

/** A visitor opened a project from the sidebar or mobile menu. */
export function trackProjectOpened(project: Project) {
  capture('project_opened', { project });
}

/** A visitor followed a link out of the portfolio. */
export function trackLinkClicked(params: {
  location: LinkLocation;
  url: string;
  label?: string;
}) {
  capture('link_clicked', {
    location: params.location,
    url: params.url,
    ...(params.label ? { label: params.label } : {}),
  });
}
