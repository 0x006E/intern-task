import styled, { css } from "styled-components";

const H1 = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.fonts.base};
    font-size: 64px;
    font-weight: 700;
  `}
`;

export default H1;
