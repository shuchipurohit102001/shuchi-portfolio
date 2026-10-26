"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider, createGlobalStyle } from "styled-components";
import { antdTheme, t } from "./tokens";

const Global = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    margin: 0;
    background: ${t.c.canvas};
    color: ${t.c.ink};
    font-family: var(--font-manrope), system-ui, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  h1,h2,h3,h4{
    font-family: var(--font-epilogue),serif;
    margin: 0;
    letter-spacing: -0.015em;
    line-height: 1.2;
    color: ${t.c.ink}
  }

  p{
    margin: 0;
  }

  a{
    color:inherit
  }

  :focus-visible{
    outline:2px solid ${t.c.primary};
    outline-offset:3px
  }

  @media (prefers-reduced-motion:reduce){
    *{
      transition:none!important;
      animation:none!important;
      scroll-behavior:auto!important
    }
  }
`;

export default function Providers({ children }: { children: React.ReactNode }) {
  const [sheet] = useState(() => new ServerStyleSheet());
  useServerInsertedHTML(() => {
    const s = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{s}</>;
  });
  const inner = (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme}>
        <ThemeProvider theme={t}>
          <Global />
          {children}
        </ThemeProvider>
      </ConfigProvider>
    </AntdRegistry>
  );
  return typeof window !== "undefined" ? inner : <StyleSheetManager sheet={sheet.instance}>{inner}</StyleSheetManager>;
}
