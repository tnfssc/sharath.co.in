import cloudAdapter from "@sveltejs/adapter-auto";
import nodeAdapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: process.env.USE_NODE_ADAPTER ? nodeAdapter() : cloudAdapter(),
    alias: {
      $components: "/src/components",
      $lib: "/src/lib",
      $routes: "/src/routes",
    },
  },
  onwarn: (warning, handler) => {
    if (warning.code.startsWith("a11y-")) return;
    handler(warning);
  },
};

export default config;
