import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    @media (${theme.sizes.desktop}) {
      max-width: 1230px;
    }
    width: 100%;
    max-width: 100%;
    margin-inline: auto;
  `}
`;

export default Container;
