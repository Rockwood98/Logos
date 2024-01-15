import { Link } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  height: 8.2rem;
  width: auto;
`;

function Logo() {
  return (
    <Link to="strona-glowna">
      <Img src="../public/logo.webp" alt="Logo strony logopedycznej Logos" />
    </Link>
  );
}

export default Logo;
