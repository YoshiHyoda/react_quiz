import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/image.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschmeiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180def, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
  }
`;
