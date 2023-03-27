/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#a991f7",
      //     secondary: "#f6d860",
      //     accent: "#37cdbe",
      //     neutral: "#3d4451",
      //     "base-100": "#ffffff",

      //     "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
      //     "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
      //     "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
      //     "--animation-btn": "0.25s", // duration of animation when you click on button
      //     "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
      //     "--btn-text-case": "uppercase", // set default text transform for buttons
      //     "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
      //     "--border-btn": "1px", // border width of buttons
      //     "--tab-border": "1px", // border width of tabs
      //     "--tab-radius": "0.5rem", // border radius of tabs
      //   },
      // },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
};
