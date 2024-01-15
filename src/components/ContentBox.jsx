import styled, { css } from "styled-components";

const positions = {
  default: css`
    align-items: stretch;
    justify-content: flex-start;
  `,
  center: css`
    justify-content: center;
    align-items: center;
  `,
  left: css`
    align-items: flex-start;
    justify-content: flex-start;
  `,
};
const variations = {
  default: css`
    gap: 2rem;
    padding: 1.2rem 3.2rem;
    background-color: var(--color-bg-01);
  `,
  colorBlue: css`
    gap: 0;
    padding: 1.2rem 2.2rem 2.2rem 2.2rem;
    background-color: var(--color-primary-01-BLUE2);
    border-radius: 15px;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  `,
  colorRed: css`
    gap: 0;
    padding: 1.2rem 2.2rem 2.2rem 2.2rem;
    background-color: var(--color-primary-02-RED2);
    border-radius: 15px;
    transition: transform 0.3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  `,
};

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => positions[props.$position]}
  ${(props) => variations[props.$variation]}
`;
ContentBox.defaultProps = {
  $position: "default",
  $variation: "default",
};

export default ContentBox;
