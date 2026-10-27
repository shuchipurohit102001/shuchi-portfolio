"use client";
import { Avatar, Container, ExtBtn, Grid, Muted, Panel, Section, SectionHead } from "@/components/ui/ui";
import { feed, testimonials } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  CaretLeftIcon,
  CaretRightIcon,
  ChatIcon,
  HeartIcon,
  InstagramLogoIcon,
  PlayCircleIcon,
  QuotesIcon,
} from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Carousel = styled.div`
  position: relative;
`;

const Track = styled.div`
  display: flex;
  gap: ${t.s.lg};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  padding-bottom: ${t.s.sm};
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.div`
  flex: 0 0 85%;
  scroll-snap-align: start;
  display: flex; /* so the card stretches to equal height */

  @media (min-width: 600px) {
    flex-basis: calc((100% - ${t.s.lg}) / 2);
  }
  @media (min-width: 960px) {
    flex-basis: calc((100% - 2 * ${t.s.lg}) / 3);
  }
  @media (min-width: 1280px) {
    flex-basis: calc((100% - 3 * ${t.s.lg}) / 4);
  }
`;

const NavBtn = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 40%;
  ${({ $side }) => ($side === "left" ? "left: -0.75rem;" : "right: -0.75rem;")}
  z-index: 2;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  background: ${t.c.cont};
  color: ${t.c.ink};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  &:disabled {
    opacity: 0.35;
    cursor: default;
  }
  @media (hover: none) {
    display: none; /* touch devices just swipe */
  }
`;

const FeedCard = styled(Panel)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
`;

const PlayerWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: ${t.c.cont};
  border-radius: 8px;
  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
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

const LazyVideo = ({ src, title }: { src: string; title: string }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), {
      threshold: 0.6,
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return <video ref={ref} src={src} title={title} muted loop playsInline controls preload="metadata" />;
};

const Showcase = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    el?.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el?.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth; // 24 ≈ gap
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

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

        <Carousel>
          <NavBtn $side="left" onClick={() => scrollByCard(-1)} disabled={!canPrev} aria-label="Previous">
            <CaretLeftIcon size={22} />
          </NavBtn>

          <Track ref={trackRef} role="region" aria-label="Instagram content" tabIndex={0}>
            {feed.map((item) => (
              <Slide key={item.id} data-slide>
                <FeedCard $tone="lowest" $shadow="soft" style={{ width: "100%" }}>
                  <PlayerWrap>
                    <LazyVideo src={item.url} title={item.title} />
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
              </Slide>
            ))}
          </Track>

          <NavBtn $side="right" onClick={() => scrollByCard(1)} disabled={!canNext} aria-label="Next">
            <CaretRightIcon size={22} />
          </NavBtn>
        </Carousel>

        <Grid $min="260px" style={{ marginTop: t.s.xl }}>
          {testimonials.map((item) => (
            <Testimonial key={item.name} $tone="cont" $pad="lg">
              <blockquote>
                <QuotesIcon size={20} weight="fill" aria-hidden />
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
