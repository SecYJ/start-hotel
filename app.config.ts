import { defineConfig } from "@tanstack/start/config";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import tsConfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default defineConfig({
	vite: {
		plugins: [
			tailwindcss(),
			tsConfigPaths({
				projects: ["./tsconfig.json"],
			}),
		],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./app"),
			},
		},
	},
});
