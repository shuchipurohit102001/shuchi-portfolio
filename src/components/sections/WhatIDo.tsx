import { Card, Container, Grid, H2, Head, Muted, Section } from "@/components/ui/ui";
import { offerings, person } from "@/data/content";

const WhatIDo = () => {
  return (
    <Section $tone="low">
      <Container>
        <Head>
          <H2>What I do</H2>
          <Muted>Soft skills and communication coaching, backed by day-to-day experience selling software.</Muted>
        </Head>
        <Grid $min="220px">
          {offerings.map((o) => (
            <Card key={o.v}>
              <h3>{o.title}</h3>
              <Muted>{o.text}</Muted>
            </Card>
          ))}
        </Grid>
        <p style={{ marginTop: 24, maxWidth: "62ch" }}>
          <strong>Vision.</strong> {person.vision}
        </p>
      </Container>
    </Section>
  );
};

export default WhatIDo;
