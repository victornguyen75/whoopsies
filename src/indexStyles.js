import { createGlobalStyle } from "styled-components";

export default function GlobalStyle() {
  return createGlobalStyle`
    * {
      font-family: 'PT Sans', sans-serif;
    }
  `;
}
