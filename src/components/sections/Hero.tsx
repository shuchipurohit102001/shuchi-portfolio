"use client";
import {
  Btn,
  Container,
  DefaultBrand,
  Dot,
  ExtBtn,
  HHead,
  Lead,
  Pill,
  Portrait,
  Row,
  Section,
  Split,
  Stat,
  StatGrid,
  WhatsappBrand,
} from "@/components/ui/ui";
import { homeMetrics, person } from "@/data/content";
import { t } from "@/providers/tokens";
import { ArrowRightIcon, BankIcon, SealCheckIcon, UsersThreeIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const roles = ["Corporate Professional", "Communication Coach", "Leadership Mentor"];

const roleEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroShell = styled(Section)`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding-top: ${t.s.lg};
  padding-bottom: ${t.s.xxl};
  @media (min-width: ${t.bp.desktop}) {
    padding-top: ${t.s.xl};
    padding-bottom: ${t.s.xxxl};
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
`;

const Copy = styled.div`
  display: grid;
  gap: ${t.s.lg};
`;

const Accent = styled.em`
  color: ${t.c.secondary};
  font-style: italic;
  font-weight: 600;
`;

const RoleLine = styled.p`
  min-height: 2.6em;
  font-family: var(--font-epilogue);
  font-size: clamp(1.2rem, 2.5vw, 1.65rem);
  font-weight: 600;
  line-height: 1.3;
`;

const AnimatedRole = styled.span`
  display: inline-block;
  background: linear-gradient(to left, #e0a100, #2fa4b8, #2b6cb0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: ${roleEnter} 0.2s ease both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const LeadStrong = styled.strong`
  color: ${t.c.ink};
  font-weight: 600;
`;

const PortraitWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  @media (min-width: ${t.bp.desktop}) {
    margin: 0 0 0 auto;
  }
`;

const Halo = styled.div`
  position: absolute;
  inset: -2% -3% 4% -2%;
  border-radius: ${t.r.xl};
  background: linear-gradient(135deg, ${t.c.yellow}, ${t.c.clay}, ${t.c.high});
  transform: rotate(-2deg);
  box-shadow: ${t.shadow};
`;

const FrameCard = styled.div`
  position: relative;
  z-index: 1;
  background: ${t.c.lowest};
  padding: 0.6rem;
  border-radius: ${t.r.xl};
  box-shadow: ${t.shadowLift};
`;

const FloatingPills = styled.div`
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 0.9rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: ${t.s.sm};
  align-items: flex-start;
`;

const MiniPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t.s.sm};
`;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2300);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <HeroShell>
      <Inner>
        <Container>
          <Split>
            <Copy>
              <Pill $tone="cont" $wrap>
                <Dot $pulse />
                <span>Portfolio &amp; synergy hub</span>
                <span aria-hidden>•</span>
                <span style={{ color: t.c.secondary }}>{person.location}</span>
              </Pill>

              <HHead>
                Empowering Communication, Fostering <Accent>Leadership</Accent> &amp; Unlocking Opportunities.
              </HHead>

              <RoleLine aria-label={roles.join(", ")}>
                <AnimatedRole key={roles[roleIndex]} aria-hidden="true">
                  {roles[roleIndex]}
                </AnimatedRole>
              </RoleLine>

              <Lead>
                Business development executive in software solutions, founder of <LeadStrong>Skills Synergy</LeadStrong>
                , Campus to Corporate Groomer, <Accent>IELTS - TOEFL</Accent> Trainer with strong Leadership
                foundations.
              </Lead>

              <Row>
                <ExtBtn href={`https://wa.me/${person.wa}`} target="_blank" rel="noopener noreferrer">
                  <WhatsappBrand size={20} aria-hidden />
                  Book a 1:1 on WhatsApp
                </ExtBtn>
                <Btn href="/community" $v="secondary">
                  Explore Skills Synergy
                  <DefaultBrand icon={ArrowRightIcon} size={20} aria-hidden />
                </Btn>
              </Row>

              <StatGrid>
                {homeMetrics.map((m) => (
                  <Stat key={m.label} $accent={m.accent}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </Stat>
                ))}
              </StatGrid>
            </Copy>

            <PortraitWrap>
              <Halo aria-hidden />
              <FrameCard>
                <Portrait src="/profilePhoto.png" label="Shuchi Purohit" ratio="1/1">
                  <FloatingPills>
                    <Pill $tone="canvas">
                      <DefaultBrand icon={SealCheckIcon} size={20} aria-hidden />
                      Founder @ Skills Synergy
                    </Pill>
                    <MiniPills>
                      <Pill $tone="cont">
                        <DefaultBrand icon={BankIcon} size={20} aria-hidden />
                        BDE @ Software Co
                      </Pill>
                      <Pill $tone="clay">
                        <DefaultBrand icon={UsersThreeIcon} size={20} aria-hidden />
                        Corporate Trainer
                      </Pill>
                    </MiniPills>
                  </FloatingPills>
                </Portrait>
              </FrameCard>
            </PortraitWrap>
          </Split>
        </Container>
      </Inner>
    </HeroShell>
  );
};

export default Hero;
