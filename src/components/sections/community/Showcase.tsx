"use client";
import {
  Avatar,
  Container,
  ExtBtn,
  Grid,
  Media,
  Muted,
  Panel,
  Section,
  SectionHead,
} from "@/components/ui/ui";
import { feed, testimonials } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  AppstoreOutlined,
  CommentOutlined,
  HeartOutlined,
  InstagramOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const FeedCard = styled(Panel)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
`;

const MediaWrap = styled.div`
  position: relative;
  background: ${t.c.cont};
  figure {
    border-radius: 0;
    border: 0;
  }
`;

const FormatTag = styled.span`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.6rem;
  border-radius: ${t.r.full};
  background: ${t.c.inverse}dd;
  color: ${t.c.inverseInk};
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  backdrop-filter: blur(6px);
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
              <InstagramOutlined aria-hidden />
              Visit @skill_synergy_
            </ExtBtn>
          }
        />

        <Grid $min="260px">
          {feed.map((item) => (
            <FeedCard key={item.id} $tone="lowest" $shadow="soft">
              <MediaWrap>
                <Media kind={item.kind} ratio="4/3" label={item.format} hint={false} />
                <FormatTag>
                  {item.kind === "video" ? <PlayCircleOutlined aria-hidden /> : <AppstoreOutlined aria-hidden />}
                  {item.format}
                </FormatTag>
              </MediaWrap>
              <FeedBody>
                <Category>{item.category}</Category>
                <h4>{item.title}</h4>
                <Muted>{item.text}</Muted>
                <FeedFoot>
                  <span>
                    <span>
                      <HeartOutlined aria-hidden />
                      {item.likes}
                    </span>
                    <span>
                      <CommentOutlined aria-hidden />
                      {item.comments}
                    </span>
                  </span>
                  <a href="https://www.instagram.com/skill_synergy_/" target="_blank" rel="noopener noreferrer">
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
              <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
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
