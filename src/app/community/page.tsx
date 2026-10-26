"use client";
import InquiryForm from "@/components/InquiryForm";
import {
  Card,
  Chip,
  Chips,
  Container,
  ExtBtn,
  Grid,
  H1,
  H2,
  Head,
  Lead,
  Media,
  Muted,
  Row,
  Section,
  Split,
} from "@/components/ui/ui";
import { person } from "@/data/content";
import { t } from "@/providers/tokens";
import styled from "styled-components";

const Stat = styled.div`
  display: grid;
  gap: 2px;
  strong {
    font-family: var(--font-epilogue);
    font-size: 1.75rem;
  }
  span {
    color: ${t.c.inkVar};
    font-size: 0.85rem;
  }
`;
const Stats = styled.div`
  display: flex;
  gap: ${t.s.xl};
  flex-wrap: wrap;
  padding-top: ${t.s.md};
  border-top: 1px solid ${t.c.line}66;
`;

const pillars = [
  { title: "Soft skills", text: "Communication, listening and interpersonal skills for study and work." },
  { title: "Grooming", text: "Presence, posture and etiquette for interviews and the workplace." },
  { title: "Corporate training", text: "Classroom-to-corporate readiness for students and early-career teams." },
  { title: "1:1 coaching", text: "Private sessions built around your goals and your obstacles." },
  { title: "Personality development", text: "Confidence, clarity and character, one habit at a time." },
];

export default function Community() {
  return (
    <>
      <Section>
        <Container>
          <Split>
            <div style={{ display: "grid", gap: 24 }}>
              <Chip style={{ width: "fit-content" }}>@skill_synergy_ on Instagram</Chip>
              <H1>Skills Synergy: learn to speak, present and carry yourself with confidence</H1>
              <Lead>
                A community for soft skills, grooming, corporate training, 1:1 coaching and personality development,
                founded by {person.name}.
              </Lead>
              <Row>
                <ExtBtn href="https://www.instagram.com/skill_synergy_/" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </ExtBtn>
                <ExtBtn href={`https://wa.me/${person.wa}`} target="_blank" rel="noopener noreferrer" $v="secondary">
                  DM on WhatsApp
                </ExtBtn>
              </Row>
              <Stats>
                <Stat>
                  <strong>18</strong>
                  <span>posts</span>
                </Stat>
                <Stat>
                  <strong>73</strong>
                  <span>followers</span>
                </Stat>
              </Stats>
            </div>
            <Media kind="video" ratio="4/5" label="Community intro video" />
          </Split>
        </Container>
      </Section>

      <Section $tone="low">
        <Container>
          <Head>
            <H2>What we cover</H2>
            <Muted>Five areas, from first conversations to final interviews.</Muted>
          </Head>
          <Grid $min="220px">
            {pillars.map((p) => (
              <Card key={p.title}>
                <h3>{p.title}</h3>
                <Muted>{p.text}</Muted>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Head>
            <H2>From the feed</H2>
            <Muted>Reels, carousels and class moments. Replace these placeholders with your posts.</Muted>
          </Head>
          <Grid $min="200px">
            {[
              "Speaking tip reel",
              "Grooming checklist carousel",
              "Workshop moment",
              "Student feedback",
              "Etiquette reel",
              "Interview prep carousel",
            ].map((l, i) => (
              <Media key={l} kind={i % 2 === 0 ? "video" : "image"} ratio="4/5" label={l} />
            ))}
          </Grid>
          <Row style={{ marginTop: 24 }}>
            <ExtBtn
              href="https://www.instagram.com/skill_synergy_/"
              target="_blank"
              rel="noopener noreferrer"
              $v="ghost"
            >
              See all posts
            </ExtBtn>
          </Row>
        </Container>
      </Section>

      <Section $tone="cont">
        <Container>
          <Split>
            <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
              <H2>Join the next batch</H2>
              <Lead>Tell us what you want to work on. Shuchi will reply on WhatsApp with next steps.</Lead>
              <Chips>
                <Chip>DM or WhatsApp {person.phone}</Chip>
              </Chips>
            </div>
            <InquiryForm
              title="Ask about Skills Synergy"
              options={[
                { value: "cohort", label: "Join a group batch" },
                { value: "coaching", label: "1:1 coaching" },
                { value: "grooming", label: "Grooming and etiquette" },
                { value: "corporate", label: "Corporate training" },
              ]}
            />
          </Split>
        </Container>
      </Section>
    </>
  );
}
