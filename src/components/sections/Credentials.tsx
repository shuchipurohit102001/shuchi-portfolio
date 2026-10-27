"use client";
import {
  Container,
  DefaultBrand,
  Eyebrow,
  Grid,
  IconBadge,
  Panel,
  Section,
  SectionHead,
} from "@/components/ui/ui";
import { certs, education, jobs, skills, software } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  BriefcaseIcon,
  CertificateIcon,
  GraduationCapIcon,
  WrenchIcon,
} from "@phosphor-icons/react";
import styled from "styled-components";

const JobCard = styled(Panel)`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  height: 100%;
  h3 {
    font-family: var(--font-manrope);
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 700;
    margin-top: ${t.s.xs};
  }
  p {
    color: ${t.c.inkVar};
    font-size: 0.84rem;
    line-height: 1.6;
    text-wrap: pretty;
  }
`;

const JobTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.sm};
`;

const When = styled.span`
  && {
    font-size: 0.68rem;
    line-height: 1.4;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: ${t.c.primaryInk};
    white-space: nowrap;
  }
`;

const Org = styled.span`
  display: block;
  font-size: 0.84rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${t.c.secondary};
`;

const JobNote = styled.span`
  display: block;
  margin-top: -0.25rem;
  font-size: 0.76rem;
  line-height: 1.5;
  color: ${t.c.inkVar};
  font-style: italic;
`;

const CredGrid = styled.div`
  display: grid;
  gap: ${t.s.lg};
  margin-top: ${t.s.lg};
  @media (min-width: ${t.bp.desktop}) {
    grid-template-columns: 1.15fr 0.85fr;
  }
`;

const PanelHead = styled.div`
  display: flex;
  align-items: center;
  gap: ${t.s.sm};
  margin-bottom: ${t.s.lg};
  h3 {
    font-family: var(--font-manrope);
    font-size: 1.05rem;
    line-height: 1.3;
    font-weight: 700;
  }
`;

const EduItem = styled.div`
  display: grid;
  gap: 0.15rem;
  padding: 0 0 ${t.s.md} ${t.s.md};
  border-left: 2px solid ${t.c.outlineVariant};
  position: relative;
  &:last-of-type {
    padding-bottom: 0;
  }
  &::before {
    content: "";
    position: absolute;
    left: -0.34rem;
    top: 0.3rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: ${t.c.secondary};
  }
  strong {
    font-size: 0.92rem;
    line-height: 1.4;
    color: ${t.c.ink};
  }
  span {
    font-size: 0.8rem;
    line-height: 1.5;
    color: ${t.c.inkVar};
  }
`;

const EduMeta = styled.div`
  margin-top: 0.1rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${t.c.primaryInk};
`;

const SubHead = styled.h4`
  margin: ${t.s.lg} 0 ${t.s.sm};
  font-family: var(--font-manrope);
  font-size: 0.78rem;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: ${t.c.inkVar};
`;

const CertGrid = styled.div`
  display: grid;
  gap: ${t.s.sm};
  @media (min-width: ${t.bp.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CertItem = styled.div`
  display: grid;
  gap: 0.14rem;
  padding: ${t.s.sm} ${t.s.md};
  border-radius: ${t.r.md};
  background: ${t.c.low};
  strong {
    font-size: 0.8rem;
    line-height: 1.4;
    color: ${t.c.ink};
  }
  span {
    font-size: 0.72rem;
    line-height: 1.45;
    color: ${t.c.inkVar};
  }
`;

const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const SkillChip = styled.span`
  display: inline-flex;
  padding: 0.3rem 0.65rem;
  border-radius: ${t.r.full};
  background: ${t.c.clay};
  color: ${t.c.clayInk};
  font-size: 0.72rem;
  line-height: 1.4;
  font-weight: 600;
`;

const ToolRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${t.s.sm};
  padding: ${t.s.sm} 0;
  border-bottom: 1px solid ${t.c.outlineVariant};
  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
  }
  svg {
    flex: none;
    margin-top: 0.14rem;
    color: ${t.c.secondary};
  }
  strong {
    display: block;
    font-size: 0.84rem;
    line-height: 1.4;
    color: ${t.c.ink};
  }
  span {
    display: block;
    font-size: 0.74rem;
    line-height: 1.5;
    color: ${t.c.inkVar};
  }
`;

const Credentials = () => {
  return (
    <Section $tone="cont">
      <Container>
        <SectionHead
          eyebrow="Experience & credentials"
          title="Built in classrooms and boardrooms"
          text="Psychology and English Literature roots, with hands-on experience across business development, college training and student counselling."
        />

        <Grid $min="320px">
          {jobs.map((job) => (
            <JobCard key={`${job.role}-${job.org}`} $tone="lowest" $pad="lg" $shadow="soft">
              <JobTop>
                <IconBadge $tone="cont" $size="sm">
                  <DefaultBrand icon={BriefcaseIcon} size={20} aria-hidden />
                </IconBadge>
                <When>{job.when}</When>
              </JobTop>
              <h3>{job.role}</h3>
              <Org>{job.org}</Org>
              {"note" in job && job.note ? <JobNote>{job.note}</JobNote> : null}
              <p>{job.summary}</p>
            </JobCard>
          ))}
        </Grid>

        <CredGrid>
          <Panel $tone="lowest" $pad="xl" $shadow="soft">
            <PanelHead>
              <IconBadge $tone="clay" $size="sm">
                <DefaultBrand icon={GraduationCapIcon} size={20} aria-hidden />
              </IconBadge>
              <div>
                <Eyebrow>Education</Eyebrow>
                <h3>Academic foundation</h3>
              </div>
            </PanelHead>

            {education.map((item) => (
              <EduItem key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.org}</span>
                <EduMeta>
                  {item.when} · {item.detail}
                </EduMeta>
              </EduItem>
            ))}

            <SubHead>Certifications</SubHead>
            <CertGrid>
              {certs.map((cert) => (
                <CertItem key={cert.title}>
                  <strong>{cert.title}</strong>
                  <span>{cert.org}</span>
                  <When>{cert.when}</When>
                </CertItem>
              ))}
            </CertGrid>
          </Panel>

          <Panel $tone="lowest" $pad="xl" $shadow="soft">
            <PanelHead>
              <IconBadge $tone="cont" $size="sm">
                <DefaultBrand icon={WrenchIcon} size={20} aria-hidden />
              </IconBadge>
              <div>
                <Eyebrow>Skill set</Eyebrow>
                <h3>What I bring to the room</h3>
              </div>
            </PanelHead>

            <SkillChips>
              {skills.map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </SkillChips>

            <SubHead>Software</SubHead>
            {software.map((tool) => (
              <ToolRow key={tool.name}>
                <DefaultBrand icon={CertificateIcon} size={20} aria-hidden />
                <div>
                  <strong>{tool.name}</strong>
                  <span>{tool.note}</span>
                </div>
              </ToolRow>
            ))}
          </Panel>
        </CredGrid>
      </Container>
    </Section>
  );
};

export default Credentials;
