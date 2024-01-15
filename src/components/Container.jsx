import styled from "styled-components";

const ContainerSection = styled.section`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  margin: 0 auto;
  padding: 9.6rem 0;
`;
function Container({ children }) {
  return <ContainerSection>{children}</ContainerSection>;
}

export default Container;
