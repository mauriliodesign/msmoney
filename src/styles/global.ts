import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --color-primary: #2ace9a;
        --color-primary-dark: #1CB484;
        --color-secondary: #065bbe;
        --color-danger: #e52e4d;
        --color-neutral-100: #ffffff;
        --color-neutral-200: #f0f2f5;
        --color-neutral-300: #969cb2;
        --color-neutral-400: #363f5f;
    }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html { 
    font-size: 16px;

      @media (max-width: 1080px) {
          font-size: 93.75%; //15px
      }

      @media (max-width: 720px) {
          font-size: 87.5%; //14px
      }
  }

  body {
    background: var(--color-neutral-200);
    -webkif-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
      cursor: pointer;
  }

  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }
`;
