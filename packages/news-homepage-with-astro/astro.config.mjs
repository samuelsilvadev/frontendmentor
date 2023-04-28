import { defineConfig } from "astro/config";
import image from "@astrojs/image";

const isProduction = process.env.MODE === "production";

/**
 * @see https://astro.build/config
 */
export default defineConfig({
  integrations: [image()],
  base: isProduction ? "/news-homepage-with-astro" : "/",
});
