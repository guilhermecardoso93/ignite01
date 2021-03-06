import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-purple: #5429cc;
  --color-green: #33cc95;
  --color-red: #e62e4d;
  --color-blue-light: #6933ff;
  --color-shape: #ffffff;
  --color-titles: #363f5f;
  --color-texts: #969cb3;
  --color-background: #f0f2f5;
}

* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

// font-size:16px(Desktop)
html{
  @media (max-width:1080px){
    font-size: 93.75%;
  }

  @media (max-width:720px){
    font-size: 87.5%;
  }

   body, input, textarea, button {
     font-family: "Poppins", sans-serif;
     font-weight: 400;
   }

   h1, h2, h3, h4, h5, h6, strong {
     font-weight:600;
   }

  button {
    cursor:pointer;
  }

  [disable]{
    opacity: 0.6;
    cursor: not-not-allowed;
  }
}

body {
  background:var(--color-background);
  --web-font-smoothing: antialised;
}

.react-modal-overlay{
  background: rgba(0,0,0,0.5);

  position:fixed;
  top:0;
  bottom:0;
  right:0;
  left:0;

  display:flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  width:100%;
  max-width:576px;
  background:var(--color-background);
  padding:3rem;
  position:relative;
  border-radius:0.24rem;
}

.react-modal-close{
  position:absolute;
  right:1.5rem;
  top:1.5rem;
  border:0;
  background:transparent;

  transition: filter 0.2s;
  &:hover{
    filter:brightness(0.8)
  }
}

`;
