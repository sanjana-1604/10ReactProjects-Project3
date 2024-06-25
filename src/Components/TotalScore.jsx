import React from 'react'
import style from 'styled-components'

function TotalScore() {
  return (
    <ScoreContainer>
        <h1 >0</h1>     
        <p>Total Score</p>  
      </ScoreContainer>
  )
}
export default TotalScore

const ScoreContainer =style.div`
max-width:200px;
text-align:center;

    h1
    {
    font-size:40px;
    font-weight:500;
    }
    p
    {
    font-weight:500;
    }
`