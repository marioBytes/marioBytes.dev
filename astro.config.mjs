import { defineConfig } from 'astro/config';

PORT = 3000;
BASE_URL = 'https://mariobytes.github.io';

// https://astro.build/config
export default defineConfig({
  server: { port: PORT },
  site: BASE_URL,
});
