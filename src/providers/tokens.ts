import type { ThemeConfig } from "antd";

export const t = {
  c: {
    /* Surfaces (soft pastel palette) */
    canvas: "#fffdfb",
    low: "#f8f4ff",
    cont: "#f0f7ff",
    high: "#fff3e9",
    highest: "#eaf7f2",
    lowest: "#ffffff",

    /* Keep text dark enough to read against the light surfaces. */
    ink: "#2b3045",
    inkVar: "#5b6378",

    /* Primary: powder blue with dark readable foregrounds. */
    primary: "#e5edff",
    primaryHover: "#d8e4ff",
    primaryContainer: "#eff3ff",
    primaryInk: "#465d91",
    onPrimary: "#35466d",

    /* Secondary / accent */
    secondary: "#715e99",
    secondaryDim: "#eee7ff",
    onSecondary: "#ffffff",
    clay: "#fff0e4",
    clayInk: "#79583f",

    /* Tertiary */
    tertiary: "#507d76",
    tertiaryContainer: "#eaf7f2",

    /* Lines and outlines */
    line: "#e4deed",
    outline: "#958ba9",
    outlineVariant: "#f0ebf5",

    /* Inverse (footer, dark sections) */
    inverse: "#0b2a4a",
    inverseInk: "#eaf7f2",

    /* Feedback */
    error: "#ad4e52",
    errorContainer: "#fff0ef",
    onErrorContainer: "#81383c",

    /* Additional pale accents */
    yellow: "#fff4cf",
    lavender: "#f1ebff",
    mint: "#e8f7ef",
    rose: "#fff0f4",
    sky: "#edf6ff",
    peach: "#fff1e7",

    /* Brands */
    youtube: "#FF0000",
    linkedin: "#0A66C2",
    gmail: "#EA4335",
    phone: "#25D366",
    whatsapp: "#25D366",
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

  shadow: "0 8px 30px rgba(91,74,133,0.07)",
  shadowSoft: "0 1px 8px rgba(91,74,133,0.05)",
  shadowLift: "0 18px 44px rgba(91,74,133,0.10)",

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
