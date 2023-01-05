import React from 'react'

// Dependencias

import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

// Components

import Burger from './Burger'
import Rev from './Rev'

// Imag

import logo from '../assets/logo.png'

const Headeer = styled.header`
    position: fixed;
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const Nav = styled.nav`
    width: 95%;
    max-width: 1250px;
    height: 100%;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    width: 80px;
    height: 80px;
    filter: invert(1);
`;

const Header = () => {
  return (
    
    <Headeer>

        <Nav as={motion.header}
            initial={{ y: '-100vh' }}
            animate={{  y: 0 }}
            transition={{ delay: 1.5 }}
        >

            <Burger />

            <Logo as={motion.div}
                initial={{ y: '-100vh' }}
                animate={{  y: 0 }}
                transition={{ delay: 1.8 }}
            >
                <Link to='/'>
                    <motion.img src={logo} alt='logo' 
                        whileHover={{scale: 1.3}}
                    />
                </Link>
            </Logo>

            <Rev />

        </Nav>
    </Headeer>

  )
}

export default Header
