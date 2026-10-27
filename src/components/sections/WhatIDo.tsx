"use client";
import {
  Card,
  CardFoot,
  Container,
  DefaultBrand,
  Eyebrow,
  Grid,
  IconBadge,
  Muted,
  Panel,
  Section,
  SectionHead,
} from "@/components/ui/ui";
import { homePillars, person } from "@/data/content";
import { t } from "@/providers/tokens";
import { BankIcon, GraduationCapIcon, SmileyIcon, UsersThreeIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import styled from "styled-components";

const icons: Record<string, ReactNode> = {
  ielts: <DefaultBrand icon={BankIcon} size={20} aria-hidden />,
  corporate: <DefaultBrand icon={UsersThreeIcon} size={20} aria-hidden />,
  coaching: <DefaultBrand icon={SmileyIcon} size={20} aria-hidden />,
  campus: <DefaultBrand icon={GraduationCapIcon} size={20} aria-hidden />,
};

type PillarMediaItem = {
  src: string;
  kind: "image" | "video";
  label: string;
  caption: string;
};

// TODO: replace placeholder assets/captions with the real ones for each pillar
const pillarMedia: Record<string, PillarMediaItem> = {
  ielts: {
    src: "/community-workshop/image1.png",
    kind: "image",
    label: "IELTS preparation session",
    caption: "Structured practice for speaking and writing bands",
  },
  corporate: {
    src: "/1-1/image1.png",
    kind: "image",
    label: "Corporate training session",
    caption: "Presence, etiquette and communication at work",
  },
  coaching: {
    src: "/1-1/image3.png",
    kind: "image",
    label: "Personal coaching cohort",
    caption: "Confidence building through role-play and feedback",
  },
  campus: {
    src: "/community-workshop/c45dec25753e667ef1e2767bb2f31821.mp4",
    kind: "video",
    label: "Campus workshop",
    caption: "Impromptu speaking and campus engagement in action",
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
    margin: 0 ${t.s.lg};
  }
  > :last-child {
    margin-bottom: ${t.s.lg};
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

const PillarFoot = styled(CardFoot)`
  margin: 0 ${t.s.lg};
`;

const Vision = styled(Panel)`
  margin-top: ${t.s.xl};
  display: grid;
  gap: ${t.s.xs};
  border-left: 3px solid ${t.c.secondary};
  p {
    color: ${t.c.inkVar};
    font-size: 0.95rem;
    line-height: 1.7;
    max-width: 72ch;
  }
`;

const WhatIDo = () => {
  return (
    <Section $tone="low">
      <Container>
        <SectionHead
          eyebrow="Strategic foundations"
          title="Tech Sales Skills, with a Human Touch"
          text="I combine fast-paced enterprise software sales experience with strong people skills, clear and polished communication, and a disciplined approach to growing myself."
        />
        <Grid $min="240px">
          {homePillars.map((pillar) => {
            const media = pillarMedia[pillar.id];
            return (
              <PillarCard key={pillar.id}>
                {media ? (
                  <PillarMediaWrap>
                    {media.kind === "video" ? (
                      <video src={media.src} title={media.label} muted loop playsInline autoPlay preload="metadata" />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={media.src} alt={media.label} loading="lazy" />
                    )}
                  </PillarMediaWrap>
                ) : null}
                <PillarHead>
                  <IconBadge $tone={pillar.id === "corporate" ? "clay" : "cont"} $round>
                    {icons[pillar.id]}
                  </IconBadge>
                  <h3>{pillar.title}</h3>
                </PillarHead>
                {media?.caption ? <PillarCaption>{media.caption}</PillarCaption> : null}
                <Muted>{pillar.text}</Muted>
                <PillarFoot>{pillar.foot}</PillarFoot>
              </PillarCard>
            );
          })}
        </Grid>
        <Vision $tone="lowest" $shadow="soft">
          <Eyebrow>The vision</Eyebrow>
          <p>{person.vision}</p>
        </Vision>
      </Container>
    </Section>
  );
};

export default WhatIDo;
