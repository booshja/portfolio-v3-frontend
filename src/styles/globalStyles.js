// dependencies
import { createGlobalStyle } from "styled-components";
// breakpoints
// import { breakpoints } from "./breakpoints";

const GlobalStyle = createGlobalStyle`
html, body, div, span, object, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big,del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, b, u, i, dl, dt, dd, ol, ul, li,
form, label, article, aside, details,footer, header, menu, main, nav, output,
section, summary, time {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    /* font-size changed to 62.5% so rem units use font-size of 10 for 1rem */
    font-size: 62.5%;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
}
p, a, button {
    font-family: Sen, sans-serif;
}
h1, h2, h3, h4, h5, h6 {
    font-family: Poppins, sans-serif;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
ol, ul, nav {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
a {
    text-decoration: none;
    color: inherit;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
input, select {
    vertical-align: middle;
}
.hidden {
    display: none;
}
#root {
    width: 100%;
}
`;

export default GlobalStyle;
