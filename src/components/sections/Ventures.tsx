"use client";
import {
  Btn,
  Container,
  ExtBtn,
  Eyebrow,
  IconBadge,
  Muted,
  Panel,
  Pill,
  Row,
  Section,
  SectionHead,
} from "@/components/ui/ui";
import { journeys, ventures } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  ArrowSquareOutIcon,
  CheckCircleIcon,
  CompassIcon,
  MusicNoteIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import styled from "styled-components";

const Bento = styled.div`
  display: grid;
  gap: ${t.s.lg};
  @media (min-width: ${t.bp.desktop}) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

const SynergyPanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${t.s.lg};
  overflow: hidden;
  @media (min-width: ${t.bp.desktop}) {
    grid-column: span 7;
  }
`;

const BhoojanPanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${t.s.lg};
  @media (min-width: ${t.bp.desktop}) {
    grid-column: span 5;
  }
`;

const PanelHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.sm};
`;

const ExtLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: ${t.c.secondary};
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h3`
  font-family: var(--font-epilogue);
  font-size: clamp(1.5rem, 2.6vw, 1.9rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-top: ${t.s.sm};
`;

const MiniGrid = styled.div`
  display: grid;
  gap: ${t.s.sm};
  margin-top: ${t.s.md};
  @media (min-width: ${t.bp.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Mini = styled.div`
  background: ${t.c.lowest}cc;
  border-radius: ${t.r.md};
  padding: ${t.s.md};
  strong {
    display: block;
    font-size: 0.9rem;
    line-height: 1.35;
    color: ${t.c.ink};
  }
  span {
    display: block;
    margin-top: 0.2rem;
    font-size: 0.78rem;
    line-height: 1.5;
    color: ${t.c.inkVar};
  }
`;

const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.md};
  padding-top: ${t.s.md};
`;

const Note = styled.span`
  color: ${t.c.inkVar};
  font-size: 0.8rem;
  font-style: italic;
`;

const Bubble = styled.span`
  position: absolute;
  right: -3rem;
  bottom: -3rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  background: ${t.c.clay}88;
  filter: blur(30px);
  pointer-events: none;
`;

const VideoRow = styled(Panel)`
  display: flex;
  align-items: center;
  gap: ${t.s.md};
  margin-top: ${t.s.md};
  > div strong {
    display: block;
    font-size: 0.9rem;
    color: ${t.c.ink};
  }
  > div span {
    display: block;
    font-size: 0.78rem;
    color: ${t.c.inkVar};
  }
`;

const JourneyCard = styled(Panel)`
  display: flex;
  flex-direction: column;
  gap: ${t.s.sm};
  @media (min-width: ${t.bp.desktop}) {
    grid-column: span 6;
  }
  h3 {
    font-family: var(--font-epilogue);
    font-size: 1.3rem;
  }
`;

const NoteLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: auto;
  padding-top: ${t.s.sm};
  color: ${t.c.inkVar};
  font-size: 0.78rem;
  svg {
    color: ${t.c.secondary};
    flex: none;
  }
`;

const journeyIcons: Record<string, ReactNode> = {
  campus: <MusicNoteIcon aria-hidden />,
  corporate: <CompassIcon aria-hidden />,
};

const Ventures = () => {
  const synergy = ventures[0];
  const bhoojan = ventures[1];

  return (
    <Section>
      <Container>
        <SectionHead
          center
          eyebrow="Multifaceted journey"
          title="Where craft, community & creativity converge"
          text="Every initiative stems from a dedication to mindful growth, cultural discipline and joyful shared learning."
        />

        <Bento>
          <SynergyPanel $tone="cont" $pad="xl">
            <Bubble aria-hidden />
            <div>
              <PanelHead>
                <Pill $tone="dark">Flagship collective</Pill>
                <ExtLink href={synergy.url} target="_blank" rel="noopener noreferrer">
                  @{synergy.handle}
                  <ArrowSquareOutIcon aria-hidden />
                </ExtLink>
              </PanelHead>
              <Title>{synergy.name}</Title>
              <Muted>
                A purposeful community and learning platform designed to bridge academic capability with executive
                confidence — conversational polish, campus-to-corporate readiness, confident articulation and structured
                grooming cohorts.
              </Muted>
              <MiniGrid>
                <Mini>
                  <strong>Cohort bootcamps</strong>
                  <span>Live scenario practice &amp; peer feedback</span>
                </Mini>
                <Mini>
                  <strong>Executive presence</strong>
                  <span>Vocal resonance, styling &amp; body language</span>
                </Mini>
              </MiniGrid>
            </div>
            <FooterRow>
              <Btn href="/community#contact" $v="secondary">
                Join the upcoming cohort
              </Btn>
              <Note>Next batch enrolling</Note>
            </FooterRow>
          </SynergyPanel>

          <BhoojanPanel $tone="low" $pad="xl">
            <div>
              <PanelHead>
                <Pill $tone="clay">Culinary passion</Pill>
                <ExtLink href={bhoojan.url} target="_blank" rel="noopener noreferrer">
                  @{bhoojan.handle}
                  <ArrowSquareOutIcon aria-hidden />
                </ExtLink>
              </PanelHead>
              <Title>{bhoojan.name}</Title>
              <Muted>
                Wholesome, home-rooted culinary creations tailored for busy corporate schedules — nourishing satvik
                recipes, quick gourmet meals and celebration platters that restore vitality after long workdays.
              </Muted>
              <VideoRow $tone="lowest" $pad="md">
                <IconBadge $tone="error" $round $size="sm">
                  <YoutubeLogoIcon aria-hidden />
                </IconBadge>
                <div>
                  <strong>YouTube culinary series</strong>
                  <span>Easy, mindful recipes for active lifestyles</span>
                </div>
              </VideoRow>
            </div>
            <FooterRow>
              <ExtBtn href={bhoojan.href} target="_blank" rel="noopener noreferrer" $v="ghost">
                <YoutubeLogoIcon weight="fill" aria-hidden />
                Watch playlist &amp; recipes
              </ExtBtn>
            </FooterRow>
          </BhoojanPanel>

          {journeys.map((journey) => (
            <JourneyCard key={journey.id} $tone="lowest" $pad="xl" $shadow="soft">
              <IconBadge $tone="cont" $round>
                {journeyIcons[journey.id]}
              </IconBadge>
              <Eyebrow>{journey.eyebrow}</Eyebrow>
              <h3>{journey.title}</h3>
              <Muted>{journey.text}</Muted>
              <NoteLine>
                <CheckCircleIcon weight="fill" aria-hidden />
                <span>{journey.foot}</span>
              </NoteLine>
            </JourneyCard>
          ))}
        </Bento>

        <Row style={{ marginTop: t.s.xl, justifyContent: "center" }}>
          <Btn href="/community" $v="ghost">
            Explore the Skills Synergy community
          </Btn>
        </Row>
      </Container>
    </Section>
  );
};

export default Ventures;
