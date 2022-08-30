import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const CssBaseline = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: Slack-Larsseit;
    font-style: normal;
    font-weight: 400;
    src: local("â˜º"), url(/fonts/larsseit-thin.woff2) format("woff2");
    unicode-range: U+0000-F8FE, U+F900-FFFF;
  }
  @font-face {
    font-display: swap;
    font-family: Slack-Larsseit;
    font-style: italic;
    font-weight: 400;
    src: local("â˜º"), url(/fonts/larsseit-italic.woff2) format("woff2");
    unicode-range: U+0000-F8FE, U+F900-FFFF;
  }
  @font-face {
    font-display: swap;
    font-family: Slack-Larsseit;
    font-style: normal;
    font-weight: 500;
    src: local("â˜º"), url(/fonts/larsseit-regular.woff2) format("woff2");
    unicode-range: U+0000-F8FE, U+F900-FFFF;
  }
  @font-face {
    font-display: swap;
    font-family: Slack-Larsseit;
    font-style: italic;
    font-weight: 300;
    src: local("â˜º"), url(/fonts/larsseit-light-italic.woff2)
        format("woff2");
    unicode-range: U+0000-F8FE, U+F900-FFFF;
  }
  @font-face {
    font-display: swap;
    font-family: Slack-Larsseit;
    font-style: normal;
    font-weight: 700;
    src: local("â˜º"), url(/fonts/larsseit-bold.woff2) format("woff2");
    unicode-range: U+0000-F8FE, U+F900-FFFF;
  }
  @font-face {
    font-display: swap;
    font-family: Slack-Circular-Pro;
    font-style: normal;
    font-weight: 400;
    src: local("â˜º"), url(/fonts/circular-pro-book.woff2) format("woff2");
    unicode-range: U+0000-F8FE, U+F900-FFFF;
  }
  @font-face {
    font-display: swap;
    font-family: Slack-Circular-Pro;
    font-style: normal;
    font-weight: 700;
    src: local("â˜º"), url(/fonts/circular-pro-bold.woff2) format("woff2");
    unicode-range: U+0000-F8FE, U+F900-FFFF;
  }

  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Slack-Circular-Pro, "Helvetica Neue", Helvetica, "Segoe UI", Tahoma, Arial, Sans-Serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #000;
    margin: auto;
  }
  html,body, #root {
    width: 100%;
    height: 100%;
  }
  #root {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export default CssBaseline;
