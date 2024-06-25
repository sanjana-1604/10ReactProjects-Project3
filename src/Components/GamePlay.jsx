import React, { useState } from 'react'
import style from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'


function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState()
  return (
    <>
    <Header >
      <TotalScore />
      <NumberSelector selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}/>       

    </Header>
  
    
    </>
  )
}

export default GamePlay

const Header = style.div`
display:flex;
align-items:center;
justify-content: space-between;
padding:30px;
 ` 

