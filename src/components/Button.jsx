import styled, { css } from "styled-components";

const Button = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.fonts.circular};
    border: none;
    cursor: pointer;
    border-radius: 4px;
    text-align: center;
    font-weight: 700;
    line-height: 1.2857;
    letter-spacing: 0.8px;
    font-size: 0.875rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 19px 40px 20px;
    transition: all 0.3s ease-in-out;
    ${({ variant = "ghost" }) =>
      `--color: ${variant === "ghost" ? theme.primary[200] : "white"};
        --bg-color: ${variant === "ghost" ? "white" : theme.primary[200]};

    &:hover {
        box-shadow: 0;
    }
    `}

    width: ${({ fullWidth = false }) => (fullWidth ? "100%" : "auto")};
    background-color: var(--bg-color);
    color: #611f69;var(--color);
    fill: #611f69;var(--color);
    box-shadow: inset 0 0 0 1px var(--color);
  `}
`;

export default Button;
