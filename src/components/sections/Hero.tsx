"use client";
import {
  Btn,
  Container,
  Dot,
  ExtBtn,
  Glow,
  H1,
  Lead,
  Pill,
  Portrait,
  Row,
  Section,
  Split,
  Stat,
  StatGrid,
} from "@/components/ui/ui";
import { homeMetrics, person } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  ArrowRightIcon,
  BankIcon,
  SealCheckIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import styled from "styled-components";

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
  return (
    <HeroShell>
      <Glow $tone="clay" style={{ width: "24rem", height: "24rem", top: "-8rem", left: "-7rem" }} />
      <Glow $tone="cont" style={{ width: "30rem", height: "30rem", top: "12rem", right: "-4rem" }} />
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

              <H1>
                Empowering Communication, Fostering <Accent>Leadership</Accent> &amp; Unlocking Opportunities.
              </H1>

              <Lead>
                Business development executive in software solutions, founder of <LeadStrong>Skills Synergy</LeadStrong>{" "}
                &amp; <LeadStrong>Bhoojanpriye</LeadStrong>, classical Kathak artist, recipe curator and advocate for
                grounded Vedic wisdom in modern leadership.
              </Lead>

              <Row>
                <ExtBtn href={`https://wa.me/${person.wa}`} target="_blank" rel="noopener noreferrer">
                  <WhatsappLogoIcon aria-hidden />
                  Book a 1:1 on WhatsApp
                </ExtBtn>
                <Btn href="/community" $v="secondary">
                  Explore Skills Synergy
                  <ArrowRightIcon aria-hidden />
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
                <Portrait src="/profilePhoto.png" label="Shuchi Purohit" initials="SP" ratio="1/1">
                  <FloatingPills>
                    <Pill $tone="canvas">
                      <SealCheckIcon aria-hidden />
                      Founder @ Skills Synergy
                    </Pill>
                    <MiniPills>
                      <Pill $tone="cont">
                        <BankIcon aria-hidden />
                        BDE @ Software Co
                      </Pill>
                      <Pill $tone="clay">Corporate Trainer</Pill>
                    </MiniPills>
                  </FloatingPills>
                </Portrait>
              </FrameCard>
            </PortraitWrap>
          </Split>
        </Container>
      </Inner>
      <Glow $tone="yellow" style={{ width: "24rem", height: "24rem", bottom: "-8rem", right: "-7rem" }} />
      <Glow $tone="cont" style={{ width: "30rem", height: "30rem", bottom: "12rem", left: "-4rem" }} />
    </HeroShell>
  );
};

export default Hero;
