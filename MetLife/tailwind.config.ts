import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ahganirya: ["Ahganirya", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
