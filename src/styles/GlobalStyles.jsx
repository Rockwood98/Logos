import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    
    --color-bg-01: #fff;
    --color-bg-02: #F9FAFB;
    --color-bg-03: #ededed;

    --color-primary-01: #339af0;
    /* Color Primary Shades: */
    --color-primary-01-BLUE0:#e7f5ff;
    --color-primary-01-BLUE1:#d0ebff;
    --color-primary-01-BLUE2:#a5d8ff;
    --color-primary-01-BLUE3:#74c0fc;
    --color-primary-01-BLUE4:#4dabf7;
    --color-primary-01-BLUE6:#228be6;
    --color-primary-01-BLUE7:#1c7ed6;
    --color-primary-01-BLUE8:#1971c2;
    --color-primary-01-BLUE9:#1864AB;

    --color-primary-02: #FF6B6B;
       /* Color Primary Shades: */
    --color-primary-02-RED0:#fff5f5;
    --color-primary-02-RED1:#ffe3e3;
    --color-primary-02-RED2:#ffc9c9;
    --color-primary-02-RED3:#ffa8a8;
    --color-primary-02-RED4:#ff8787;
    --color-primary-02-RED6:#fa5252;
    --color-primary-02-RED7:#f03e3e;
    --color-primary-02-RED8:#e03131;
    --color-primary-02-RED9:#c92a2a;

    --color-text-01:#555555;
    --color-text-02:#888888;
    --color-text-03:#fff;
    --color-text-04:#aaa;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  font-size: 62.5%;
}
body {
  font-family: "Poppins", sans-serif;
  color: var(--color-text-01);
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  background-color: var(--color-bg-02);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}
button {
  cursor: pointer;
}
*:disabled {
  cursor: not-allowed;
}
input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var( --color-primary-01-BLUE0);
  outline-offset: -1px;
}
a {
  color: inherit;
  text-decoration: none;
}


ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}


img {
  max-width: 100%; 
}

/* Headings */

.heading-primary {
  font-size: 2.8rem;
  color: var(--color-primary-01);
  font-family: "Candal", sans-serif; 
  padding-bottom: 1rem;
}
.heading-secondary {
  font-size: 2rem;
  color: var(--color-text-01);
  font-family: "Poppins", sans-serif; 
  text-align: left;
  
}
.text-primary {
  font-size: 1.8rem;
  color: var(--color-text-01);
  font-family: inherit; 
  text-align: justify;
}
.icon {
  font-size: 2.8rem;;
}



`;

export default GlobalStyles;
