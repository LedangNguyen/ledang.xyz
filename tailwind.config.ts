import type { Config } from "tailwindcss";
export default <Partial<Config>>{
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
  },
  plugins: [],
};
