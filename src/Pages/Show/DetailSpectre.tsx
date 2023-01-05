import React from 'react'

// Dependencias

import styled from 'styled-components'
import {motion} from 'framer-motion'

// Img

import Spectrefront from '../../assets/intSpectre.jpg'

const SpectreDiv = styled.section`
  width: 100%;
  height: auto;
  background: black;
  overflow: hidden;
`;

const FrontSpectre = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Spectrefront});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px){
    background-position: 35%;
  }
  h1{
    width: 80%;
    text-align: center;
    font-size: 80px;
    font-weight: 300;
    color: #ffffff;
    @media (max-width: 550px){
      font-size: 60px;
  }
  }
`;

const Button = styled.button`
  margin-top: 50px;
  width: 300px;
  height: 50px;
  cursor: pointer;
  color: black;
  border: 1px solid black;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: rgb(11, 231, 251);
  }
  a{
    width: 100%;
    height: 100%;
    color: black;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    overflow: hidden
    }
`;

const DetailSpectre = () => {

  return (
    
    <SpectreDiv as={motion.section}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
      <FrontSpectre >

        <motion.h1
          initial={{ opacity: 0, x: '-100vh' }}
          animate={{  opacity: 1, x: 0 }}
          whileHover={{ scale: 1.2 }}

        >Spectre</motion.h1>

        <Button as={motion.button}
          initial={{ opacity: 0, x: '100vh' }}
          animate={{  opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          >

          <motion.a
            href='#' target='_blank'
            whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(0,0,0)' }}
            >
              Ficha Tecnica!
          </motion.a>

        </Button>

      </FrontSpectre>
    </SpectreDiv>

  )
}

export default DetailSpectre