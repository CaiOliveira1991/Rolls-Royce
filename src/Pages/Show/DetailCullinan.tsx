import React from 'react'

// Dependencias

import styled from 'styled-components'
import {motion} from 'framer-motion'

// Img

import CullinanInt from '../../assets/cullinanInt.webp'

const CullinanDiv = styled.section`
  width: 100%;
  height: auto;
  background: black;
  overflow: hidden;
`;

const FrontCullinan = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${CullinanInt});
  background-position: center;
  background-size: cover;
  filter: brightness(0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    width: 80%;
    text-align: center;
    font-size: 80px;
    font-weight: 300;
    color: #ffffff;
    @media (max-width: 550px){
      font-size: 50px;
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

const DetailCullinan = () => {

  return (
    
    <CullinanDiv  as={motion.section}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
      <FrontCullinan >

        <motion.h1
          initial={{ opacity: 0, x: '-100vh' }}
          animate={{  opacity: 1, x: 0 }}
          whileHover={{ scale: 1.2 }}
        >Cullinan</motion.h1>

        <Button as={motion.button}
          initial={{ opacity: 0, x: '100vh' }}
          animate={{  opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          >

          <motion.a
            href='https://rolls-roycemotorcars-apac.com/pdf/Cullinan.pdf' target='_blank'
            whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(0,0,0)' }}
            >
              Ficha Tecnica!
          </motion.a>

        </Button>

      </FrontCullinan>
    </CullinanDiv>

  )
}

export default DetailCullinan