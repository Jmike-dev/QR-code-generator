import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#03000a",
        background: "#e7dbff",
        primary: "#fe103c",
        secondary: "#ecffc2",
        accent: "#01f4c7",
      },
    },
  },
  plugins: [],
};
export default config;
