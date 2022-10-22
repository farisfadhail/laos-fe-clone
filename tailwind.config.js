module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        "light": {
          "primary": "#2DCC70",
          "primary-content": "#FFFFFF",
          "secondary": "#FFFFFF",
          "secondary-content": "#2DCC70",
        },
        laos: {
          "primary": "#2DCC70",
          "primary-content": "#FFFFFF",
          "secondary": "#FFFFFF",
          "secondary-content": "#2DCC70",
        },
      },
      "dark"
    ]
  },
  plugins: [require("daisyui")],
}
