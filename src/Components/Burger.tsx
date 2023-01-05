import React, {useState} from 'react'

// Dependencias

import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

// icons

import {AiOutlineClose} from 'react-icons/ai'

// Img

import Cullinan from '../assets/culinan.jpg'
import Spectre from '../assets/Spectre2023.jpg'

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
  top: 0;
  left: -5%;
  width: 40%;
  min-width: 130px;
  height: 100vh;
  background-color: #a724a7;
  border-radius: 0px 30px 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`;

const ContainershowRoom = styled.div`
  position: fixed;
  margin-left: 5%;
  top: 0;
  width: 30%;
  min-width: 200px;
  height: 100vh;
  border-radius: 0px 30px 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 998;
`;

const Close = styled.div`
  width: 100%;
  height: 12vh;
  top: 0;
  left: 0;
  border-radius: 0px 30px 0px 0px;
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

const CloseRoom = styled.div`
  width: 100%;
  height: 12vh;
  top: 0;
  left: 0;
  border-radius: 0px 30px 0px 0px;
  background-color: #571150;
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
    p{
      width: 100%;
      height: 50px;
      text-transform: uppercase;
      cursor: pointer;
      color: white;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      z-index: 999;
    }
  }
`;

const ShowRoomm = styled.div`
  mergin-top: 12vh;
  width: 100%;
  height: 88%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const NvShow = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  :nth-child(1){
    background-image: url(${Cullinan});
    background-position: center;
    background-size: cover;
  }
  :nth-child(2){
    background-image: url(${Spectre});
    background-position: center;
    background-size: cover;
  }
  &:hover span{
    transform: scale(1.3);
    color: #02b9f6;
    text-shadow: 0px 0px 8px #02b9f6;
    transition: 0.2s ease;
  }
  span{
    font-size: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Burger = () => {

  const [ clickmenu , setClickmenu ] = useState (false);
  const [ clickshow , setClickshow ] = useState (false);

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
       as={motion.div}  
       initial={{ opacity: 0, x: '-350px' }}
       animate={{ opacity: 1, x: '0px' }}
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
            <AiOutlineClose color={'white'} 
            onClick={() => setClickshow (false)}/>
          </motion.button>
        </Close>

        <ShowRoom>
          <ul>

            <NvLink to='/' as={motion(Link)}
              whileHover = {{
                scale: 1.5,
                textShadow: '0px 0px 8px #02b9f6',
                color: '#02b9f6',
              }}
              transition={{ 
                type: 'spring',
                stiffness: 300
             }}
             onClick={() => setClickshow (false)}
            >Home</NvLink>
            <motion.p
              whileHover = {{
                scale: 1.5,
                textShadow: '0px 0px 8px #02b9f6',
                color: '#02b9f6',
              }}
              transition={{ 
                type: 'spring',
                stiffness: 300
             }}
             onClick={() => setClickshow (true)}
            >ShowRoom</motion.p>
            <NvLink to='Map' as={motion(Link)}
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
             onClick={() => setClickshow (false)}
            >Localização</NvLink>
            
          </ul>
        </ShowRoom>

      </Containershow>

      )}

{clickshow && (

      <ContainershowRoom
        as={motion.div}  
        initial={{ opacity: 0, x: '0' }}
        animate={{ opacity: 1, x: '350px' }}
        transition={{
          duration: 0.3,
          easeInOut: [0, 0.71, 0.2, 1.01]
        }}
      >

        <CloseRoom>
          <motion.button 
          onClick={() => setClickshow (false)}
          whileHover= {{ rotate: 180, borderColor: 'white' }}
          transition={{ duration: 0.2 }}
          >
            <AiOutlineClose color={'white'} />
          </motion.button>
        </CloseRoom>

        <ShowRoomm>
          <div>

            <NvShow to='/Cullinan/ApresentationCullinan'
            onClick={() => setClickshow (false)}>
              <span>Cullinan</span>
            </NvShow>
            
            <NvShow to='/Spectre/ApresentationSpectre' as={motion(Link)}
                        onClick={() => setClickshow (false)}>
              <span>Spectre</span>
          </NvShow>
            
          </div>
        </ShowRoomm>
        

      </ContainershowRoom>

      )}
    </>

  )
}

export default Burger