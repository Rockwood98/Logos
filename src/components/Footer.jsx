import styled from "styled-components";
import Logo from "./Logo";
import Container from "./Container";
import { Link } from "react-router-dom";
import { HiEnvelope, HiMap, HiMiniPhone } from "react-icons/hi2";

const FooterBar = styled.footer`
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-primary-01-BLUE9);
`;
const Copy = styled.p`
  text-align: center;
  color: var(--color-text-02);
  margin-top: auto;
  padding-bottom: 1.2rem;
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const BoxEl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1.8rem;
  align-items: flex-start;
  color: var(--color-text-03);
`;
const BoxElEnd = styled(BoxEl)`
  align-items: flex-end;
`;
const El = styled.p`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 2.2rem;
`;
const ElLink = styled(Link)`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 2.2rem;
  text-decoration: underline;
`;

function Footer() {
  return (
    <FooterBar>
      <Container>
        <Box>
          <BoxEl>
            <Logo />
            <p>Gabinet Logopedyczny "Logos" </p>
            <p>Ul. Sienkiewicza 38</p>
            <p>27-500, Opatów</p>
          </BoxEl>

          <BoxElEnd>
            <div>
              <El>
                <HiMiniPhone className="icon" />
                <span>+48 607-385-031</span>
              </El>
              <El>
                <HiEnvelope className="icon" />
                <span>logos.opatow@gmail.com</span>
              </El>

              <ElLink to="https://maps.app.goo.gl/dLgc4pqmnU28KHsg9">
                <HiMap className="icon" />
                <span>Mapa dojazdu</span>
              </ElLink>
            </div>
          </BoxElEnd>
        </Box>
      </Container>
      <Copy>Copyright © logopedaopatow.pl | Created by rockwood98</Copy>
    </FooterBar>
  );
}

export default Footer;
