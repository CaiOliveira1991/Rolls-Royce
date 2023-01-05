import React from 'react'

// Dependencias

import {Outlet} from 'react-router-dom'
import {motion} from 'framer-motion'

// Components

import MenuShow from '../Components/NavSpectre'


const Spectre = () => {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MenuShow />
      <Outlet />    
    </motion.div>

  )
}

export default Spectre