import React, {useState} from 'react'

// Dependencias

import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

// icons

import {AiOutlineClose} from 'react-icons/ai'

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 99;
    div{
        width: 2rem;
        height: 0.25rem;
        background-color:#fbfbfb;
        border-radius: 10px;
        transform-origin: 1px;
        transition: 400ms all ease-in-out;
        &:nth-child(2){
          width: 1.2rem;
        }
     }
     &:hover div:nth-child(1){
      width: 1.2rem;
      background: #00c8ff;
    }
    &:hover div:nth-child(2){
      width: 2rem;
      background: #00c8ff;
    }
    &:hover div:nth-child(3){
      width: 1.2rem;
      background: #00c8ff;
    }
    &::after{
      content: 'MENU';
      position: absolute;
      left: 70px;
      text-transform: uppercase;
      font-weight: 600;
      color: white;
      opacity: 0;
      transition: 400ms all ease-in-out
    }
    &:hover:after{
      transform: translateX(20%);
      opacity: 1;
    }
`;

const Containershow = styled.div`
  position: fixed;
  top: 12vh;
  left: 0;
  width: 30%;
  min-width: 200px;
  height: 500px;
  background-color: #a724a7;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`;

const Close = styled.div`
  width: 100%;
  height: 12vh;
  top: 0;
  left: 0;
  border-radius: 30px 30px 0px 0px;
  background-color: #571186;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    padding: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    }
`;

const ShowRoom = styled.div`
  padding:100px 0px ;
  width: 68vh;
  height: 88%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  ul{
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const NvLink = styled(Link)`
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  z-index: 999;
`;

const Burger = () => {

  const [ clickmenu , setClickmenu ] = useState (false);

  return (

    <>
      <StyledBurger onClick={() => setClickmenu (true)}>
        <div />
        <div />
        <div />
      </StyledBurger>

{/* Container ShowRoom */}

{clickmenu && (


    <Containershow
      as={motion.div}  drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.5}
      whileTap={{ cursor: "grabbing" }}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        easeInOut: [0, 0.71, 0.2, 1.01]
     }}
     >

        <Close>
          <motion.button 
          onClick={() => setClickmenu (false)}
          whileHover= {{ rotate: 180, borderColor: 'white' }}
          transition={{ duration: 0.2 }}
          >
            <AiOutlineClose color={'white'} />
          </motion.button>
        </Close>

        <ShowRoom>
          <ul>

            <NvLink to='/' as={motion(Link)}
              onClick={() => setClickmenu (false)}
              whileHover = {{
                scale: 1.5,
                textShadow: '0px 0px 8px #02b9f6',
                color: '#02b9f6',
              }}
              transition={{ 
                type: 'spring',
                stiffness: 300
             }}
            >Home</NvLink>
            <NvLink to='Show' as={motion(Link)}
              onClick={() => setClickmenu (false)}
              whileHover = {{
                scale: 1.5,
                textShadow: '0px 0px 8px #02b9f6',
                color: '#02b9f6',
              }}
              transition={{ 
                type: 'spring',
                stiffness: 300
             }}
            >ShowRoom</NvLink>
            <NvLink to='Map' as={motion(Link)}
              onClick={() => setClickmenu (false)}
              whileHover = {{
                scale: 1.5,
                textShadow: '0px 0px 8px #02b9f6',
                color: '#02b9f6',
              }}
              animate
              transition={{ 
                type: 'spring',
                stiffness: 300
             }}
            >Localização</NvLink>
            
          </ul>
        </ShowRoom>

      </Containershow>

      )}
    </>

  )
}

export default Burger