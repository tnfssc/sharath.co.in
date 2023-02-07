import { sveltekit } from "@sveltejs/kit/vite";
import { config as DotEnv } from "dotenv";
import type { UserConfig } from "vite";

DotEnv();

const config: UserConfig = {
  plugins: [sveltekit()],
  base: process.env.BASE_URL ?? "/",
};

export default config;
