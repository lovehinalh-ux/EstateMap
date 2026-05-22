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
                primary:    '#9E741C', // Aged Brass
                secondary:  '#F9F7F1', // Warm Off-White BG
                textMain:   '#182948', // Indigo Navy
                textSub:    '#3E557D', // Muted Blue-Grey
                cardBorder: '#D0D7E8', // Cool Border
                navy:       '#172D5B', // Deep Navy
            },
            fontFamily: {
                sans:    ['PingFang TC', 'Noto Sans TC', 'Microsoft JhengHei', 'sans-serif'],
                display: ['DM Serif Display', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [],
}
