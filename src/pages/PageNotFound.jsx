import styled from "styled-components";
import Container from "../components/Container";
import ContentBox from "../components/ContentBox";
import Text from "../ui/TextSize";
import High from "../ui/High";
import Button from "../ui/Button";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useMoveBack } from "../hooks/useMoveBack";

const Warning = styled.p`
  font-size: 5rem;
  margin: 0 auto;
`;
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: 4.8rem;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  opacity: 0.5;
`;
const Box = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 1fr 8rem;
  align-items: center;
  justify-items: start;
`;

function PageNotFound() {
  return (
    <Container>
      <ContentGrid position="center">
        <Box>
          <Img src="../public/logo-webp.png"></Img>
          <Warning>404</Warning>
        </Box>
        <Box>
          <Text>
            <High>Przepraszamy</High>, ale wygląda na to, że strona, której
            szukasz, nie istnieje lub została przeniesiona. Możliwe, że adres
            URL został wpisany błędnie lub strona została usunięta. Zachęcamy do
            sprawdzenia poprawności adresu lub skorzystania z poniższego
            przycisku w celu powrotu do poprzedniej strony.
          </Text>
          <Button type="back" onClick={useMoveBack()}>
            <HiArrowLongLeft />
            Wróć do poprzedniej strony
          </Button>
        </Box>
      </ContentGrid>
    </Container>
  );
}

export default PageNotFound;
