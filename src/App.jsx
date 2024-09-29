import "./App.css";
import {useState} from "react";



const App = () => {

const [count, setCount] = useState(0);
const [multiple, setMultiple] = useState(1);
const updateCount = () => setCount(count + multiple);

const buyDoubleStuffed = () => {
  if (count >= 10) {
    setMultiple(multiple * 2);
    setCount(count - 10);
  }
}
const buyPartyPack = () => {
  if (count >= 100) {
    setMultiple(multiple * 5);
    setCount(count - 100);
  }
}
const buyFullFeast = () => {
  if (count >= 1000) {
    setMultiple(multiple * 10);
    setCount(count - 1000);
  }
}

  return (
    <div className="App">
      <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img src="src\assets\Samosa2.avif" alt="Samosa" className="samosa" onClick={updateCount}/>
        <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed✌🏾</h3>
          <p> 2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
        <h3>Party Pack🎉</h3>
        <p> 5x per click</p>
        <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
        <h3>Full Feast 👨🏾‍🍳</h3>
        <p> 10x per click</p>
        <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>
    </div>
  )
};
export default App;