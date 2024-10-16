import type { Config } from "tailwindcss"; // Correctly import the Config type

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // Scan files in the pages directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  // Scan files in the components directory
    "./app/**/*.{js,ts,jsx,tsx,mdx}",     // Scan files in the app directory
  ],
  prefix: "",  // No prefix added to classes
  theme: {
    extend: {
      // Custom colors using CSS variables
      colors: {
        background: "var(--background)",  // Ensure these variables are defined in your CSS
        foreground: "var(--foreground)",
      },

      // Custom animations
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",  // Name of the animation
      },
      
      // Custom keyframes for the spotlight animation
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",   // Start invisible
            transform: "translate(-72%, -62%) scale(0.5)",  // Starting position and scale
          },
          "100%": {
            opacity: "1",   // Fully visible
            transform: "translate(-50%, -40%) scale(1)",   // Final position and scale
          },
        },
      },
    },
  },
  plugins: [],  // Add any Tailwind plugins here if needed
};

export default config;
