import React from 'react'

// Dependencias

import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Navcullinan = styled.nav`
  margin-top: 12vh;
  position: fixed;
  width: 100%;
  height: 5vh;
  background-color: #0000001c;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const NavBar = styled.div`
  width: 90%;
  max-width: 1250px;
  height: 100%;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 550px){
      width: 100%;
  }
    Link{
      text-align: center;
      color: #ffffff;
    }
  }
`;

const LinkN = styled(Link)`
  width: 50%;
  color: white;
  font-weight: 600;
  Text-align: center;
  @media (max-width: 550px){
    width: 100%;
  }
`;

const NavSpectre = () => {
  return (
    
    <Navcullinan as={motion.header}
    initial={{ y: '-100vh' }}
    animate={{  y: 0 }}
    transition={{ delay: 1.5 }}
    >

      <NavBar>

        <motion.div
        initial={{ x: '-100vh' }}
        animate={{  x: 0 }}
        transition={{ delay: 1.8 }}>
          <LinkN to='ApresentationSpectre'
            as={motion(Link)}
            whileHover={{ 
            scale: 1.2,
            textShadow: '0px 0px 20px black'
          }}
          >Apresentação</LinkN>
          <LinkN to='DetailSpectre'
            as={motion(Link)}
            whileHover={{ 
            scale: 1.2,
            textShadow: '0px 0px 20px black'
          }}
          >Detalhes</LinkN>
        </motion.div>

      </NavBar>

    </Navcullinan>

  )
}

export default NavSpectre
