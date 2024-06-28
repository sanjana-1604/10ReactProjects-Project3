import { useState } from 'react'
import style from 'styled-components'

function RollDice({currentDIce,rollDice}) {





  return (
    <DiceContainer>
<div className='dice' onClick={rollDice}>
<img src={`./Img/dice_${currentDIce}.png`} />

</div>
<p>Click on Dice to roll</p>



    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = style.div`
display:flex;
align-items: center;
flex-direction: column;
margin-top:48px;

p
{
font-size:20px;
}
.dice{
}


`