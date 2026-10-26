"use client";
import { t } from "@/providers/tokens";
import { CheckCircleFilled } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";

/* -------------------------------------------------------------------------------------------------
 * Layout
 * ----------------------------------------------------------------------------------------------- */

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${t.s.md};
  @media (min-width: ${t.bp.tablet}) {
    padding: 0 ${t.s.lg};
  }
  @media (min-width: ${t.bp.desktop}) {
    padding: 0 ${t.s.xl};
  }
`;

const sectionTone = {
  low: t.c.low,
  cont: t.c.cont,
  high: t.c.high,
} as const;

export const Section = styled.section<{ $tone?: keyof typeof sectionTone }>`
  padding: ${t.s.xxl} 0;
  background: ${(p) => (p.$tone ? sectionTone[p.$tone] : "transparent")};
  @media (min-width: ${t.bp.desktop}) {
    padding: ${t.s.xxxl} 0;
  }
`;

export const Split = styled.div`
  display: grid;
  gap: ${t.s.xl};
  align-items: center;
  @media (min-width: ${t.bp.desktop}) {
    grid-template-columns: 7fr 5fr;
    gap: ${t.s.xxl};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${t.s.md};
`;

export const Grid = styled.div<{ $min?: string }>`
  display: grid;
  gap: ${t.s.lg};
  grid-template-columns: repeat(auto-fit, minmax(min(100%, ${(p) => p.$min ?? "250px"}), 1fr));
`;

export const Glow = styled.div<{ $tone?: "clay" | "cont" | "high" | "yellow" }>`
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
  opacity: 0.6;
  background: ${(p) => (p.$tone === "clay" ? t.c.clay : p.$tone === "high" ? t.c.high : p.$tone === "yellow" ? t.c.yellow : t.c.cont)};
`;

/* -------------------------------------------------------------------------------------------------
 * Typography
 * ----------------------------------------------------------------------------------------------- */

export const H1 = styled.h1`
  font-size: clamp(2.4rem, 5.2vw, 3.35rem);
  font-weight: 700;
  line-height: 1.06;
  letter-spacing: -0.025em;
  text-wrap: balance;
  overflow-wrap: break-word;
`;

export const H2 = styled.h2`
  font-size: clamp(1.7rem, 3.4vw, 2.25rem);
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.02em;
  text-wrap: balance;
`;

export const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.72rem;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${t.c.secondary};
`;

export const Lead = styled.p`
  font-size: 1.075rem;
  line-height: 1.75;
  color: ${t.c.inkVar};
  max-width: 62ch;
  text-wrap: pretty;
  @media (min-width: ${t.bp.desktop}) {
    font-size: 1.125rem;
  }
`;

export const Muted = styled.p`
  color: ${t.c.inkVar};
  font-size: 0.9rem;
  line-height: 1.6;
  text-wrap: pretty;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${t.s.sm};
  margin-bottom: ${t.s.xl};
  max-width: 62ch;
`;

export const CardFoot = styled.span`
  margin-top: auto;
  padding-top: ${t.s.sm};
  color: ${t.c.secondary};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

/* -------------------------------------------------------------------------------------------------
 * Section heading with optional action
 * ----------------------------------------------------------------------------------------------- */

const SectionHeadRow = styled.div<{ $center: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${t.s.md};
  margin-bottom: ${t.s.xl};
  > div:first-child {
    display: grid;
    gap: ${t.s.xs};
    max-width: 62ch;
  }
  @media (min-width: ${t.bp.tablet}) {
    gap: ${t.s.xl};
  }
  ${(p) =>
    p.$center &&
    css`
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      > div:first-child {
        align-items: center;
        margin: 0 auto;
      }
      > div:first-child p {
        margin-left: auto;
        margin-right: auto;
      }
    `}
`;

export function SectionHead({
  eyebrow,
  title,
  text,
  action,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  action?: ReactNode;
  center?: boolean;
}) {
  return (
    <SectionHeadRow $center={center}>
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <H2>{title}</H2>
        {text && <Muted>{text}</Muted>}
      </div>
      {action && <div>{action}</div>}
    </SectionHeadRow>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Surfaces
 * ----------------------------------------------------------------------------------------------- */

export const Panel = styled.div<{
  $tone?: "lowest" | "low" | "cont" | "high" | "clay";
  $pad?: "sm" | "md" | "lg" | "xl";
  $round?: "md" | "lg" | "xl";
  $shadow?: "none" | "soft" | "lift";
}>`
  position: relative;
  background: ${(p) => t.c[p.$tone ?? "lowest"]};
  border-radius: ${(p) => t.r[p.$round ?? "lg"]};
  padding: ${(p) => t.s[p.$pad ?? "lg"]};
  box-shadow: ${(p) => (p.$shadow === "lift" ? t.shadowLift : p.$shadow === "soft" ? t.shadowSoft : "none")};
`;

export const Lift = styled.div`
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${t.shadowLift};
  }
`;

export const Card = styled.div`
  background: ${t.c.lowest};
  border-radius: ${t.r.lg};
  padding: ${t.s.lg};
  display: flex;
  flex-direction: column;
  gap: ${t.s.sm};
  box-shadow: ${t.shadowSoft};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${t.shadowLift};
  }
  h3 {
    font-size: 1.15rem;
    font-family: var(--font-manrope);
    font-weight: 600;
    line-height: 1.35;
  }
`;

/* -------------------------------------------------------------------------------------------------
 * Pills, dots and icon badges
 * ----------------------------------------------------------------------------------------------- */

export const Pill = styled.span<{
  $tone?: "clay" | "cont" | "dark" | "outline" | "canvas" | "error";
  $wrap?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  width: fit-content;
  max-width: 100%;
  padding: 0.32rem 0.75rem;
  border-radius: ${t.r.full};
  font-size: 0.72rem;
  line-height: 1.45;
  font-weight: 700;
  letter-spacing: 0.035em;
  white-space: ${(p) => (p.$wrap ? "normal" : "nowrap")};
  ${(p) => {
    switch (p.$tone) {
      case "dark":
        return `background:${t.c.primary};color:${t.c.onPrimary};`;
      case "cont":
        return `background:${t.c.cont};color:${t.c.ink};`;
      case "outline":
        return `background:transparent;color:${t.c.inkVar};border:1px solid ${t.c.line};`;
      case "canvas":
        return `background:${t.c.canvas};color:${t.c.ink};`;
      case "error":
        return `background:${t.c.errorContainer};color:${t.c.onErrorContainer};`;
      default:
        return `background:${t.c.clay};color:${t.c.clayInk};`;
    }
  }}
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.25); }
`;

export const Dot = styled.span<{ $tone?: "secondary" | "primary" | "clay"; $pulse?: boolean }>`
  display: inline-block;
  flex: none;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${(p) => (p.$tone === "primary" ? t.c.primaryInk : p.$tone === "clay" ? t.c.clay : t.c.secondary)};
  ${(p) =>
    p.$pulse &&
    css`
      animation: ${pulse} 2.6s ease-in-out infinite;
    `}
`;

export const IconBadge = styled.span<{
  $tone?: "clay" | "cont" | "dark" | "canvas" | "error";
  $round?: boolean;
  $size?: "sm" | "md" | "lg";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: ${(p) => (p.$size === "sm" ? "2rem" : p.$size === "lg" ? "3rem" : "2.5rem")};
  height: ${(p) => (p.$size === "sm" ? "2rem" : p.$size === "lg" ? "3rem" : "2.5rem")};
  font-size: ${(p) => (p.$size === "sm" ? "1rem" : p.$size === "lg" ? "1.45rem" : "1.15rem")};
  border-radius: ${(p) => (p.$round ? "50%" : t.r.md)};
  ${(p) => {
    switch (p.$tone) {
      case "dark":
        return `background:${t.c.primary};color:${t.c.onPrimary};`;
      case "canvas":
        return `background:${t.c.canvas};color:${t.c.secondary};`;
      case "error":
        return `background:${t.c.errorContainer};color:${t.c.onErrorContainer};`;
      case "clay":
        return `background:${t.c.clay};color:${t.c.clayInk};`;
      default:
        return `background:${t.c.cont};color:${t.c.primaryInk};`;
    }
  }}
`;

export const Avatar = styled.span<{ $size?: number; $src?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: ${(p) => p.$size ?? 40}px;
  height: ${(p) => p.$size ?? 40}px;
  border-radius: 50%;
  background: ${(p) =>
    p.$src
      ? `url(${p.$src}) center / cover no-repeat, ${t.c.clay}`
      : `linear-gradient(145deg, ${t.c.yellow}, ${t.c.clay}, ${t.c.high})`};
  border: 2px solid ${t.c.lowest};
  color: ${(p) => (p.$src ? "transparent" : t.c.clayInk)};
  font-family: var(--font-epilogue);
  font-weight: 700;
  font-size: ${(p) => Math.max(0.68, (p.$size ?? 40) / 52)}rem;
  letter-spacing: 0.02em;
  box-shadow: ${t.shadowSoft};
`;

/* -------------------------------------------------------------------------------------------------
 * Stats
 * ----------------------------------------------------------------------------------------------- */

const statAccent = {
  secondary: t.c.secondary,
  primary: t.c.primaryInk,
  tertiary: t.c.tertiary,
} as const;

export const StatGrid = styled.div`
  display: grid;
  gap: ${t.s.sm};
  grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr));
`;

export const Stat = styled.div<{ $accent?: keyof typeof statAccent }>`
  background: ${t.c.low};
  border-radius: ${t.r.md};
  padding: ${t.s.md};
  min-width: 0;
  strong {
    display: block;
    font-family: var(--font-epilogue);
    font-size: 1.4rem;
    line-height: 1.15;
    font-weight: 700;
    color: ${(p) => statAccent[p.$accent ?? "secondary"]};
  }
  span {
    display: block;
    margin-top: 0.2rem;
    color: ${t.c.inkVar};
    font-size: 0.76rem;
    line-height: 1.4;
  }
`;

/* -------------------------------------------------------------------------------------------------
 * Checklist
 * ----------------------------------------------------------------------------------------------- */

const CheckListWrap = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.45rem;
  li {
    display: flex;
    align-items: flex-start;
    gap: 0.45rem;
    font-size: 0.84rem;
    line-height: 1.5;
    color: ${t.c.ink};
  }
  svg {
    flex: none;
    margin-top: 0.16rem;
    font-size: 0.82rem;
    color: ${t.c.secondary};
  }
`;

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <CheckListWrap>
      {items.map((item) => (
        <li key={item}>
          <CheckCircleFilled aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </CheckListWrap>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Metric strip
 * ----------------------------------------------------------------------------------------------- */

export const MetricStrip = styled.div`
  background: ${t.c.cont};
  padding: ${t.s.md} 0;
`;

export const MetricStripInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.md};
`;

export const Metric = styled.div`
  display: flex;
  align-items: center;
  gap: ${t.s.sm};
  font-size: 0.82rem;
  font-weight: 600;
  color: ${t.c.ink};
`;

/* -------------------------------------------------------------------------------------------------
 * Buttons
 * ----------------------------------------------------------------------------------------------- */

const btnStyles = css<{ $v?: "primary" | "secondary" | "ghost" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.72rem 1.35rem;
  border-radius: ${t.r.md};
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.3;
  text-decoration: none;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    transform 0.15s ease,
    box-shadow 0.15s ease;
  min-height: 44px;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  &:hover {
    transform: translateY(-1px);
  }
  ${(p) =>
    p.$v === "secondary"
      ? `background:${t.c.clay};color:${t.c.clayInk};&:hover{background:${t.c.secondaryDim};}`
      : p.$v === "ghost"
        ? `border-color:${t.c.line};color:${t.c.ink};background:transparent;&:hover{background:${t.c.cont};}`
        : `background:${t.c.primary};color:${t.c.onPrimary};&:hover{background:${t.c.primaryHover};}`}
`;

export const Btn = styled(Link)<{ $v?: "primary" | "secondary" | "ghost" }>`
  ${btnStyles}
`;

export const ExtBtn = styled.a<{ $v?: "primary" | "secondary" | "ghost" }>`
  ${btnStyles}
`;

/* -------------------------------------------------------------------------------------------------
 * Chips (kept for small inline labels)
 * ----------------------------------------------------------------------------------------------- */

export const Chip = styled.span`
  display: inline-block;
  background: ${t.c.clay};
  color: ${t.c.clayInk};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 0.28rem 0.75rem;
  border-radius: ${t.r.full};
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t.s.sm};
`;

/* -------------------------------------------------------------------------------------------------
 * Portrait placeholder / editorial frame
 * ----------------------------------------------------------------------------------------------- */

const PortraitBox = styled.figure<{ $ratio: string }>`
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: ${t.r.lg};
  aspect-ratio: ${(p) => p.$ratio};
  background:
    radial-gradient(circle at 28% 22%, ${t.c.clay} 0%, transparent 52%),
    linear-gradient(150deg, ${t.c.high} 0%, ${t.c.low} 52%, ${t.c.cont}, ${t.c.yellow} 100%);
  display: grid;
  place-items: center;
  border: 1px solid ${t.c.line}55;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }
  &::before {
    width: 68%;
    aspect-ratio: 1;
    top: -18%;
    right: -12%;
    border: 1px solid ${t.c.line}66;
  }
  &::after {
    width: 60%;
    aspect-ratio: 1;
    bottom: -16%;
    left: -14%;
    background: radial-gradient(circle, ${t.c.clay}aa 0%, transparent 68%);
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Monogram = styled.span`
  position: relative;
  z-index: 1;
  font-family: var(--font-epilogue);
  font-size: clamp(3.25rem, 9vw, 5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${t.c.secondary};
  opacity: 0.72;
`;

const PortraitCaption = styled.span`
  position: absolute;
  left: 1.1rem;
  top: 1.1rem;
  z-index: 1;
  max-width: 70%;
  color: ${t.c.inkVar};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: left;
`;

export function Portrait({
  label,
  initials = "SP",
  src,
  ratio = "1/1",
  children,
}: {
  label: string;
  initials?: string;
  src?: string;
  ratio?: string;
  children?: ReactNode;
}) {
  return (
    <PortraitBox $ratio={ratio} role={src ? undefined : "img"} aria-label={src ? undefined : label}>
      {src ? (
        <Image src={src} alt={label} fill sizes="(min-width: 1024px) 430px, 100vw" style={{ objectFit: "cover" }} />
      ) : (
        <>
          <Monogram aria-hidden>{initials}</Monogram>
          <PortraitCaption>{label}</PortraitCaption>
        </>
      )}
      {children}
    </PortraitBox>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Media placeholder
 * ----------------------------------------------------------------------------------------------- */

const Frame = styled.figure<{ $ratio: string }>`
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: ${t.r.lg};
  aspect-ratio: ${(p) => p.$ratio};
  background: linear-gradient(145deg, ${t.c.yellow}, ${t.c.clay}, ${t.c.high});
  border: 1px solid ${t.c.line}55;
  display: grid;
  place-items: center;
  color: ${t.c.inkVar};
  img,
  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  figcaption {
    position: relative;
    text-align: center;
    font-size: 0.8rem;
    padding: ${t.s.md};
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
  }
  svg {
    font-size: 1.75rem;
  }
`;

export function Media({
  kind = "image",
  ratio = "4/5",
  label,
  src,
  poster,
  hint = true,
}: {
  kind?: "image" | "video";
  ratio?: string;
  label: string;
  src?: string;
  poster?: string;
  hint?: boolean;
}) {
  const icon = kind === "video" ? "▶" : "🖼";
  return (
    <Frame $ratio={ratio} role="img" aria-label={label}>
      {src && kind === "image" && (
        <Image src={src} alt={label} loading="eager" fill sizes="full" style={{ objectFit: "cover" }} />
      )}
      {src && kind === "video" && <video src={src} poster={poster} controls preload="metadata" />}
      {!src && (
        <figcaption>
          <span aria-hidden style={{ fontSize: "1.75rem" }}>
            {icon}
          </span>
          {label}
          {hint && <small>Placeholder: add file to /public/media</small>}
        </figcaption>
      )}
    </Frame>
  );
}
