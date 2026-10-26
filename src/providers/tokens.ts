import type { ThemeConfig } from "antd";
export const t = {
  c: {
    canvas: "#fef9f1",
    low: "#f8f3e9",
    cont: "#f3ede1",
    high: "#ede8d9",
    highest: "#e8e2d1",
    lowest: "#ffffff",
    ink: "#1d1c11",
    inkVar: "#4d4540",
    primary: "#655d57",
    primaryHover: "#59514c",
    onPrimary: "#fff6f1",
    secondary: "#7b5549",
    clay: "#ffdbd0",
    clayInk: "#59372c",
    line: "#b7b2a2",
    error: "#ba1a1a",
  },

  r: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },

  s: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
    xxxl: "4.5rem",
  },

  shadow: "0 8px 30px rgba(101,93,87,0.08)",

  bp: {
    tablet: "640px",
    desktop: "1024px",
  },
};
export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: t.c.primary,
    colorError: t.c.error,
    colorText: t.c.ink,
    colorTextSecondary: t.c.inkVar,
    colorBgBase: t.c.canvas,
    colorBgContainer: t.c.lowest,
    colorBorder: t.c.line,
    borderRadius: 8,
    fontFamily: "var(--font-manrope), system-ui, sans-serif",
    controlHeight: 44,
  },
  components: {
    Button: {
      primaryShadow: "none",
      defaultShadow: "none",
    },
    Input: {
      activeShadow: "none",
    },
  },
};
