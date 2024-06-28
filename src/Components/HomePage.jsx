import React from 'react'
import style from 'styled-components'
import { Button } from '../style/Button'

function HomePage({toggle}) {
  
  return (
    <>
    <Section>
        <div className='game_image'>
            <img src="Img/dices.png" alt="" />
        </div>
        <div className='game_name'>
            <Heading className='game_header'>DICE GAME</Heading>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Section>
    </>
  ) 
}

export default HomePage
const Section = style.div`
height:100vh;
display:flex;
align-items:center;   
margin:0 auto;
width: 80vw;
.game_image
{
width:50%;
padding:10px;
}

.game_image img
{
    width: 100%;
    height: auto;
    display: block;
    
}
    .game_name
    {
    display:flex;
    flex-direction:column;
    align-items:end;
    }
    
`

const Heading = style.h1`
    font-size:96px;
    white-space:nowrap;
    
   
`

