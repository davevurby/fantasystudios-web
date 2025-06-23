// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  experimental: {
    fonts: [{
      provider: "local",
      name: "Neuf",
      cssVariable: "--font-neuf",
      variants: [
          {
              src: ["./public/fonts/Neuf.otf"]
          },
      ]
  },
  {
    provider: fontProviders.google(),
    name: "Afacad",
    weights: [400],
    cssVariable: "--font-afacad"
}]
  },
});