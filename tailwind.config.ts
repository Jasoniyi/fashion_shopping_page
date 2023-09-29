import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home_banner: "url('/banner.svg')",
        limited_offer: "url('/Offer.svg')",
      },
      colors: {
        btnColor: "var(--btn-color)",
        descText: "var(--desc-text)",
        shoppingCartBck: "var(--shopping-cart-bck)",
        borderColor: "var(--border-color)",
        footerBck: "var(--footer-color)",
        footerWhite: "var(--footer-white)",
      },
    },
  },
  plugins: [],
};
export default config;
