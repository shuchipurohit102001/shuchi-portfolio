"use client"
import {
  Avatar,
  Card,
  Container,
  Grid,
  IconBadge,
  Media,
  Muted,
  Panel,
  Section,
  SectionHead,
} from "@/components/ui/ui";
import { communityPillars, founderNote, person } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  IdentificationCardIcon,
  LightbulbIcon,
  MusicNoteIcon,
  SmileyIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import styled from "styled-components";

const FoundationsGrid = styled.div`
  display: grid;
  gap: ${t.s.xl};
  @media (min-width: ${t.bp.desktop}) {
    grid-template-columns: 5fr 7fr;
    gap: ${t.s.xxl};
    align-items: center;
  }
`;

const NotePanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  gap: ${t.s.md};
  height: 100%;
  min-height: 22rem;
`;

const FounderHead = styled.div`
  display: flex;
  align-items: center;
  gap: ${t.s.md};
  > div strong {
    display: block;
    font-family: var(--font-epilogue);
    font-size: 1.15rem;
    color: ${t.c.ink};
  }
  > div span {
    display: block;
    font-size: 0.82rem;
    color: ${t.c.secondary};
    font-weight: 600;
  }
`;

const Quote = styled.blockquote`
  position: relative;
  margin: ${t.s.sm} 0 0;
  padding-left: ${t.s.lg};
  color: ${t.c.ink};
  font-size: 1.02rem;
  line-height: 1.7;
  font-style: italic;
  &::before {
    content: "“";
    position: absolute;
    left: 0;
    top: -0.35rem;
    color: ${t.c.secondary};
    font-family: var(--font-epilogue);
    font-size: 2.4rem;
    line-height: 1;
  }
`;

const NoteFoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.sm};
  margin-top: auto;
  padding: ${t.s.sm} ${t.s.md};
  border-radius: ${t.r.md};
  background: ${t.c.cont};
  span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: ${t.c.inkVar};
    font-size: 0.76rem;
  }
  strong {
    color: ${t.c.secondary};
    font-size: 0.76rem;
    font-weight: 700;
  }
`;

const pillarIcons: Record<string, ReactNode> = {
  "soft-skills": <LightbulbIcon size={20} aria-hidden />,
  grooming: <IdentificationCardIcon size={20} aria-hidden />,
  personality: <SmileyIcon size={20} aria-hidden />,
  articulation: <MusicNoteIcon size={20} aria-hidden />,
};

const pillarMedia: Record<string, { src: string; kind: "image" | "video"; label: string; caption: string }> = {
  "soft-skills": {
    src: "/community-workshop/image1.png",
    kind: "image",
    label: "Classroom soft skills workshop",
    caption: "Interactive drills in active listening and articulation",
  },
  grooming: {
    src: "/1-1/image1.png",
    kind: "image",
    label: "Corporate grooming session",
    caption: "Posture, presence and workplace etiquette in practice",
  },
  personality: {
    src: "/community-workshop/image2.png",
    kind: "image",
    label: "Personality development cohort",
    caption: "Confidence building through role-play and feedback",
  },
  articulation: {
    src: "/community-workshop/c45dec25753e667ef1e2767bb2f31821.mp4",
    kind: "video",
    label: "Confident articulation practice",
    caption: "Voice modulation and impromptu speaking in action",
  },
};

const PillarCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${t.s.sm};
  padding: 0;
  overflow: hidden;
  h3 {
    margin: 0 ${t.s.lg};
  }
  > p {
    margin: 0 ${t.s.lg} ${t.s.lg};
  }
`;

const PillarMediaWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: ${t.c.cont};
  img,
  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video {
    background: #000;
  }
`;

const PillarHead = styled.div`
  display: flex;
  align-items: center;
  gap: ${t.s.sm};
  margin: ${t.s.lg} ${t.s.lg} 0;
`;

const PillarCaption = styled.span`
  display: inline-flex;
  margin: -${t.s.xs} ${t.s.lg} 0;
  color: ${t.c.secondary};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Foundations = () => {
  return (
    <Section>
      <Container>
        <FoundationsGrid>
          <NotePanel $tone="high" $pad="xl">
            <FounderHead>
              <Avatar $size={72} $src="/profilePhoto.png">
                SP
              </Avatar>
              <div>
                <strong>Founder&apos;s note</strong>
                <span>{person.name}</span>
              </div>
            </FounderHead>
            <Quote>{founderNote}</Quote>
            <Media label="Skill Workshop" src="/skillSynergy.png" />
            <Media label="Skill Workshop" src="/community-workshop/image3.png" />
            <NoteFoot>
              <span>
                <UsersThreeIcon size={20} aria-hidden />
                Community hub
              </span>
              <strong>Skills Synergy platform</strong>
            </NoteFoot>
          </NotePanel>

          <div>
            <SectionHead
              eyebrow="Our foundation"
              title="The four strategic pillars of synergy"
              text="Every masterclass, cohort interaction and private audit is anchored in four interconnected competencies designed to transform internal conviction into external grace."
            />
            <Grid $min="240px">
              {communityPillars.map((pillar) => {
                const media = pillarMedia[pillar.id];
                return (
                  <PillarCard key={pillar.id}>
                    <PillarMediaWrap>
                      {media?.kind === "video" ? (
                        <video src={media.src} title={media.label} muted loop playsInline autoPlay preload="metadata" />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={media?.src} alt={media?.label ?? pillar.title} loading="lazy" />
                      )}
                    </PillarMediaWrap>
                    <PillarHead>
                      <IconBadge $tone="clay" $round>
                        {pillarIcons[pillar.id]}
                      </IconBadge>
                      <h3>{pillar.title}</h3>
                    </PillarHead>
                    {media?.caption ? <PillarCaption>{media.caption}</PillarCaption> : null}
                    <Muted>{pillar.text}</Muted>
                  </PillarCard>
                );
              })}
            </Grid>
          </div>
        </FoundationsGrid>
      </Container>
    </Section>
  );
};

export default Foundations;
