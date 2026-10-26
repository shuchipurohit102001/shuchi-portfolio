"use client";
import { Container, ExtBtn } from "@/components/ui/ui";
import { person } from "@/data/content";
import { t } from "@/providers/tokens";
import { MenuOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${t.c.canvas}ee;
  backdrop-filter: blur(16px);
  border-bottom: 1px solid ${t.c.line}44;
  box-shadow: ${t.shadowSoft};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  gap: ${t.s.md};
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${t.s.sm};
  text-decoration: none;
  min-width: 0;
`;

const BrandMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${t.r.md};
  background: ${t.c.primary};
  color: ${t.c.onPrimary};
  font-family: var(--font-epilogue);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

const BrandText = styled.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  strong {
    font-family: var(--font-epilogue);
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.2;
    color: ${t.c.ink};
    white-space: nowrap;
  }
  small {
    color: ${t.c.secondary};
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  @media (max-width: 479px) {
    small {
      display: none;
    }
  }
`;

const Links = styled.nav`
  display: none;
  gap: ${t.s.xs};
  @media (min-width: ${t.bp.desktop}) {
    display: flex;
  }
`;

const NavLink = styled(Link)<{ $on: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: ${t.r.md};
  text-decoration: none;
  font-weight: ${(p) => (p.$on ? 600 : 500)};
  font-size: 0.88rem;
  background: ${(p) => (p.$on ? t.c.cont : "transparent")};
  color: ${(p) => (p.$on ? t.c.ink : t.c.inkVar)};
  transition: background 0.15s ease;
  &:hover {
    background: ${t.c.cont};
    color: ${t.c.ink};
  }
`;

const Cta = styled.div`
  display: none;
  @media (min-width: ${t.bp.tablet}) {
    display: block;
  }
`;

const Burger = styled.button`
  display: inline-flex;
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${t.c.line};
  background: transparent;
  color: ${t.c.ink};
  border-radius: ${t.r.md};
  cursor: pointer;
  font-size: 1.1rem;
  @media (min-width: ${t.bp.desktop}) {
    display: none;
  }
`;

const DrawerLinks = styled.div`
  display: grid;
  gap: ${t.s.sm};
`;

const items = [
  { href: "/", label: "Portfolio & about" },
  { href: "/community", label: "Skills Synergy community" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <Bar>
      <Container>
        <Inner>
          <Brand href="/" aria-label={`${person.name} — home`}>
            <BrandMark aria-hidden>SP</BrandMark>
            <BrandText>
              <strong>{person.name}</strong>
              <small>Soft skills &amp; synergy</small>
            </BrandText>
          </Brand>

          <Links aria-label="Main">
            {items.map((i) => (
              <NavLink
                key={i.href}
                href={i.href}
                $on={path === i.href}
                aria-current={path === i.href ? "page" : undefined}
              >
                {i.label}
              </NavLink>
            ))}
          </Links>

          <Cta>
            <ExtBtn href={`https://wa.me/${person.wa}`} target="_blank" rel="noopener noreferrer" $v="secondary">
              <WhatsAppOutlined aria-hidden />
              WhatsApp Inquiry
            </ExtBtn>
          </Cta>

          <Burger aria-label="Open menu" onClick={() => setOpen(true)}>
            <MenuOutlined />
          </Burger>

          <Drawer open={open} onClose={() => setOpen(false)} placement="right" size={300} title="Menu">
            <DrawerLinks>
              {items.map((i) => (
                <NavLink key={i.href} href={i.href} $on={path === i.href} onClick={() => setOpen(false)}>
                  {i.label}
                </NavLink>
              ))}
              <NavLink href="/#contact" $on={false} onClick={() => setOpen(false)}>
                Get in touch
              </NavLink>
              <ExtBtn
                href={`https://wa.me/${person.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                $v="secondary"
                style={{ marginTop: t.s.sm }}
              >
                <WhatsAppOutlined aria-hidden />
                WhatsApp Inquiry
              </ExtBtn>
            </DrawerLinks>
          </Drawer>
        </Inner>
      </Container>
    </Bar>
  );
}
