import 'App.css';
import { useState } from 'react';

// design
const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className='samosa' src='./images/Samosa' onClick={updateCount}/>
      </div>
      <div className='container'>
        <div className='upgrade'>
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>

    </div>
  )
}

// creating a state variable of count where the value will be used to keep the tracks of the total clicks
const [count, setCount] = useState(0);
// creating a state variable where the value will be used to keep track the number of samosas per click
const [multiplier, setMultiplier] = useState(1);
// creating a function called update count where the state variable will be called with its current value and the multiplier value
const updateCount = () => setCount(count + multiplier);


//handling packages
// Defining a function called buyDoubleStuffed() that sets the multiplier state variable value to 2 times it's current value if the current number of counts is greater than 1000
const buyDoubleStuffed = () => {
  if (count >= 1000) {
    setMultiplier(multiplier * 2)
  }
}

// defining the function buyPartyPack() that sets the multiplier state variable value to 5 times its current value if the counts if greater than or equal to 100
const buyPartyPack = () => {
  if (count >= 100) {
    setMultiplier(multiplier * 5)
    setCount(count - 5)
  }
}

//Defing a function buyFullFeast() that sets the state variable to 5 times it's current value if the the counts is greater than or equal to 1000
const buyFullFeast = () => {
  if (count >= 1000) {
    setMultiplier(multiplier * 5)
    setCount(count - 1000)
  }
}

/*
exporting the App function to the main javascript file
*/
export default App