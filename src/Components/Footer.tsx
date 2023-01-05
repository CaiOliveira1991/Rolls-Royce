import React from 'react'

// Dependencias

import {motion} from 'framer-motion'
import styled from 'styled-components'

// Img

import Logo from '../assets/logo.png'

const Footeer = styled.footer`
  margin-bottom: 2vh;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-top: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circletwo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoFooter = styled.div`
  position: absolute;
  width: 70px;
  filter: invert(1);
`;

const Footer = () => {
  return (
    <>
      <Footeer as={motion.div}
        initial={{ y: '100vh' }}
        animate={{  y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Circle as={motion.div}
          animate={{ rotate: 720 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        >
          <Circletwo as={motion.div}
          animate={{ rotate: -1440 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        >
            
          </Circletwo>
        </Circle>
        <LogoFooter>
              <img src={Logo} alt='logo'/>
            </LogoFooter>
      </Footeer>
    </>
  )
}

export default Footer