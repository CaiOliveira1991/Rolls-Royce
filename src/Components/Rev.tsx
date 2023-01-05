import React from 'react'

// Dependencias

import styled from 'styled-components'
import {motion}  from 'framer-motion'
import {Link} from 'react-router-dom'

// Icons

import {BiMapPin} from 'react-icons/bi'

const Revenda = styled.div`
    width: 40px;
    height: 80px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    &::after{
        content: 'revendedor';
        position: absolute;
        right: 60px;
        text-transform: uppercase;
        color: white;
        font-weight: 600;
        opacity: 0;
        transition: 400ms all ease-in-out;
    }
    &:hover:after{
        transform: translateX(-20%);
        opacity: 1;
    }
`;

const Icon = styled(Link)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;


const Rev = () => {

  return (
    
    <>
        <Revenda>
            <Icon to='Map' as={motion(Link)}
                whileHover={{ 
                    scale: 1.2
                }}
            >
                <BiMapPin color={'white'}/>
            </Icon>
        </Revenda>

    </>
  )
}

export default Rev