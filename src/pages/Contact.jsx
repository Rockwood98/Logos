import styled from "styled-components";
import Container from "../components/Container";
import Heading from "../ui/Headings";
import Text from "../ui/TextSize";
import High from "../ui/High";
import { HiHome, HiMiniEnvelope, HiPhone } from "react-icons/hi2";

const ContactBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: var(--color-bg-01);
  padding: 1.2rem 2.2rem;
`;
const Map = styled.iframe`
  border: none;
  width: 500px;
  height: 350px;
  allowfullscreen: "";
`;
const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 1.2rem;
`;
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2.2rem;
  & .icon {
    font-size: 2.8rem;
    color: var(--color-primary-01-BLUE9);
  }
`;

function Contact() {
  return (
    <Container>
      <ContactBox>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.604689305332!2d21.42762942686674!3d50.801434312029826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722a9ceea532e6d%3A0x6129aaaba64fa8f8!2sGabinet%20logopedyczny%20%22Logos%22%20Zofia%20Charemska!5e0!3m2!1spl!2spl!4v1705327923935!5m2!1spl!2spl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></Map>
        <ContactData>
          <Heading $position="center">Dane kontaktowe:</Heading>
          <ContactDetails>
            <Text $type="big">
              <HiPhone className="icon" /> <High>+48 607-385-031</High>
            </Text>
            <Text $type="big">
              <HiMiniEnvelope className="icon" />
              <High>logos.opatow@gmail.com</High>
            </Text>
            <Text $type="big">
              <HiHome className="icon" />
              <High>Ul. Sienkiewicza 38 27-500, Opatów</High>
            </Text>
          </ContactDetails>
        </ContactData>
      </ContactBox>
    </Container>
  );
}

export default Contact;
