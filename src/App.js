// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react';
import AgeCounter from "./components/AgeCounter";
import Greeting from "./components/Greeting";

function App() {
  const [numVal, setNumVal] = useState(0);

  const updateValue = (e)=>{
    setNumVal(e.target.value);
  }
  return (
    <>
    <input id="_id" name="txtNumber" type="number" onChange={updateValue} />
    <h1>{numVal}</h1>
    <AgeCounter increment={numVal} />
    <h1>Hello Daniel</h1>
    <h1>Hello Shamar</h1>
    <Greeting heading="1" gender="Male" someonename="Tevin Campbell"/>
    <Greeting heading="2" gender="Male" someonename="Tevin Campbell"/>
    </>
  );
}

export default App;
