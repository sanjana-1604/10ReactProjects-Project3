import React from 'react'
import "./App.css";
import HomePage from './Components/HomePage'
import GamePlay from './Components/GamePlay'
import {useState} from 'react'

function App() {
  const[isGameStarted , setisGameStarted]=useState(true);
  const toggleGamePlay=()=>
    {
      setisGameStarted((prev)=>!prev);
    }
  return (
    <>
    {isGameStarted?<GamePlay/>: <HomePage toggle={toggleGamePlay}/>}
    
    </>
  )
}

export default App
