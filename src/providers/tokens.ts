import type { ThemeConfig } from "antd";

export const t = {
  c: {
    /* Surfaces */
    canvas: "#fffdf9",
    low: "#fdfaf4",
    cont: "#fbf7ef",
    high: "#f8f3e9",
    highest: "#f3eee4",
    lowest: "#ffffff",

    /* Ink */
    ink: "#2b2822",
    inkVar: "#5d564e",

    /* Primary */
    primary: "#b7aca2",
    primaryHover: "#a99e94",
    primaryContainer: "#c9c0b7",
    primaryInk: "#6f655d",
    onPrimary: "#2b2822",

    /* Secondary / clay accent */
    secondary: "#8a675b",
    secondaryDim: "#f2cabe",
    onSecondary: "#ffffff",
    clay: "#ffe7df",
    clayInk: "#6b4639",

    /* Tertiary */
    tertiary: "#736a62",
    tertiaryContainer: "#e6ded4",

    /* Lines and outlines */
    line: "#ddd6cb",
    outline: "#948a81",
    outlineVariant: "#ece5dc",

    /* Inverse */
    inverse: "#b7aca2",
    inverseInk: "#2b2822",

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

  shadow: "0 8px 30px rgba(101,93,87,0.07)",
  shadowSoft: "0 1px 8px rgba(101,93,87,0.05)",
  shadowLift: "0 18px 44px rgba(101,93,87,0.10)",

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
      activeBorderColor: t.c.outline,
      hoverBorderColor: t.c.outline,
    },
  },
};
