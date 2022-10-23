/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
      {
        mytheme: {
        "primary": "#a855f7",
                
        "secondary": "#c4b5fd",
                
        "accent": "#f3f4f6",
                
        "neutral": "#292524",
                
        "base-100": "#c084fc",
                
        "info": "#1d4ed8",
                
        "success": "#a3e635",
                
        "warning": "#fcd34d",
                
        "error": "#fda4af",
                },
              },
            ],
          },
  plugins: [require("daisyui")],
}

