import { defineConfig } from "@chakra-ui/react";

export const customConfig = defineConfig({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        // red: "#EE0F0F",
        orange: "#C1D8C3",
        ghost_white: "F7F7FF",
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.orange}" },
        background: { value: "colors.ghost_white" },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
});
