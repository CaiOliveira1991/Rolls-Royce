import React from 'react'

// Dependencias

import styled, {keyframes} from 'styled-components'

const line = keyframes`
    0% {
        transform-origin: 50% 100%;
        transform: scaleY(1);
    }
    50% {
        transform-origin: 50% 100%;
        transform: scaleY(0);
    }
    50.0001% {
        transform-origin: 50% 0;
        transform: scaleY(0);
    }
    to {
        transform-origin: 50% 0;
        transform: scaleY(1);
    }
`;

const Scroll = styled.div`
    display: block;
    width: 2px;
    height: 13vh;
    position: absolute;
    bottom: 0;
    left: 10%;
    transform:translateX(-50%);
    opacity: 1;
    &::before {
        height: 100%;
        background: #ffffff;
        opacity:.2;
        left: 0;
        top: 0;
        bottom: 0;
        content: '';
        position: absolute;
        width: 2px;
    }
    &::after {
        background: #ffffff;
        left: 0;
        top: 0;
        content: '';
        position: absolute;
        width: 2px; 
        height:100%;
        animation: ${line} 2s linear infinite
    }
`;



const linescroll = () => {
  return (
    <Scroll></Scroll>
  )
}

export default linescroll