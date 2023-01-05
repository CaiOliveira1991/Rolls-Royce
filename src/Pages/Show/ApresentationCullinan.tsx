import React from 'react'

// Components

import LineScroll from '../../Components/lineScroll'

// Dependencias

import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { Animator,
   ScrollContainer,
    ScrollPage,
    batch,
    Sticky,
    StickyIn,
    Fade,
    FadeIn,
    MoveIn,
    MoveOut,
    ZoomIn,
  } from 'react-scroll-motion'

//Img
import PCullian from '../../assets/PCullinan.png'
import Deserto from '../../assets/desert.jpg'
import neve from  '../../assets/neve.webp'
import meio from  '../../assets/meio.webp'

const CullinanDiv = styled.section`
  width: 100%;
  height: auto;
  background: black;
`;

const FrontCullinan = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${PCullian});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px){
    background-position: 25%;
  }
  h1{
    width: 80%;
    text-align: center;
    font-size: 80px;
    font-weight: 300;
    color: #ffffff;
    @media (max-width: 550px){
      margin-top: 50px;
      font-size: 50px;
    }
  }
`;

const TxtCullinan = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    margin-bottom: 2vh;
    width: 500px;
    height: auto;
    color: #ffffff;
    font-size: 30px;
    text-align: center;
  }
  hr{
    height: 4px;
    width: 50px;
    background-color: #808080cf;
  }
  p{
    margin-top: 2vh;
    width: 400px;
    height: auto;
    color: #ffffff;
    font-size: 15px;
    text-align: center;
  }
`;

const ImgCullinan = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px){
    margin-top: 40vh;
  }
`;

const BtnDetail = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  cursor: pointer;
  color: #000000;
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

const ApresentationCullinan = () => {

  const ZoomInScroll = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    
    <CullinanDiv  as={motion.section}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >

      <ScrollContainer>
        <ScrollPage >
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -700))}>

            <FrontCullinan >

              <motion.h1
              initial={{ opacity: 0, x: '-100vh' }}
              animate={{  opacity: 1, x: 0 }}
              whileHover={{ scale: 1.2 }}
              >Cullinan</motion.h1>

              <LineScroll />

            </FrontCullinan>

          </Animator>
        </ScrollPage>
      
        <ScrollPage >
          <Animator animation={batch(Sticky(), Fade(), MoveOut())}>
            
            <TxtCullinan>
            
              <h2>Suprema Liberdade</h2>

              <hr />

              <p>Isso é liberdade absoluta.<br/>
              O primeiro SUV todo-o-terreno da<br/>
              Rolls-Royce torna as viagens off-road<br/>
              de luxo uma realidade pela primeira vez.<br/>
              O luxo da Pinnacle agora é fácil,<br/>
              em todos os lugares.</p>

            </TxtCullinan>

          </Animator>
        </ScrollPage>
        <ScrollPage >

              <Animator animation={batch(MoveIn(-1000), MoveOut(1000))}><ImgCullinan><img src={neve} alt='neve'/></ImgCullinan></Animator>

        </ScrollPage>
        <ScrollPage >

              <Animator animation={batch(MoveIn(1000), MoveOut(-1000))}><ImgCullinan><img src={Deserto} alt='deserto'/></ImgCullinan></Animator>

        </ScrollPage>
        <ScrollPage >

              <Animator animation={batch(MoveIn(-1000), MoveOut(1000))}><ImgCullinan><img src={meio} alt='meio'/></ImgCullinan></Animator>

        </ScrollPage>

        <ScrollPage >
          <Animator animation={batch(Sticky(), Fade(), MoveIn())}>

            <TxtCullinan>

              <h2 >AVENTURA ENCORAJADA</h2>

              <hr/>

              <p
              > Cullinan é um SUV todo-o-terreno para todas as estações.<br/>
              Os motoristas viajam com confiança,<br/>
              sabendo que a capacidade de desempenho ilimitada da Cullinan<br/>
              sustenta todas as excursões.<br/>
              Dentro da cabine generosa do Cullinan,<br/>
              os passageiros estão seguros, protegidos e<br/>
              extremamente confortáveis</p>

            </TxtCullinan>
          </Animator>
        </ScrollPage>

        <ScrollPage >
          <Animator animation={ZoomInScroll}>


            <BtnDetail>
              <Button to='Map' as={motion(Link)}
                transition={{ delay: 0.8 }}
                >

                <motion.p
                    whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(0,0,0)' }}
                  >
                  Ache um Revendedor
                </motion.p>

              </Button>
            </BtnDetail>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

    </CullinanDiv>

  )
}

export default ApresentationCullinan