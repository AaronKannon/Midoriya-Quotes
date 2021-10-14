import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/bg.jpg';
import font from '../../font/FuturaDisplay.ttf';

export const GlobalStyle = createGlobalStyle `
  @font-face {
    font-family: 'Futura Display';
    src: local('Futura Display'), local('FuturaDisplay'), url(${font});
  }

  body {
    background: url(${bgImg}) center no-repeat;
    background-size: cover;
    padding: 0;
    margin: 0;
    font-family: 'Futura Display', serif;
    text-shadow: -1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;
  }
`;