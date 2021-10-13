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
  }
`;