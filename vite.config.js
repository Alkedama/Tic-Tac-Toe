import { defineConfig } from "vite";

export default defineConfig({
    base: "/tic-tac-toe/",
    server: {
        port: 8080,
        host: true
    }
})