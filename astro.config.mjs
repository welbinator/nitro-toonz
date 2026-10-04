// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nitrotoonz.pages.dev',
  base: process.env.PAGES_BASE || '/',
  trailingSlash: 'ignore',
});
