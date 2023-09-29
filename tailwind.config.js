/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    backgroundImage: {
      hero: "url('../assets/bgAdmin.jpg')"
    },
    extend: {
      fontFamily: {
        gotham: ['var(--font-gotham)'],
        minion: ['var(--font-minion)']
      }
    }
  },
  plugins: []
};
