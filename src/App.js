
import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [color,setColor] = useState("")
  const click = color =>{
    setColor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  }, [color])
  return (
    <div className="App">  
    <h1 className='h1'>Background-colour-changing </h1>
   <div className='app'>
      <button className='btn1' onClick = { () => click("yellow")}>Yellow</button> 
      <button className='btn2' onClick = { () => click("red")}>Red</button> 
      <button className='btn3' onClick = { () => click("blue")}>Blue</button>
      <button className='btn4' onClick = { () => click("green")}>Green</button>
      <button className='btn5' onClick = { () => click("purple")}>Purple</button> 
   </div>
     </div> 
  );
}

export default App;
