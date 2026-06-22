import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        premium: "0 22px 55px -26px rgba(10, 58, 148, 0.34)",
      },
    },
  },
  plugins: [],
};

export default config;
