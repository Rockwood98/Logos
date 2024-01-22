import styled from "styled-components";
import Container from "../components/Container";
import ContentBox from "../components/ContentBox";
import High from "../ui/High";
import Heading from "../ui/Headings";
import Text from "../ui/TextSize";

const ProfileImg = styled.img`
  height: 16rem;
  width: auto;
  border-radius: 50%;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`;

function About() {
  return (
    <Container>
      <ContentBox $position="center">
        <ProfileImg src="../public/me.webp"></ProfileImg>
        <Heading>Cześć jestem Zofia!</Heading>
        <Text>
          <High>Logopedia</High> to moja pasja, którą połączyłam z pracą
          zawodową. Doświadczenie zdobywałam pracując w różnych placówkach
          oświatowych i w służbie zdrowia. Pracę zawodową rozpoczęłam i nadal
          kontynuuję w Poradni Psychologiczno – Pedagogicznej.
        </Text>

        <Heading $type="secondary" $position="left">
          O mnie:
        </Heading>
        <Text>
          Pracowałam w Specjalnym Ośrodku Szkolno - Wychowawczym, prowadziłam
          przez kilka lat Poradnię Logopedyczną w ramach NFZ, obejmując pomocą
          logopedyczną dzieci, młodzież i dorosłych. Współpracuję ze żłobkiem,
          przedszkolami i szkołami na terenie powiatu opatowskiego. Prowadzę
          również współpracę z lekarzami z zakresu ortodoncji, chirurgii,
          audiologii, foniatrii, fizjoterapeutami oraz terapeutami Integracji
          Sensorycznej, itp.
        </Text>
      </ContentBox>
    </Container>
  );
}

export default About;
