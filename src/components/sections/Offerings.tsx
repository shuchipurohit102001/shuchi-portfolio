"use client";
import {
  CheckList,
  Container,
  DefaultBrand,
  ExtBtn,
  Grid,
  IconBadge,
  Muted,
  Panel,
  Pill,
  Section,
  SectionHead,
} from "@/components/ui/ui";
import { homeServices, person } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  CalendarBlankIcon,
  ChatTextIcon,
  ChartLineUpIcon,
  GraduationCapIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import styled from "styled-components";

const serviceIcons: Record<string, ReactNode> = {
  communication: <DefaultBrand icon={ChatTextIcon} size={20} aria-hidden />,
  corporate: <DefaultBrand icon={UsersThreeIcon} size={20} aria-hidden />,
  bd: <DefaultBrand icon={ChartLineUpIcon} size={20} aria-hidden />,
  campus: <DefaultBrand icon={GraduationCapIcon} size={20} aria-hidden />,
};

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

const CardHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.sm};
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
              <DefaultBrand icon={CalendarBlankIcon} size={20} aria-hidden />
              Request a custom proposal
            </ExtBtn>
          }
        />

        <Grid $min="240px">
          {homeServices.map((service, index) => (
            <ServiceCard key={service.id} $tone="lowest" $pad="lg" $shadow="soft">
              <CardHead>
                <Pill $tone={index % 2 === 0 ? "clay" : "cont"}>{service.tag}</Pill>
                <IconBadge $tone="cont" $size="sm">
                  {serviceIcons[service.id]}
                </IconBadge>
              </CardHead>
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
