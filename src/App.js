import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Counter></Counter>
       <Something></Something>
      </header>
    </div>
  );
}

function Counter(){
  let [count, setCount] =useState(5)
  let clickBtn =(()=>{
    let result =count +1
    setCount(result)
  })
    
 
  return(
    <div>
      <h1>Counter :{count}</h1>
      <button onClick ={clickBtn}>increase</button>
      <button onClick={()=>setCount(count-1)}>decrease</button>
    </div>
  )
}


function Something(){
  let[get, setGet] =useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setGet(data))
  })
  return(
    <div>
      <h2>Dynamic users :{get.length}</h2>
      <ol>
        {
          get.map(user =><li>{user.name}</li>)
        }
      </ol>
    </div>
  )
}
export default App;
