/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFECE5",
          75: "#FCD2C2",
          100: "#FCB59A",
          200: "#FA9874",
          300: "#F77A4A",
          400: "#F56630",
          500: "#EB5017",
          600: "#CC400C",
          700: "#AD3307",
          800: "#8F2802",
          900: "#711E00",
        },
        secondary: {
          50: "#E3EFFC",
          75: "#E3EFFC",
          100: "#B6D8FF",
          200: "#80BBFF",
          300: "#3D89DF",
          400: "#1671D9",
          500: "#0D5EBA",
          600: "#034592",
          700: "#04326B",
          800: "#012657",
          900: "#001633",
        },
        success: {
          50: "#E7F6EC",
          75: "#B5E3C4",
          100: "#91D6A8",
          200: "#5FC381",
          300: "#40B869",
          400: "#0F973D",
          500: "#099137",
          600: "#04802E",
          700: "#036B26",
          800: "#015B20",
          900: "#04172B",
        },
        warning: {
          50: "#FEF6E7",
          75: "#FBE2B7",
          100: "#F7D394",
          200: "#F7C164",
          300: "#F5B546",
          400: "#F3A218",
          500: "#DD900D",
          600: "#AD6F07",
          700: "#865503",
          800: "#664101",
          900: "#523300",
        },
        error: {
          50: "#FBEAE9",
          75: "#F2BCBA",
          100: "#EB9B98",
          200: "#E26E6A",
          300: "#DD524D",
          400: "#D42620",
          500: "#CB1A14",
          600: "#BA110B",
          700: "#9E0A05",
          800: "#800501",
          900: "#591000",
        },
        grey: {
          50: "#F9FAFB",
          75: "#F7F9FC",
          100: "#F0F2F5",
          200: "#E4E7EC",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667185",
          600: "#475367",
          700: "#344054",
          800: "#1D2739",
          900: "#101928",
        },
        brown: {
          50: "#FBF1F1",
          75: "#F0E6E6",
          100: "#E4DBDB",
          200: "#CDC4C4",
          300: "#B7AFAF",
          400: "#A29999",
          500: "#8D8484",
          600: "#787070",
          700: "#645D5D",
          800: "#514A4A",
          900: "#3E3838",
        },
      },
    },
  },
  plugins: [],
};