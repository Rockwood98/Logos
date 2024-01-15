import styled, { css } from "styled-components";

const types = {
  primary: css`
    font-size: 2.8rem;
    color: var(--color-primary-01);
    font-family: "Candal", sans-serif;
    padding-bottom: 1rem;
  `,
  secondary: css`
    font-size: 1.8rem;
    color: var(--color-text-01);
    font-family: "Poppins", sans-serif;
    text-align: left;
    padding: 1.2rem 0;
  `,
  secondaryPlus: css`
    font-size: 2rem;
    color: var(--color-text-01);
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    text-align: center;
    padding: 2.2rem 2.2rem;
  `,
};
const positions = {
  default: css`
    text-align: unset;
  `,

  center: css`
    text-align: center;
    align-self: center;
  `,
  left: css`
    text-align: left;
    align-self: flex-start;
  `,
};

const Heading = styled.h1`
  ${(props) => types[props.$type]}
  ${(props) => positions[props.$position]}
`;
Heading.defaultProps = {
  $type: "primary",
  $positon: "default",
};

export default Heading;
