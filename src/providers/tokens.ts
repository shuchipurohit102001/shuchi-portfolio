import type { ThemeConfig } from "antd";

export const t = {
  c: {
    /* Surfaces (light-cyan family, very soft steps) */
    canvas: "#ffffff",
    low: "#f6fcfe",
    cont: "#eef9fc",
    high: "#e4f5fa",
    highest: "#d8f0f7",
    lowest: "#ffffff",

    /* Ink (soft navy, not harsh black) */
    ink: "#14283f",
    inkVar: "#4b6279",

    /* Primary: bright-teal-blue, readable with white text */
    primary: "#0077b6",
    primaryHover: "#0a68a3",
    primaryContainer: "#ade8f4",
    primaryInk: "#005f94",
    onPrimary: "#ffffff",

    /* Secondary / accent */
    secondary: "#023e8a",
    secondaryDim: "#90e0ef",
    onSecondary: "#ffffff",
    clay: "#caf0f8",
    clayInk: "#023e8a",

    /* Tertiary */
    tertiary: "#5a7e96",
    tertiaryContainer: "#dcf0f6",

    /* Lines and outlines */
    line: "#cfe5ee",
    outline: "#7ea6bb",
    outlineVariant: "#e1eff5",

    /* Inverse (footer, dark sections) */
    inverse: "#0b2a4a",
    inverseInk: "#caf0f8",

    /* Feedback */
    error: "#b3261e",
    errorContainer: "#ffe7e3",
    onErrorContainer: "#8c1d18",
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

  shadow: "0 8px 30px rgba(2,62,138,0.07)",
  shadowSoft: "0 1px 8px rgba(2,62,138,0.05)",
  shadowLift: "0 18px 44px rgba(2,62,138,0.10)",

  bp: {
    tablet: "640px",
    desktop: "1024px",
  },
};

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: t.c.primary,
    colorPrimaryText: t.c.primaryInk,
    colorLink: t.c.primaryInk,
    colorLinkHover: t.c.secondary,
    colorTextLightSolid: t.c.onPrimary,
    colorError: t.c.error,
    colorText: t.c.ink,
    colorTextSecondary: t.c.inkVar,
    colorTextDescription: t.c.inkVar,
    colorTextPlaceholder: t.c.tertiary,
    colorBgBase: t.c.canvas,
    colorBgContainer: t.c.lowest,
    colorBorder: t.c.line,
    borderRadius: 8,
    fontFamily: "var(--font-manrope), system-ui, sans-serif",
    controlHeight: 44,
  },
  components: {
    Button: {
      primaryColor: t.c.onPrimary,
      primaryShadow: "none",
      defaultShadow: "none",
    },
    Input: {
      activeShadow: "none",
      activeBorderColor: t.c.primary,
      hoverBorderColor: t.c.outline,
    },
  },
};
