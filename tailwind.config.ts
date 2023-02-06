import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./storyblok/**/*.vue"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    screens: {
      xs: "415px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
    },
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("tailwind-scrollbar-hide")],
};
