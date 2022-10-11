import  { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* Variables */
:root {

  /* Colors */
  --color-white: hsl(0, 0%, 100%);
  --color-black: hsl(270, 3%, 11%);
  --color-light-grey: hsl(210, 17%, 95%);
  --color-dark-grey: hsl(264, 5%, 20%);
  --color-light-peach: hsl(11, 100%, 80%);
  --color-peach: hsl(11, 73%, 66%);

  /* Font-size */
  --font-size-0_5: .5rem;
  --font-size-1: 1rem;
  --font-size-1_25: 1.25rem;
  --font-size-1_5: 1.5rem;
  --font-size-2_5: 2.5rem;
  --font-size-3: 3rem;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  padding: 2rem 0;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Jost', sans-serif;
  overflow-x: hidden;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

a {
  text-decoration: none;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`