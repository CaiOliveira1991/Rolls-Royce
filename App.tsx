import React from 'react'

// Dependências

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages

import Home from './Pages/Home'
import Show from './Pages/Show'
import ErroPage from './Pages/ErroPage'

import Cullinan from './Pages/Cullinan'
import Spectre from './Pages/Spectre'

import ApresentationCullinan from './Pages/Show/ApresentationCullinan'
import ApresentationSpectre from './Pages/Show/ApresentationSpectre'
import DetailCullinan from './Pages/Show/DetailCullinan'
import DetailSpectre from './Pages/Show/DetailSpectre'

// Components

import Header from './Components/Header'
import Footer from './Components/Footer'

//Css

import './App.css'

// Code 

function App() {
  return (

      <BrowserRouter>

        <Header />

        <AnimatePresence >
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='Cullinan' element={<Cullinan />} >
              <Route path='ApresentationCullinan' element={<ApresentationCullinan />} />
              <Route path='DetailCullinan' element={<DetailCullinan />} />
            </Route>
            <Route path='Spectre' element={<Spectre />} >
              <Route path='ApresentationSpectre' element={<ApresentationSpectre />} />
              <Route path='DetailSpectre' element={<DetailSpectre />} />
            </Route>
            <Route path='Show' element={<Show />} />
            <Route path='*' element={<ErroPage />} />

          </Routes>
        </AnimatePresence>

        <Footer />
   
      </BrowserRouter>

  );
}

export default App;


