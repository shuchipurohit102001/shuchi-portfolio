"use client";
import {
  CheckList,
  Container,
  ExtBtn,
  Grid,
  IconBadge,
  Muted,
  Panel,
  Pill,
  Section,
  SectionHead,
} from "@/components/ui/ui";
import { person, programs } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  ArrowRightOutlined,
  BulbOutlined,
  IdcardOutlined,
  MessageOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";
import styled from "styled-components";

const ProgramCard = styled(Panel)`
  display: flex;
  flex-direction: column;
  gap: ${t.s.sm};
  height: 100%;
  h3 {
    font-family: var(--font-manrope);
    font-size: 1.08rem;
    line-height: 1.35;
    font-weight: 600;
    margin-top: ${t.s.xs};
  }
  ul {
    margin-top: ${t.s.xs};
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.sm};
`;

const Foot = styled.div`
  margin-top: auto;
  padding-top: ${t.s.md};
  a {
    width: 100%;
  }
`;

const programIcons: Record<string, ReactNode> = {
  grooming: <IdcardOutlined aria-hidden />,
  communication: <MessageOutlined aria-hidden />,
  coaching: <BulbOutlined aria-hidden />,
  personality: <TeamOutlined aria-hidden />,
};

const Programs = () => {
  return (
    <Section $tone="low">
      <Container>
        <SectionHead
          eyebrow="Cohort offerings"
          title="Curated programs & masterclasses"
          text="Designed with balanced theoretical frameworks and hands-on simulation clinics for demonstrable behavioural shifts."
          action={
            <ExtBtn
              href={`https://wa.me/${person.wa}?text=${encodeURIComponent(
                "Hi Shuchi, I would like to know more about your upcoming programs.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              $v="ghost"
            >
              Request cohort syllabus
              <ArrowRightOutlined aria-hidden />
            </ExtBtn>
          }
        />

        <Grid $min="240px">
          {programs.map((program) => {
            const featured = "featured" in program && program.featured;
            return (
              <ProgramCard key={program.id} $tone="lowest" $pad="lg" $shadow="soft">
                <CardTop>
                  <Pill $tone="clay">{program.module}</Pill>
                  {featured ? (
                    <Pill $tone="dark">High impact</Pill>
                  ) : (
                    <IconBadge $tone="cont" $size="sm">
                      {programIcons[program.id]}
                    </IconBadge>
                  )}
                </CardTop>
                <h3>{program.title}</h3>
                <Muted>{program.text}</Muted>
                <CheckList items={program.points} />
                <Foot>
                  <ExtBtn
                    href={`https://wa.me/${person.wa}?text=${encodeURIComponent(program.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    $v={featured ? "primary" : "ghost"}
                  >
                    {featured ? "Book private 1:1" : "Enquire module"}
                  </ExtBtn>
                </Foot>
              </ProgramCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default Programs;
