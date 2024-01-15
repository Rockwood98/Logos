import styled, { css } from "styled-components";

const types = {
  primary: css`
    color: var(--color-text-03);
    background-color: var(--color-primary-01);
    align-self: flex-start;
    &:hover {
      background-color: var(--color-text-03);
      box-shadow: 0px 0px 0px 2px var(--color-primary-01);
      color: var(--color-primary-01);
    }
  `,
  back: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: var(--color-bg-02);
    color: var(--color-text-01);
    &:hover {
      background-color: var(--color-text-01);
      box-shadow: 0px 0px 0px 2px var(--color-text-02);
      color: var(--color-bg-02);
    }
    & svg {
      font-size: 2.4rem;
      color: var(--color-text-01);
      transition: all 0.3s;
    }
    &:hover svg {
      transform: translateX(-25%);
      color: var(--color-bg-02);
    }
  `,
};

const Button = styled.button`
  font-size: 1.4rem;
  align-self: flex-start;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  font-family: inherit;
  text-align: center;
  border: none;
  border-radius: 15px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  ${(props) => types[props.$type]}
`;
Button.defaultProps = {
  $type: "primary",
};
export default Button;
