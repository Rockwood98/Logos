import styled from "styled-components";

const B = styled.strong`
  font-weight: 700;
`;
function High({ children }) {
  return <B>{children}</B>;
}

export default High;
