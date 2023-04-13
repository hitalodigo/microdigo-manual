import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Exo 2", sans-serif;
  user-select: none;
}

:root {
  --background: #e5e5e5;
  --red: #ff1450;
  --blue-900: #004bc8;
  --blue: #0078ff;
  --yellow-900: #b88019;
  --yellow-800: #d29422;
  --yellow-600: #fe9700;
  --yellow: #ffbe00;
  --black: #282832;
  --white: #ffffff;
  --gray-50: #d9d9d9;
  --gray-100: #929292;
  --green: #14ae5c;
}

html {
  font-size: 62.5%;
  /* 1rem = 10px*/
}

body {
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--black);
  background-color: var(--white);
}


`