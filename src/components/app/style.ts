import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*, html {
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
}
body {
    position: relative;
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSizeDefault};
    line-height: ${props => props.theme.lineHeightDefault};
    font-weight: 400;
    background-color: #222222;
}
`;
