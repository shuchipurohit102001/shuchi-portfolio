"use client";
import InquiryForm from "@/components/InquiryForm";
import { Container, Eyebrow, H2, IconBadge, Lead, Panel, Section, Split } from "@/components/ui/ui";
import { person, ventures } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  ArrowRightIcon,
  CoffeeIcon,
  EnvelopeIcon,
  LinkedinLogoIcon,
  PaperPlaneRightIcon,
  UserIcon,
  UsersThreeIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import styled from "styled-components";

const Copy = styled.div`
  display: grid;
  gap: ${t.s.md};
  align-content: start;
`;

const WhatsAppCard = styled(Panel)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.md};
  margin-top: ${t.s.sm};
  background: ${t.c.clay}99;
  > div > div strong {
    display: block;
    font-size: 1rem;
    color: ${t.c.ink};
  }
  > div > div span {
    display: block;
    font-size: 0.8rem;
    color: ${t.c.inkVar};
  }
`;

const SendBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${t.r.md};
  background: ${t.c.primary};
  color: ${t.c.onPrimary};
  text-decoration: none;
  transition: background 0.15s ease;
  &:hover {
    background: ${t.c.primaryHover};
  }
`;

const SocialTitle = styled.span`
  display: block;
  margin-top: ${t.s.sm};
  font-size: 0.95rem;
  font-weight: 600;
  color: ${t.c.ink};
`;

const SocialRow = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.sm};
  padding: ${t.s.md};
  border-radius: ${t.r.md};
  background: ${t.c.lowest};
  box-shadow: ${t.shadowSoft};
  text-decoration: none;
  transition: background 0.15s ease;
  &:hover {
    background: ${t.c.low};
  }
  > svg {
    color: ${t.c.outline};
  }
  strong {
    display: block;
    font-size: 0.9rem;
    color: ${t.c.ink};
  }
  small {
    display: block;
    font-size: 0.77rem;
    line-height: 1.45;
    color: ${t.c.inkVar};
  }
`;

const SocialCopy = styled.span`
  display: flex;
  align-items: center;
  gap: ${t.s.md};
  min-width: 0;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t.s.md};
  padding-top: ${t.s.xs};
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: ${t.c.inkVar};
    font-size: 0.84rem;
    text-decoration: none;
    &:hover {
      color: ${t.c.ink};
      text-decoration: underline;
    }
  }
`;

const ventureIcons: Record<string, ReactNode> = {
  skill_synergy_: <UsersThreeIcon size={20} aria-hidden />,
  bhoojanpriye: <CoffeeIcon size={20} aria-hidden />,
  purohitshuchi: <UserIcon size={20} aria-hidden />,
};

const Contact = () => {
  return (
    <Section>
      <Container>
        <Split>
          <Copy>
            <Eyebrow>Get in touch</Eyebrow>
            <H2>Connect &amp; collaborate</H2>
            <Lead>
              Whether you need a dedicated corporate training engagement, 1:1 mentorship or wish to collaborate with the
              community — reach out directly.
            </Lead>

            <WhatsAppCard $tone="clay" $pad="lg">
              <div style={{ display: "flex", alignItems: "center", gap: t.s.md }}>
                <IconBadge $tone="dark" $round $size="lg">
                  <WhatsappLogoIcon size={20} aria-hidden />
                </IconBadge>
                <div>
                  <strong>{person.phone}</strong>
                  <span>Typically replies within 24 hours</span>
                </div>
              </div>
              <SendBtn
                href={`https://wa.me/${person.wa}?text=${encodeURIComponent(
                  "Hello Shuchi, I'm reaching out via your portfolio.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Shuchi on WhatsApp"
              >
                <PaperPlaneRightIcon size={20} aria-hidden />
              </SendBtn>
            </WhatsAppCard>

            <Meta>
              <a href={`mailto:${person.email}`}>
                <EnvelopeIcon size={20} aria-hidden />
                {person.email}
              </a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinLogoIcon size={20} aria-hidden />
                LinkedIn
              </a>
            </Meta>

            <SocialTitle>Instagram ecosystem</SocialTitle>
            {ventures.map((venture) => (
              <SocialRow key={venture.handle} href={venture.url} target="_blank" rel="noopener noreferrer">
                <SocialCopy>
                  <IconBadge $tone={venture.handle === "skill_synergy_" ? "clay" : "cont"} $round $size="sm">
                    {ventureIcons[venture.handle]}
                  </IconBadge>
                  <span>
                    <strong>@{venture.handle}</strong>
                    <small>{venture.tag}</small>
                  </span>
                </SocialCopy>
                <ArrowRightIcon size={20} aria-hidden />
              </SocialRow>
            ))}
          </Copy>

          <InquiryForm
            title="Initiate a consultation"
            description="Share a little context and Shuchi will reply on WhatsApp with the right next step."
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
  );
};

export default Contact;
