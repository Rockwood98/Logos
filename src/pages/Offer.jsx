import styled from "styled-components";
import Container from "../components/Container";
import ContentBox from "../components/ContentBox";
import Heading from "../ui/Headings";
import Margin from "../ui/Margin";
import Modal from "../components/Modal";
import Text from "../ui/TextSize";

const List = styled.ul`
  list-style: disc;
  padding: 0.5rem 4.4rem;
`;
const ListEl = styled.li`
  padding: 0.5rem 0;
  font-size: 1.8rem;
`;

function Offer() {
  return (
    <Container>
      <ContentBox>
        {/* <Margin type="bottom"></Margin> */}
        <Heading $position="center">
          Profesjonalna Terapia Logopedyczna Dla Dzieci i Dorosłych
        </Heading>
        <Text>
          Profesjonalna terapia logopedyczna dla dzieci i dorosłych stanowi
          kompleksowe podejście do poprawy umiejętności komunikacyjnych. Dzięki
          zastosowaniu nowoczesnych metod i narzędzi terapeutycznych, skupiam
          się nie tylko na eliminowaniu trudności w mowie, ale również na
          rozwijaniu szerokich umiejętności komunikacyjnych. Moja oferta
          obejmuje zarówno terapię dla dzieci z opóźnieniem mowy, jak i dla
          dorosłych z różnymi zaburzeniami komunikacyjnymi, zapewniając wsparcie
          na każdym etapie życia. Zaufaj nam, abyśmy mogli wspólnie odkryć
          potencjał mowy i uczynić komunikację łatwiejszą dla każdego pacjenta.
        </Text>
      </ContentBox>
      <Margin $type="bottom" />
      <Modal />
    </Container>
  );
}

export default Offer;
