"use client";
import InquiryForm from "@/components/InquiryForm";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import {
  Btn,
  Card,
  Chip,
  Chips,
  Container,
  ExtBtn,
  Grid,
  H2,
  Head,
  Lead,
  Media,
  Muted,
  Section,
  Split,
} from "@/components/ui/ui";
import { certs, education, jobs, person, skills, ventures } from "@/data/content";
import { t } from "@/providers/tokens";
import styled from "styled-components";

const Timeline = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0 0 0 ${t.s.lg};
  border-left: 2px solid ${t.c.line}88;
  display: grid;
  gap: ${t.s.xl};
`;

const Job = styled.li`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: calc(-${t.s.lg} - 6px);
    top: 0.5rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${t.c.secondary};
  }
  h3 {
    font-family: var(--font-manrope);
    font-size: 1.15rem;
    font-weight: 600;
  }
  ul {
    margin: ${t.s.sm} 0 0;
    padding-left: 1.1rem;
    color: ${t.c.inkVar};
    display: grid;
    gap: 0.25rem;
  }
`;

const Meta = styled.div`
  color: ${t.c.secondary};
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
`;

const Two = styled.div`
  display: grid;
  gap: ${t.s.xl};
  @media (min-width: ${t.bp.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Item = styled.li`
  padding: ${t.s.md} 0;
  border-bottom: 1px solid ${t.c.highest};
  list-style: none;
  &:last-child {
    border: 0;
  }
  strong {
    display: block;
  }
  span {
    color: ${t.c.inkVar};
    font-size: 0.9rem;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export default function Portfolio() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Section>
        <Container>
          <Head>
            <H2>Experience</H2>
          </Head>
          <Timeline>
            {jobs.map((j) => (
              <Job key={j.role + j.org}>
                <Meta>{j.when}</Meta>
                <h3>{j.role}</h3>
                <Muted>
                  {j.org}
                  {j.note ? `. ${j.note}` : ""}
                </Muted>
                <ul>
                  {j.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Job>
            ))}
          </Timeline>
        </Container>
      </Section>

      <Section $tone="cont">
        <Container>
          <Two>
            <div>
              <Head>
                <H2>Skills</H2>
              </Head>
              <Chips>
                {skills.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </Chips>
            </div>
            <div>
              <Head>
                <H2>Languages</H2>
              </Head>
              <List>
                <Item>
                  <strong>English</strong>
                  <span>Bilingual or proficient (C2)</span>
                </Item>
                <Item>
                  <strong>German</strong>
                  <span>A1</span>
                </Item>
              </List>
            </div>
          </Two>
        </Container>
      </Section>

      <Section>
        <Container>
          <Two>
            <div>
              <Head>
                <H2>Education</H2>
              </Head>
              <List>
                {education.map((e) => (
                  <Item key={e.title}>
                    <strong>{e.title}</strong>
                    <span>
                      {e.org}
                      {e.when && `, ${e.when}`}
                    </span>
                  </Item>
                ))}
              </List>
            </div>
            <div>
              <Head>
                <H2>Certifications</H2>
              </Head>
              <List>
                {certs.map((c) => (
                  <Item key={c.title}>
                    <strong>{c.title}</strong>
                    <span>
                      {c.org}, {c.when}
                    </span>
                  </Item>
                ))}
              </List>
            </div>
          </Two>
        </Container>
      </Section>

      <Section $tone="low">
        <Container>
          <Head>
            <H2>Ventures and creative work</H2>
            <Muted>Three Instagram profiles, each with its own purpose.</Muted>
          </Head>
          <Grid $min="280px">
            {ventures.map((v) => (
              <Card key={v.handle}>
                <Media ratio="16/10" label={`${v.name} cover image`} />
                <Chip style={{ width: "fit-content" }}>{v.tag}</Chip>
                <h3>{v.name}</h3>
                <Muted>{v.text}</Muted>
                <Muted>
                  <strong>@{v.handle}</strong>, {v.stats}
                </Muted>
                {v.href.startsWith("/") ? (
                  <Btn href={v.href} $v="ghost">
                    Open community page
                  </Btn>
                ) : (
                  <ExtBtn href={v.href} target="_blank" rel="noopener noreferrer" $v="ghost">
                    Visit
                  </ExtBtn>
                )}
              </Card>
            ))}
          </Grid>
          <Head style={{ marginTop: 48 }}>
            <H2>Kathak and kitchen</H2>
            <Muted>Add your performance and recipe videos here.</Muted>
          </Head>
          <Grid $min="260px">
            <Media kind="video" ratio="16/9" label="Kathak performance video" />
            <Media kind="video" ratio="16/9" label="Bhoojanpriye recipe video" />
            <Media ratio="16/9" label="Workshop or classroom photo" />
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Split>
            <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
              <H2>Let&apos;s talk</H2>
              <Lead>For 1:1 coaching, a college or corporate workshop, or a business development conversation.</Lead>
              <Muted>
                WhatsApp {person.phone}
                <br />
                {person.email}
                <br />
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Muted>
            </div>
            <InquiryForm
              options={[
                { value: "coaching", label: "1:1 coaching" },
                { value: "workshop", label: "College or corporate workshop" },
                { value: "bd", label: "Business development" },
                { value: "collab", label: "Collaboration" },
              ]}
            />
          </Split>
        </Container>
      </Section>
    </>
  );
}
