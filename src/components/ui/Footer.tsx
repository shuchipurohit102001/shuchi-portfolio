"use client";
import { person, ventures } from "@/data/content";
import { t } from "@/providers/tokens";
import styled from "styled-components";
import { Container } from "./ui";

const F = styled.footer`
  background: ${t.c.low};
  padding: ${t.s.xl} 0;
  margin-top: ${t.s.xl};
  font-size: 0.9rem;
  color: ${t.c.inkVar};
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t.s.md};
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    font-weight: 600;
    color: ${t.c.ink};
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default function Footer() {
  return (
    <F>
      <Container>
        <Row>
          <span>
            © {new Date().getFullYear()} {person.name}
          </span>
          <Row style={{ gap: 16 }}>
            {ventures.map((v) => (
              <a key={v.handle} href={v.url} target="_blank" rel="noopener noreferrer">
                @{v.handle}
              </a>
            ))}
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Row>
        </Row>
      </Container>
    </F>
  );
}
