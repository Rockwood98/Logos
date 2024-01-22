import styled from "styled-components";
import High from "../ui/High";
import Container from "../components/Container";
import ContentBox from "../components/ContentBox";
import Heading from "../ui/Headings";
import Text from "../ui/TextSize";
import Button from "../ui/Button";

const BoxReverse = styled.div`
  display: grid;
  grid-template-columns: 1fr 50rem;
`;
const Box2Cols = styled.div`
  display: grid;
  grid-template-columns: 50rem 1fr;
`;

const Box3Cols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
`;
const DescList = styled.ul`
  font-size: 1.8rem;
  color: var(--color-text-01);
  font-family: inherit;
  text-align: justify;
`;

const Img = styled.img`
  width: 100%;
`;
const ListEl = styled.li`
  padding: 1.2rem 0;
`;
function Homepage() {
  return (
    <Container>
      <Box2Cols>
        <Img src="../public/boys-sm.webp" />
        <ContentBox $position="left">
          <Heading>Kiedy odwiedzić logopedę?</Heading>
          <Text>
            Wizyta u logopedy może być wskazana w różnych etapach życia,
            obejmując dzieci, młodzież i osoby starsze. <High>Dla dzieci</High>,
            wizyta u logopedy może być konieczna, gdy pojawiają się opóźnienia w
            rozwoju mowy, trudności w wymowie lub rozumieniu języka. W przypadku
            <High> młodzieży</High>, wizyta u logopedy może być korzystna w
            razie trudności szkolnych związanych z czytaniem, pisaniem lub
            komunikacją społeczną. <High>U osób starszych</High>, zwłaszcza po
            udarze lub w przypadku trudności z połykaniem, logopeda może pomóc w
            rehabilitacji mowy i poprawie funkcji komunikacyjnych.
          </Text>
        </ContentBox>
      </Box2Cols>
      <BoxReverse>
        <ContentBox $position="left">
          <Heading>Logos z greckiego oznacza słowo, mowę, język…</Heading>
          <Text>
            Gabinet Logopedyczny{" "}
            <q>
              <High>Logos</High>
            </q>{" "}
            oferuje usługi diagnostyczne, terapeutyczne oraz profilaktyczne
            nastawione na wszystkie sfery wpływające na rozwój języka. Dzięki
            wieloletniemu doświadczeniu zawodowemu mogę zaproponować Państwu
            kompleksową opiekę logopedyczną.
          </Text>
        </ContentBox>
        <Img src="../public/kids-sm.webp" />
      </BoxReverse>
      <Box3Cols>
        <ContentBox $variation="colorBlue">
          <Heading $type="secondaryPlus">Zakres uslug:</Heading>
          <DescList>
            <ListEl>Terapia karmienia</ListEl>
            <ListEl>Elektrostymulacja</ListEl>
            <ListEl>Terapia miofunkcjonalna</ListEl>
            <ListEl>Terapia logopedyczna</ListEl>
            <ListEl>Elastyczny terapeutyczny taping</ListEl>
          </DescList>
        </ContentBox>
        <ContentBox $variation="colorRed">
          <Heading $type="secondaryPlus">Indywidualne podejście</Heading>
          <Text $type="secondary">
            Pracując jako logopeda, zawsze staram się podejść do każdego
            pacjenta indywidualnie. Rozumiem, że każda osoba ma swoje unikalne
            potrzeby i wyzwania związane z komunikacją. Analizuję dokładnie
            trudności każdego klienta, aby dostosować metody terapeutyczne do
            ich specyficznych umiejętności i sytuacji.
          </Text>
        </ContentBox>
        <ContentBox $variation="colorBlue">
          <Heading $type="secondaryPlus">Wieloletnie doświadczenie</Heading>
          <Text $type="secondary">
            Posiadam bogate wieloletnie doświadczenie w pracy z różnymi grupami
            wiekowymi. Moja praktyka zawodowa obejmuje skuteczne interwencje
            terapeutyczne, dostosowane do specyficznych potrzeb. Wspieram rozwój
            umiejętności językowych oraz poprawiam jakość komunikacji w
            codziennym życiu moich pacjentów.
          </Text>
        </ContentBox>
      </Box3Cols>
      <ContentBox>
        <Heading $position="center">Twoje słowa, moja troska!</Heading>
        <Text>
          Na tej stronie znajdziesz dedykowany poradnik, który pozwoli Ci
          rozwinąć swoją wiedzę aby lepiej zrozumieć i pielęgnować aspekty
          związane z mową i komunikacją.To źródło praktycznych informacji,
          idealne dla każdego, kto chce pogłębić swoją wiedzę. Sprawdź już teraz
          i rozwijaj się razem z nami!
        </Text>

        <Button>Czytaj więcej...</Button>
      </ContentBox>
    </Container>
  );
}

export default Homepage;
