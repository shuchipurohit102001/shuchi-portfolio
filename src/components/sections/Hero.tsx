import { Btn, Chip, Container, ExtBtn, H1, Lead, Media, Row, Section, Split } from "@/components/ui/ui";
import { person } from "@/data/content";

const Hero = () => {
  return (
    <Section>
      <Container>
        <Split>
          <div style={{ display: "grid", gap: 24 }}>
            <Chip style={{ width: "fit-content" }}>{person.location}</Chip>
            <H1>{person.headline}</H1>
            <Lead>{person.summary}</Lead>
            <Row>
              <ExtBtn href={`https://wa.me/${person.wa}`} target="_blank" rel="noopener noreferrer">
                Book a 1:1 on WhatsApp
              </ExtBtn>
              <Btn href="/community" $v="ghost">
                Visit Skills Synergy
              </Btn>
            </Row>
          </div>
          <Media ratio="4/5" label="Portrait of Shuchi Purohit" />
        </Split>
      </Container>
    </Section>
  );
};

export default Hero;
