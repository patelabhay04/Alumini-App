import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/Alumini-App/",
  plugins: [react()],
  build: {
    outDir: "build"
  }
});
