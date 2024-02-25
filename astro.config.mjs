import { defineConfig } from 'astro/config';

SERVER_PORT = 3000;
BASE_URL = 'https://mariobytes.github.io';

// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
});
