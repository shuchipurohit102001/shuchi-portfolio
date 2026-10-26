"use client";
import {
  CheckList,
  Container,
  ExtBtn,
  Grid,
  Muted,
  Panel,
  Pill,
  Section,
  SectionHead,
} from "@/components/ui/ui";
import { homeServices, person } from "@/data/content";
import { t } from "@/providers/tokens";
import { CalendarBlankIcon } from "@phosphor-icons/react";
import styled from "styled-components";

const ServiceCard = styled(Panel)`
  display: flex;
  flex-direction: column;
  gap: ${t.s.sm};
  height: 100%;
  h3 {
    font-family: var(--font-manrope);
    font-size: 1.1rem;
    line-height: 1.35;
    font-weight: 600;
    margin-top: ${t.s.xs};
  }
  ul {
    margin-top: ${t.s.xs};
  }
`;

const Offerings = () => {
  return (
    <Section $tone="high">
      <Container>
        <SectionHead
          eyebrow="Structured offerings"
          title="Advisory, coaching & workshops"
          text="Choose a focused engagement or combine modules into a programme built around your team's reality."
          action={
            <ExtBtn
              href={`https://wa.me/${person.wa}?text=${encodeURIComponent(
                "Hi Shuchi, I'd like to discuss pricing and availability for a session.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarBlankIcon aria-hidden />
              Request a custom proposal
            </ExtBtn>
          }
        />

        <Grid $min="240px">
          {homeServices.map((service, index) => (
            <ServiceCard key={service.id} $tone="lowest" $pad="lg" $shadow="soft">
              <Pill $tone={index % 2 === 0 ? "clay" : "cont"}>{service.tag}</Pill>
              <h3>{service.title}</h3>
              <Muted>{service.text}</Muted>
              <CheckList items={service.points} />
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Offerings;
