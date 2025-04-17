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
        yellow: "#FFEB00",
        lightestblue: "#577BC1",
        lighterblue: "#344CB7",
        lightblue: "#000957",
        ghost_white: "#F7F7FF",
        // purple: "#8975DA",
        // darkpurple: "#5839D4",
        darkblue: "#020128",
        blue: "#3000F2",

        orange: "#FF6500",
        lightgrey: "#1E3E62",
        darkgrey: "#0B192C",
        darkergrey: "#000000",
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.orange}" },
        ghostwhite: { value: "colors.ghost_white" },
        // calmpurple: { value: "colors.purple" },
        // notcalmpurple: { value: "colors.darkpurple" },
        lightjeans: { value: "colors.blue" },
        darkjeans: { value: "colors.darkblue" },

        lightestjeans: { value: "colors.lightestblue" },
        lighterjeans: { value: "colors.lighterblue" },
        darkerjeans: { value: "colors.lightblue" },

        // lightestjeans: { value: "colors.lightgrey" },
        // lighterjeans: { value: "colors.orange" },
        // darkerjeans: { value: "colors.darkgrey" },
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
