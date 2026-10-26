"use client";
import { t } from "@/providers/tokens";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.div`
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
export const Section = styled.section<{ $tone?: "low" | "cont" }>`
  padding: ${t.s.xxl} 0;
  background: ${(p) => (p.$tone ? t.c[p.$tone] : "transparent")};
  @media (min-width: ${t.bp.desktop}) {
    padding: ${t.s.xxxl} 0;
  }
`;
export const H1 = styled.h1`
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
`;
export const H2 = styled.h2`
  font-size: clamp(1.65rem, 3.4vw, 2rem);
  font-weight: 600;
`;
export const Lead = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;
  color: ${t.c.inkVar};
  max-width: 62ch;
`;
export const Muted = styled.p`
  color: ${t.c.inkVar};
  font-size: 0.9rem;
  line-height: 1.55;
`;
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${t.s.sm};
  margin-bottom: ${t.s.xl};
  max-width: 62ch;
`;
export const Grid = styled.div<{ $min?: string }>`
  display: grid;
  gap: ${t.s.lg};
  grid-template-columns: repeat(auto-fit, minmax(min(100%, ${(p) => p.$min ?? "250px"}), 1fr));
`;
export const Card = styled.div`
  background: ${t.c.lowest};
  border: 1px solid ${t.c.line}66;
  border-radius: ${t.r.lg};
  padding: ${t.s.lg};
  display: flex;
  flex-direction: column;
  gap: ${t.s.sm};
  h3 {
    font-size: 1.2rem;
    font-family: var(--font-manrope);
    font-weight: 600;
  }
`;
export const Chip = styled.span`
  display: inline-block;
  background: ${t.c.clay};
  color: ${t.c.clayInk};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 0.25rem 0.75rem;
  border-radius: ${t.r.full};
`;
export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t.s.sm};
`;

const btnStyles = css<{ $v?: "primary" | "secondary" | "ghost" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: ${t.r.md};
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.15s ease;
  min-height: 44px;
  cursor: pointer;
  border: 1px solid transparent;
  ${(p) =>
    p.$v === "secondary"
      ? `background:${t.c.clay};color:${t.c.clayInk};&:hover{background:#f5cbbd}`
      : p.$v === "ghost"
        ? `border-color:${t.c.line};color:${t.c.ink};&:hover{background:${t.c.cont}}`
        : `background:${t.c.primary};color:${t.c.onPrimary};&:hover{background:${t.c.primaryHover}}`}
`;

export const Btn = styled(Link)<{ $v?: "primary" | "secondary" | "ghost" }>`
  ${btnStyles}
`;
export const ExtBtn = styled.a<{ $v?: "primary" | "secondary" | "ghost" }>`
  ${btnStyles}
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
  gap: ${t.s.md};
`;

/* Image / video placeholder. Pass src to swap in real media from /public/media. */
const Frame = styled.figure<{ $ratio: string }>`
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: ${t.r.lg};
  aspect-ratio: ${(p) => p.$ratio};
  background: linear-gradient(135deg, ${t.c.high}, ${t.c.clay}99);
  border: 1px solid ${t.c.line}66;
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
}: {
  kind?: "image" | "video";
  ratio?: string;
  label: string;
  src?: string;
  poster?: string;
}) {
  const icon = kind === "video" ? "▶" : "🖼";
  return (
    <Frame $ratio={ratio} role="img" aria-label={label}>
      {src && kind === "image" && <Image src={src} alt={label} loading="lazy" />}
      {src && kind === "video" && <video src={src} poster={poster} controls preload="metadata" />}
      {!src && (
        <figcaption>
          <span aria-hidden style={{ fontSize: "1.75rem" }}>
            {icon}
          </span>
          {label}
          <small>Placeholder: add file to /public/media</small>
        </figcaption>
      )}
    </Frame>
  );
}
