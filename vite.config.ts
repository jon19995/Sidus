import { defineConfig, normalizePath } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": normalizePath(path.resolve(__dirname, "src")),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import '${normalizePath(
                    path.resolve(__dirname, "src/global.scss")
                )}';`,
            },
        },
    },
});
