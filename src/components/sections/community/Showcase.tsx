"use client";
import { Avatar, Container, ExtBtn, Grid, Muted, Panel, Section, SectionHead } from "@/components/ui/ui";
import { feed, testimonials } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  ChatIcon,
  HeartIcon,
  InstagramLogoIcon,
  PlayCircleIcon,
  QuotesIcon,
} from "@phosphor-icons/react";
import styled from "styled-components";

const FeedCard = styled(Panel)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
`;

/* Instagram's embed player is a tall, fixed-layout frame, so the wrapper
   gives it a portrait box and lets the iframe fill it. */
const PlayerWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 14;
  min-height: 460px;
  background: ${t.c.cont};
  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background: ${t.c.cont};
  }
`;

const FeedBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${t.s.xs};
  padding: ${t.s.lg};
  flex: 1;
  h4 {
    font-family: var(--font-manrope);
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 600;
    margin-bottom: ${t.s.xs};
  }
`;

const Category = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${t.c.secondary};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
`;

const FeedFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.sm};
  margin-top: auto;
  padding-top: ${t.s.md};
  font-size: 0.75rem;
  color: ${t.c.inkVar};
  span {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
  a {
    color: ${t.c.secondary};
    font-weight: 600;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Stats = styled.span`
  gap: ${t.s.sm} !important;
`;

const Testimonial = styled(Panel)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${t.s.md};
  blockquote {
    margin: 0;
    color: ${t.c.ink};
    font-size: 0.95rem;
    line-height: 1.7;
    font-style: italic;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: ${t.s.sm};
  > div strong {
    display: block;
    font-size: 0.86rem;
    color: ${t.c.ink};
  }
  > div span {
    display: block;
    font-size: 0.74rem;
    color: ${t.c.inkVar};
  }
`;

/* https://www.instagram.com/reel/CODE/  ->  https://www.instagram.com/reel/CODE/embed */
const embedUrl = (url: string) => `${url.replace(/\/+$/, "")}/embed`;

const Showcase = () => {
  return (
    <Section>
      <Container>
        <SectionHead
          eyebrow="Instagram insights"
          title="Content & insights showcase"
          text={
            <>
              Bite-sized masterclasses, public speaking drills and etiquette breakdowns straight from our active channel{" "}
              <strong>@skill_synergy_</strong>.
            </>
          }
          action={
            <ExtBtn
              href="https://www.instagram.com/skill_synergy_/"
              target="_blank"
              rel="noopener noreferrer"
              $v="ghost"
            >
              <InstagramLogoIcon size={20} aria-hidden />
              Visit @skill_synergy_
            </ExtBtn>
          }
        />

        <Grid $min="280px">
          {feed.map((item) => (
            <FeedCard key={item.id} $tone="lowest" $shadow="soft">
              <PlayerWrap>
                <iframe
                  src={embedUrl(item.url)}
                  title={item.title}
                  loading="lazy"
                  scrolling="no"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </PlayerWrap>
              <FeedBody>
                <Category>
                  <PlayCircleIcon size={20} aria-hidden />
                  {item.category}
                </Category>
                <h4>{item.title}</h4>
                <Muted>{item.text}</Muted>
                <FeedFoot>
                  <Stats>
                    <span>
                      <PlayCircleIcon size={20} aria-hidden />
                      {item.plays}
                    </span>
                    <span>
                      <HeartIcon size={20} aria-hidden />
                      {item.likes}
                    </span>
                    <span>
                      <ChatIcon size={20} aria-hidden />
                      {item.comments}
                    </span>
                  </Stats>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.cta}
                  </a>
                </FeedFoot>
              </FeedBody>
            </FeedCard>
          ))}
        </Grid>

        <Grid $min="260px" style={{ marginTop: t.s.xl }}>
          {testimonials.map((item) => (
            <Testimonial key={item.name} $tone="cont" $pad="lg">
              <blockquote>
                <QuotesIcon size={20} aria-hidden />
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <Author>
                <Avatar>{item.initials}</Avatar>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </Author>
            </Testimonial>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Showcase;
