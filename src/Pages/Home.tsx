import React from 'react'

// Dependencias

import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'

// img

import RR from '../assets/2022.jpg'

const Section = styled.section`
  width: 100%;
  height: 100vh;
  color: #ffffff;
  background-image: url(${RR});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: -3;
  @media (max-width: 550px){
    background-position: 35%;
  }
`;

const Container = styled.div`
  margin-top: 25vh;
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  h1{
    text-transform: uppercase;
    font-size: 80px;
    font-weight: 300;
    text-align: center;
  }
  @media (max-width: 550px){
    height: 250px;
  }
`;

const Button = styled.button`
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
    font-size: 15px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    overflow: hidden
    }
    
`;

const home = () => {

  return (

    <>

      <Section as={motion.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >

        <Container>

            <motion.h1
              initial={{ opacity: 0, x: '-100vh' }}
              animate={{  opacity: 1, x: 0 }}
              whileHover={{ scale: 1.2 }}
              >
            Rolls-Royce
            </motion.h1>

            <Button to='Show' as={motion(Link)}
              initial={{ opacity: 0, x: '100vh' }}
              animate={{  opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              
              >

              <motion.p
                whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(0,0,0)' }}
              >
                veja mais!
              </motion.p>

            </Button>
  
        </Container>

      </Section>

    </>
  )
}

export default home