import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(230 100% 50%)",
          foreground: "hsl(0 0% 100%)",
          hover: "hsl(230 100% 45%)",
        },
        secondary: {
          DEFAULT: "hsl(250 100% 60%)",
          foreground: "hsl(0 0% 100%)",
          hover: "hsl(250 100% 55%)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(280 100% 65%)",
          foreground: "hsl(0 0% 100%)",
          muted: "hsl(280 30% 90%)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        error: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 100%)",
        },
        warning: {
          DEFAULT: "hsl(38 92% 50%)",
          foreground: "hsl(0 0% 100%)",
        },
        success: {
          DEFAULT: "hsl(142 72% 29%)",
          foreground: "hsl(0 0% 100%)",
        },
        info: {
          DEFAULT: "hsl(198 93% 60%)",
          foreground: "hsl(0 0% 100%)",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-in": "slide-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
      minHeight: {
        dynamic_hero: "calc(100vh - 69px - 76.8px)",
        static_sidemenu: "calc(100vh - 69px - 76.8px)",
      },
      maxHeight: {
        static_sidemenu: "calc(100vh - 69px - 76.8px)",
        dynamic_search: "calc(50svh - 124px)",
        dynamic_hscreen: "calc(100dvh - 32px - 2rem)",
      },
      height: {
        dynamic_hscreen: "calc(100dvh - 36px - 2rem)",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(79, 70, 229, 0.2)',
        'hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      display: ["Cal Sans", "Inter var", ...defaultTheme.fontFamily.sans],
      mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
