import styled from "styled-components";
import { string } from 'prop-types';

export const Button = styled.button`
    background: #e90315;
    color: #fff;
    border: none;
    border-radius: 0;
    font-size: 1.75em;
    padding: 10px 20px;
    font-family: 'Futura Display', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;
    &:hover {
        background: #c90414;
        animation: glow 800ms ease-out infinite alternate;
    }

    @keyframes glow {
    0% {
		border-color: #44b1a4;
		box-shadow: 0 0 10px #35a093, inset 0 0 10px #196b61;
    }	
    100% {
		border-color: #5cd8ca;
		box-shadow: 0 0 25px #00ffe1, inset 0 0 15px #00f3d7;
    }
}
`;

Button.propTypes = {
    children: string
};
