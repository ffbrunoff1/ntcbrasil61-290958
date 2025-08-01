/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#57ACE1', // Azul claro da logo
        secondary: '#FFFFFF', // Branco da logo
        dark: '#0F172A', // Cor escura para contraste
        light: '#F8FAFC', // Cor clara para backgrounds
        accent: '#3B82F6', // Cor de destaque complementar
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(120deg, #57ACE1 0%, #3B82F6 100%)',
      },
    },
  },
  plugins: [],
};
