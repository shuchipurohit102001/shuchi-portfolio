"use client";
import {
  Card,
  CardFoot,
  Container,
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
import { BankOutlined, CompassOutlined, SmileOutlined, TeamOutlined } from "@ant-design/icons";
import type { ReactNode } from "react";
import styled from "styled-components";

const icons: Record<string, ReactNode> = {
  tech: <BankOutlined aria-hidden />,
  corporate: <TeamOutlined aria-hidden />,
  coaching: <SmileOutlined aria-hidden />,
  vedic: <CompassOutlined aria-hidden />,
};

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
          title="Enterprise software edge meets conscious human grace"
          text="Bridging high-velocity tech enterprise sales with deep interpersonal calibration, communication elegance and structured personal mastery."
        />
        <Grid $min="240px">
          {homePillars.map((pillar) => (
            <Card key={pillar.id}>
              <IconBadge $tone={pillar.id === "corporate" ? "clay" : "cont"} $size="lg" $round>
                {icons[pillar.id]}
              </IconBadge>
              <h3>{pillar.title}</h3>
              <Muted>{pillar.text}</Muted>
              <CardFoot>{pillar.foot}</CardFoot>
            </Card>
          ))}
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
