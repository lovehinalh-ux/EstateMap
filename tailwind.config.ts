/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./App.tsx",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#C68037', // Button/Accent Orange
                secondary: '#FDF8F0', // Background Beige
                textMain: '#4A3B32', // Dark Brown Text
                textSub: '#8C8C8C', // Light Gray Text
                cardBorder: '#E5E5E5',
            },
            fontFamily: {
                sans: ['PingFang TC', 'Microsoft JhengHei', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
