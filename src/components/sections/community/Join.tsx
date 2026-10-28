"use client";
import InquiryForm from "@/components/InquiryForm";
import {
  Avatar,
  Container,
  DefaultBrand,
  H2,
  IconBadge,
  Lead,
  Panel,
  Pill,
  Section,
  WhatsappBrand,
} from "@/components/ui/ui";
import { person, ventures } from "@/data/content";
import { t } from "@/providers/tokens";
import { ArrowRightIcon } from "@phosphor-icons/react";
import styled from "styled-components";

const JoinPanel = styled(Panel)`
  @media (min-width: ${t.bp.tablet}) {
    padding: ${t.s.xxl};
  }
`;

const JoinGrid = styled.div`
  display: grid;
  gap: ${t.s.xl};
  align-items: start;
  @media (min-width: ${t.bp.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: ${t.s.xxl};
  }
`;

const Copy = styled.div`
  display: grid;
  gap: ${t.s.md};
`;

const Hotlines = styled.div`
  display: grid;
  gap: ${t.s.sm};
  padding-top: ${t.s.sm};
`;

const Hotline = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.md};
  padding: ${t.s.md};
  border-radius: ${t.r.md};
  background: ${t.c.cont};
  text-decoration: none;
  transition:
    background 0.15s ease,
    transform 0.15s ease;
  &:hover {
    background: ${t.c.high};
    transform: translateY(-1px);
  }
  > div > span:last-child {
    display: block;
    min-width: 0;
  }
  > div > span:last-child strong {
    display: block;
    font-size: 0.9rem;
    color: ${t.c.ink};
  }
  > div > span:last-child > span {
    display: block;
    font-size: 0.78rem;
    color: ${t.c.inkVar};
  }
  > svg {
    flex: none;
    color: ${t.c.outline};
  }
`;

const HotlineCopy = styled.div`
  display: flex;
  align-items: center;
  gap: ${t.s.md};
`;

const FormPanel = styled(Panel)`
  @media (min-width: ${t.bp.tablet}) {
    padding: ${t.s.xl};
  }
`;

const Join = () => {
  return (
    <Section $tone="cont">
      <Container>
        <JoinPanel $tone="lowest" $pad="lg" $shadow="lift">
          <JoinGrid>
            <Copy>
              <Pill $tone="clay">Open cohort registration</Pill>
              <H2>Ready to elevate your personal and professional presence?</H2>
              <Lead>
                Whether you are seeking 1:1 mentorship from {person.name} or wish to participate in our next
                collaborative cohort, connect directly via the WhatsApp hotline, Instagram or Linkedin DM.
              </Lead>

              <Hotlines>
                <Hotline
                  href={`https://wa.me/${person.wa}?text=${encodeURIComponent(
                    "Hi Shuchi, I'd like to join the next Skills Synergy cohort.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HotlineCopy>
                    <IconBadge $tone="clay" $round>
                      <WhatsappBrand size={20} aria-hidden />
                    </IconBadge>
                    <span>
                      <strong>WhatsApp direct helpline</strong>
                      <span>{person.phone}</span>
                    </span>
                  </HotlineCopy>
                  <DefaultBrand icon={ArrowRightIcon} size={20} aria-hidden />
                </Hotline>

                <Hotline href="https://www.instagram.com/skill_synergy_/" target="_blank" rel="noopener noreferrer">
                  <HotlineCopy>
                    <IconBadge $tone="cont" $round>
                      <Avatar $src={ventures[0].src} $size={30} aria-hidden />
                    </IconBadge>
                    <span>
                      <strong>Instagram direct message</strong>
                      <span>@skill_synergy_</span>
                    </span>
                  </HotlineCopy>
                  <DefaultBrand icon={ArrowRightIcon} size={20} aria-hidden />
                </Hotline>

                <Hotline href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <HotlineCopy>
                    <IconBadge $tone="cont" $round>
                      <Avatar $src="/profile/shuchiwa.png" $size={30} aria-hidden />
                    </IconBadge>
                    <span>
                      <strong>Linkedin direct message</strong>
                      <span>shuchi-purohit1</span>
                    </span>
                  </HotlineCopy>
                  <DefaultBrand icon={ArrowRightIcon} size={20} aria-hidden />
                </Hotline>
              </Hotlines>
            </Copy>

            <FormPanel $tone="low" $pad="lg">
              <InquiryForm
                plain
                title="RSVP for the next synergy cohort"
                description="Submit your inquiry and Shuchi's desk will confirm your intake diagnostic within 24 hours."
                options={[
                  { value: "1on1", label: "1:1 deep dive mentorship" },
                  { value: "grooming", label: "Corporate grooming & poise" },
                  { value: "softskills", label: "Soft skills & articulation" },
                  { value: "cohort", label: "Group personality cohort" },
                ]}
              />
            </FormPanel>
          </JoinGrid>
        </JoinPanel>
      </Container>
    </Section>
  );
};

export default Join;
