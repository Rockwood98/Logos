import styled, { css } from "styled-components";

const types = {
  primary: css`
    font-size: 1.8rem;
    color: var(--color-text-01);
    font-family: inherit;
    text-align: justify;
  `,
  secondary: css`
    font-size: 1.6rem;
    color: var(--color-text-01);
    font-family: inherit;
    text-align: justify;
  `,
};

const Text = styled.p`
  ${(props) => types[props.$type]}
`;
Text.defaultProps = {
  $type: "primary",
};

export default Text;
