"use client";
import { Btn, Container } from "@/components/ui/ui";
import { person } from "@/data/content";
import { t } from "@/providers/tokens";
import { MenuOutlined } from "@ant-design/icons";
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
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${t.c.line}55;
`;
const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  gap: ${t.s.md};
`;
const Brand = styled(Link)`
  font-family: var(--font-epilogue);
  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: none;
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
  font-weight: ${(p) => (p.$on ? 700 : 500)};
  font-size: 0.95rem;
  background: ${(p) => (p.$on ? t.c.cont : "transparent")};
  color: ${(p) => (p.$on ? t.c.ink : t.c.inkVar)};
  &:hover {
    background: ${t.c.cont};
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
  border-radius: ${t.r.md};
  cursor: pointer;
  font-size: 1.1rem;
  @media (min-width: ${t.bp.desktop}) {
    display: none;
  }
`;
const Cta = styled.div`
  display: none;
  @media (min-width: ${t.bp.tablet}) {
    display: block;
  }
`;

const items = [
  { href: "/", label: "Portfolio" },
  { href: "/community", label: "Skills Synergy community" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <Bar>
      <Container>
        <Inner>
          <Brand href="/">{person.name}</Brand>
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
            <Btn href="#contact" $v="secondary">
              Get in touch
            </Btn>
          </Cta>
          <Burger aria-label="Open menu" onClick={() => setOpen(true)}>
            <MenuOutlined />
          </Burger>
          <Drawer open={open} onClose={() => setOpen(false)} placement="right" size={280} title="Menu">
            <div style={{ display: "grid", gap: 8 }}>
              {items.map((i) => (
                <NavLink key={i.href} href={i.href} $on={path === i.href} onClick={() => setOpen(false)}>
                  {i.label}
                </NavLink>
              ))}
              <NavLink href="#contact" $on={false} onClick={() => setOpen(false)}>
                Get in touch
              </NavLink>
            </div>
          </Drawer>
        </Inner>
      </Container>
    </Bar>
  );
}
