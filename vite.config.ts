/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const PWAConfig: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  injectRegister: "auto",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePWA(PWAConfig)],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest-setup.ts"],
  },
});
