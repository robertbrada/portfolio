import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import '@fontsource-variable/cabin';
import '@fontsource/source-serif-pro';
import '@fontsource/poppins';
import '@fontsource-variable/lexend-deca';
import '@fontsource-variable/rubik';
import './index.css';

// Create router instance with base path for GitHub Pages
const router = createRouter({
  routeTree,
  basepath: '/portfolio',
});

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
