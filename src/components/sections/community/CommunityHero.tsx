"use client";
import {
  Avatar,
  Container,
  DefaultBrand,
  Dot,
  ExtBtn,
  Glow,
  H1,
  InstagramBrand,
  Lead,
  Metric,
  MetricStrip,
  MetricStripInner,
  Panel,
  Pill,
  Row,
  Split,
  WhatsappBrand,
} from "@/components/ui/ui";
import { communityMetrics, communityPanelPoints, person, ventures } from "@/data/content";
import { t } from "@/providers/tokens";
import {
  BookOpenIcon,
  ChatCircleDotsIcon,
  HeadphonesIcon,
  StarIcon,
  UserCircleIcon,
  UserIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import styled from "styled-components";

const HeroShell = styled.section`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: ${t.s.xl} 0 ${t.s.xxl};
  @media (min-width: ${t.bp.desktop}) {
    padding: ${t.s.xxl} 0 ${t.s.xxxl};
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
`;

const Copy = styled.div`
  display: grid;
  gap: ${t.s.md};
`;

const Accent = styled.em`
  color: ${t.c.secondary};
  font-style: italic;
  font-weight: 600;
`;

const HeroPanel = styled(Panel)`
  h3 {
    font-size: 1rem;
  }
`;

const FounderRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${t.s.md};
  padding: ${t.s.md};
  margin-bottom: ${t.s.lg};
  border-radius: ${t.r.md};
  background: ${t.c.low};
  > div strong {
    display: block;
    font-size: 0.98rem;
    color: ${t.c.ink};
  }
  > div span {
    display: block;
    font-size: 0.78rem;
    line-height: 1.5;
    color: ${t.c.inkVar};
  }
  > div em {
    color: ${t.c.secondary};
    font-style: normal;
    font-weight: 600;
  }
`;

const Points = styled.div`
  display: grid;
  gap: ${t.s.md};
`;

const Point = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${t.s.md};
  svg {
    flex: none;
    margin-top: 0.15rem;
    font-size: 1.05rem;
    color: ${t.c.secondary};
  }
  strong {
    display: block;
    font-size: 0.9rem;
    line-height: 1.4;
    color: ${t.c.ink};
  }
  span {
    display: block;
    font-size: 0.78rem;
    line-height: 1.5;
    color: ${t.c.inkVar};
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${t.s.md};
  margin-top: ${t.s.lg};
  padding: ${t.s.sm} ${t.s.md};
  border-radius: ${t.r.md};
  background: ${t.c.low};
  span {
    color: ${t.c.inkVar};
    font-size: 0.76rem;
  }
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  color: ${t.c.secondary};
  font-size: 0.85rem;
  small {
    margin-left: 0.35rem;
    color: ${t.c.ink};
    font-size: 0.78rem;
    font-weight: 600;
  }
`;

const pointIcons: Record<string, ReactNode> = {
  groups: <DefaultBrand icon={UsersThreeIcon} size={20} aria-hidden />,
  masterclass: <DefaultBrand icon={BookOpenIcon} size={20} aria-hidden />,
  support: <DefaultBrand icon={HeadphonesIcon} size={20} aria-hidden />,
  "one-to-one": <DefaultBrand icon={UserIcon} size={20} aria-hidden />,
};

const metricIcons: Record<string, ReactNode> = {
  "Active cohorts": <DefaultBrand icon={UsersThreeIcon} size={20} aria-hidden />,
  "18 posts and reels from live sessions": <InstagramBrand size={20} aria-hidden />,
  "Dedicated WhatsApp & DM": <DefaultBrand icon={ChatCircleDotsIcon} size={20} aria-hidden />,
  "Customised 1:1 guidance": <DefaultBrand icon={UserCircleIcon} size={20} aria-hidden />,
};

const CommunityHero = () => {
  return (
    <>
      <HeroShell>
        <Glow $tone="clay" style={{ width: "24rem", height: "24rem", top: "-10rem", right: "2rem" }} />
        <Glow $tone="high" style={{ width: "20rem", height: "20rem", top: "26rem", left: "-5rem" }} />
        <Inner>
          <Container>
            <Split>
              <Copy>
                <Pill $tone="cont" $wrap>
                  <Dot />
                  Curated by {person.name}
                  <span aria-hidden>•</span>
                  <span style={{ color: t.c.secondary }}>@skill_synergy_</span>
                </Pill>

                <H1>
                  Skills Synergy <Accent>Community</Accent>
                </H1>

                <Lead>
                  A premier hub for leadership, presence, and personal branding. Through expert corporate grooming, soft
                  skills training, and 1:1 coaching, we empower professionals to elevate their personality and unlock
                  their full potential.
                </Lead>

                <Row>
                  <ExtBtn
                    href={`https://wa.me/${person.wa}?text=${encodeURIComponent(
                      "Hi Shuchi, I'd like to join the Skills Synergy community.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsappBrand size={30} aria-hidden />
                    Reach out via WhatsApp
                  </ExtBtn>
                  <ExtBtn
                    href="https://www.instagram.com/skill_synergy_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    $v="ghost"
                  >
                    <Avatar $src={ventures[0].src} $size={30} aria-hidden />
                    Follow on <Accent>Instagram</Accent>
                  </ExtBtn>
                </Row>
              </Copy>

              <HeroPanel $tone="lowest" $pad="lg" $shadow="lift">
                <FounderRow>
                  <Avatar $size={64} $src="/profilePhoto.png" />

                  <div>
                    <strong>{person.name}</strong>
                    <span>
                      <em>Founder &amp; lead facilitator</em>
                    </span>
                    <span>Skills Synergy platform</span>
                  </div>
                </FounderRow>

                <Points>
                  {communityPanelPoints.map((point) => (
                    <Point key={point.id}>
                      {pointIcons[point.id]}
                      <div>
                        <strong>{point.title}</strong>
                        <span>{point.text}</span>
                      </div>
                    </Point>
                  ))}
                </Points>

                <Rating>
                  <span>Community rating</span>
                  <Stars>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <DefaultBrand icon={StarIcon} key={i} size={20} weight="fill" aria-hidden />
                    ))}
                    <small>4.9 / 5</small>
                  </Stars>
                </Rating>
              </HeroPanel>
            </Split>
          </Container>
        </Inner>
      </HeroShell>

      <MetricStrip>
        <Container>
          <MetricStripInner>
            {communityMetrics.map((item) => (
              <Metric key={item}>
                {metricIcons[item]}
                {item}
              </Metric>
            ))}
          </MetricStripInner>
        </Container>
      </MetricStrip>
    </>
  );
};

export default CommunityHero;
