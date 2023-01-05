import React from 'react'

// Dependencias

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import styled from 'styled-components'

// Img

import RR2 from '../assets/2022.1.jpg'
import Cullinan from '../assets/culinan.jpg'
import Spectre from '../assets/spectre.jpg'

const SectionShow = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0;
  background-image: url(${RR2});
  background-position: center;
  background-repeat:no-repeat ;
  background-origin: border-box;
  background-size: cover;
  overflow: hidden;
  @media (max-width: 550px){
    background-position: 35%;
  }
`;

const ContainerShow = styled.div`
  width: 100%;
  height: 100vh;
  padding: 12vh 2vh 12vh 2vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 550px){
    flex-direction: column;
    flex-wrap: no-wrap;
  }
`;

const Card = styled(Link)`
  width: 40%;
  height: 80%;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: opacity(0.9);
  @media (max-width: 550px){
    width: 70%;
    height: 40%
  }
  &:nth-child(1){
    background-image: url(${Cullinan});
    background-position: center;
    background-size: cover
  }
  &:nth-child(2){
    background-image: url(${Spectre});
    background-position: center;
    background-size: cover;
  }
  h1{
    font-weight: 500;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    color: #ffffff;
  }
`;

const Show = () => {

  return (
    <>
    
      <SectionShow as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >

        <ContainerShow>
          
        <Card to='/Cullinan/ApresentationCullinan' as={motion(Link)}
              initial={{ opacity: 0, x: '-100vh' }}
              animate={{  opacity: 1, x: 0 }}
              whileHover={{ scale: 1.2,
              boxShadow: '0px 0px 10px black'
            }}
              >

            <motion.h1
            whileHover={{ scale: 1.2 }}>Cullinan</motion.h1>

          </Card>

          <Card to='/Spectre/ApresentationSpectre' as={motion(Link)}
              initial={{ opacity: 0, x: '100vh' }}
              animate={{  opacity: 1, x: 0 }}
              whileHover={{ scale: 1.2,
                boxShadow: '0px 0px 10px black' }}
              >

            <motion.h1
            whileHover={{ scale: 1.2 }}>Spectre</motion.h1>

          </Card>

        </ContainerShow>

      </SectionShow>

    </>
  )
}

export default Show
