"use client";
import EmailModalLink from "@/components/EmailModalLink";
import { person, ventures } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  GraduationCapIcon,
  HouseIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import styled from "styled-components";
import {
  Container,
  DefaultBrand,
  GmailBrand,
  InstagramBrand,
  LinkedinBrand,
  PhoneBrand,
  WhatsappBrand,
  YoutubeBrand,
} from "./ui";

const FooterShell = styled.footer`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: ${t.c.low};
  border-top: 1px solid ${t.c.line}44;
  padding: ${t.s.xxl} 0 ${t.s.lg};
  color: ${t.c.inkVar};
  font-size: 0.86rem;
  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    width: clamp(18rem, 34vw, 28rem);
    aspect-ratio: 1;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    pointer-events: none;
  }
  &::before {
    top: -14rem;
    left: -10rem;
    background: radial-gradient(circle, ${t.c.clay} 0%, transparent 70%);
  }
  &::after {
    right: -10rem;
    bottom: -16rem;
    background: radial-gradient(circle, ${t.c.yellow} 0%, transparent 70%);
  }
  > div {
    position: relative;
    z-index: 1;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: ${t.s.xl};
  padding-bottom: ${t.s.xl};
  @media (min-width: ${t.bp.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${t.bp.desktop}) {
    grid-template-columns: 5fr 4fr 3fr;
    gap: ${t.s.xxl};
  }
`;

const BrandCol = styled.div`
  display: grid;
  gap: ${t.s.md};
  align-content: start;
  max-width: 28rem;
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${t.s.sm};
  > div strong {
    display: block;
    font-family: var(--font-epilogue);
    font-size: 1.1rem;
    line-height: 1.2;
    color: ${t.c.ink};
  }
  > div span {
    display: block;
    color: ${t.c.secondary};
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }
`;

const BrandMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: ${t.r.md};
  background: ${t.c.primary};
  color: ${t.c.onPrimary};
  font-family: var(--font-epilogue);
  font-size: 0.78rem;
  font-weight: 700;
`;

const SocialPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t.s.sm};
  a,
  button {
    padding: 0.22rem 0.65rem;
    border-radius: ${t.r.md};
    border: 1px solid ${t.c.clayInk};
    background: ${t.c.cont};
    color: ${t.c.ink};
    font-size: 0.7rem;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.15s ease;
    &:hover {
      background: ${t.c.high};
    }
  }
`;

const Col = styled.div`
  display: grid;
  gap: ${t.s.sm};
  align-content: start;
`;

const ColTitle = styled.span`
  font-family: var(--font-epilogue);
  color: ${t.c.ink};
  font-size: 0.95rem;
  font-weight: 600;
`;

const Nav = styled.nav`
  display: grid;
  gap: ${t.s.xs};
  a,
  button {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: ${t.c.inkVar};
    font-size: 0.82rem;
    text-decoration: none;
    &:hover {
      color: ${t.c.ink};
      text-decoration: underline;
    }
  }
`;

const Direct = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${t.c.secondary};
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: ${t.c.ink};
  }
`;

const Meta = styled.div`
  display: grid;
  gap: 0.3rem;
  padding-top: ${t.s.xs};
  a,
  button {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: ${t.c.inkVar};
    font-size: 0.78rem;
    text-decoration: none;
    &:hover {
      color: ${t.c.ink};
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.sm};
  padding-top: ${t.s.lg};
  border-top: 1px solid ${t.c.line}44;
  p {
    color: ${t.c.inkVar};
    font-size: 0.76rem;
  }
  em {
    font-family: var(--font-epilogue);
    font-style: italic;
    color: ${t.c.inkVar};
  }
`;

export default function Footer() {
  return (
    <FooterShell>
      <Container>
        <Grid>
          <BrandCol>
            <BrandRow>
              <BrandMark aria-hidden>SP</BrandMark>
              <div>
                <strong>{person.name}</strong>
                <span>Soft skills &amp; synergy</span>
              </div>
            </BrandRow>
            <p>
              Cultivating leadership, purposeful dialogue and creative ventures. Rooted in intentional modernism,
              mentorship and thoughtful community building.
            </p>
            <SocialPills>
              {ventures.map((v) => (
                <a key={v.handle} href={v.url} target="_blank" rel="noopener noreferrer">
                  <InstagramBrand size={20} aria-hidden /> @{v.handle}
                </a>
              ))}
              {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <YoutubeBrand size={20} aria-hidden />
                YouTube
              </a> */}
            </SocialPills>
          </BrandCol>

          <Col>
            <ColTitle>Exploration</ColTitle>
            <Nav aria-label="Footer">
              <Link href="/">
                <DefaultBrand icon={HouseIcon} size={20} aria-hidden />
                Portfolio &amp; biography
              </Link>
              <Link href="/community">
                <DefaultBrand icon={UsersThreeIcon} size={20} aria-hidden />
                Skills Synergy hub
              </Link>
              <Link href="/#contact">
                <GmailBrand size={20} aria-hidden />
                Direct advisory &amp; inquiries
              </Link>
              <Link href="/community#contact">
                <DefaultBrand icon={GraduationCapIcon} size={20} aria-hidden />
                Join the next cohort
              </Link>
            </Nav>
          </Col>

          <Col>
            <ColTitle>Direct access</ColTitle>
            <p>Connect for keynote invitations, community mentorship and bespoke collaborations.</p>
            <Direct href={`https://wa.me/${person.wa}`} target="_blank" rel="noopener noreferrer">
              <WhatsappBrand size={20} aria-hidden />
              Initiate conversation
            </Direct>
            <Meta>
              <a href={`tel:${person.wa}`}>
                <PhoneBrand size={20} aria-hidden />
                {person.phone}
              </a>
              <EmailModalLink>
                <GmailBrand size={20} aria-hidden />
                {person.email}
              </EmailModalLink>
              <a href={`${person.linkedin}`}>
                <LinkedinBrand size={20} aria-hidden />
                shuchi-purohit1
              </a>
            </Meta>
          </Col>
        </Grid>

        <Bottom>
          <p>
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
          <p>
            <em>Crafted with intention and quiet authority.</em>
          </p>
        </Bottom>
      </Container>
    </FooterShell>
  );
}
