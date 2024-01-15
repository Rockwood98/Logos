import styled, { css } from "styled-components";

const types = {
  default: css`
    margin: 0;
  `,
  bottom: css`
    margin-bottom: 4.8rem;
  `,
  bottomSm: css`
    margin-bottom: 2.4rem;
  `,
};

const Margin = styled.div`
  ${(props) => types[props.$type]}
`;
Margin.defaultProps = {
  $type: "default",
};
export default Margin;
