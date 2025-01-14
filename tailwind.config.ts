import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#050505",
        "background-secondary": "#101010",
        "content-primary": "#191919",
        "content-secondary": "#CCCCCC",
        "content-tertiary": "#828282",
        "content-placeholder": "#626077",
        "border-primary": "#2E2E2E",
        "border-secondary": "#3D3D3D",
        "border-tertiary": "#52334A",
        "accent-purple": "#7B89F4",
        "accent-green": "#7BD07B",
        "accent-pink": "#B5466D"
      },
    },
  },
  plugins: [],
};
export default config;
