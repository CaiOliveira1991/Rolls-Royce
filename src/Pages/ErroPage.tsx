import React from 'react'

// Dependencias

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import styled from 'styled-components'

// Img

import erro from '../assets/404.webp'

const ContainerErro = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${erro});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items : center;
`;

const TitleContainer = styled.div`
  margin-top: 10vh;
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  h1{
    color: white;
    text-transform: uppercase;
    font-size: 200px;
    font-weight: 300;
    text-align: center;
  }
`;

const Return = styled(Link)`
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
  p{
    width: 100%;
    height: 100%;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    overflow: hidden
    }
`;

const ErroPage = () => {
  return (
    
    <ContainerErro as={motion.section}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >

      <TitleContainer>
        <motion.h1
        initial={{ opacity: 0, x: '-100vh' }}
        animate={{  opacity: 1, x: 0 }}
        whileHover={{ scale: 1.2 }}
        >404</motion.h1>

        <Return to='/'  as={motion(Link)}
              initial={{ opacity: 0, x: '100vh' }}
              animate={{  opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
        >
          <motion.p
          whileHover={{ 
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(0,0,0)' }}
          >
          Retorno</motion.p>
        </Return>

      </TitleContainer>

    </ContainerErro>

  )
}

export default ErroPage