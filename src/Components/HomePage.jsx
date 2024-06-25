import React from 'react'
import style from 'styled-components'

function HomePage({toggle}) {
  
  return (
    <>
    <Section>
        <div className='game_image'>
            <img src="Img/dices 1.png" alt="" />
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
const Button = style.button`

background-color: black;
color: white;
padding:10px;
width:220px;
border-radius:5px;
padding:10px 18px ;
font-weight:600;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor:pointer;
&:hover
{
background:white;
border: 1px solid black;
color:black;
transition: 0.3s background ease-in;
}
`
const Heading = style.h1`
    font-size:96px;
    white-space:nowrap;
    
   
`

