import { useState } from 'react'
import './App.css'


function App() {

const[numer1, setNumer1] = useState("");
const[numer2, setNumer2] = useState("");
const[curreOpe, setcurre] = useState("");
const[result, setResult] = useState(0);


  const deleteNumber = () => {
    if (curreOpe === "" ) {
      setNumer1(numer1.toString().slice(0, -1));
    } else {
      setNumer2(numer2.toString().slice(0, -1));
    }
  };



function allClear(){
  setNumer1("");
  setNumer2("");
  setcurre("");
  setResult(0);
}

function click(val){
  if(curreOpe === ""){
    setNumer1(numer1 + val);
  }else{
    setNumer2(numer2 + val);
  }
}

function clickOpe(val){
  setcurre(val);
}

function getResult(){
  switch(curreOpe){
    case "+":
      setResult(Number(numer1) + Number(numer2));
   break;
   case "-":
      setResult(Number(numer1) - Number(numer2));
    break;
    case "*":
      setResult(Number(numer1) * Number(numer2));
    break;
    case "/":
      setResult(Number(numer1) / Number(numer2));
    break;
  }
}

  return (
    <div className="App">
      <h1 className='title'>Calculator</h1>
      <div className="calc">
        <div className='output'>
          <div className='prev-ope'>{curreOpe ? numer1 + curreOpe + numer2 : ""}</div>
          <div className='curre-ope'>{result ? result : (!curreOpe ? numer1 : " " )}</div>
        </div>
        <button onClick={() => {allClear()}} className='span-two'>AC</button>
        <button onClick={() => {deleteNumber()}}>DEL</button>
        <button onClick={() => {clickOpe("/")}}>/</button>
        <button onClick={() => {click(7)}}>7</button>
        <button onClick={() => {click(8)}}>8</button>
        <button onClick={() => {click(9)}}>9</button>
        <button onClick={() => {clickOpe("*")}}>*</button>
        <button onClick={() => {click(4)}}>4</button>
        <button onClick={() => {click(5)}}>5</button>
        <button onClick={() => {click(6)}}>6</button>
        <button onClick={() => {clickOpe("+")}}>+</button>
        <button onClick={() => {click(1)}}>1</button>
        <button onClick={() => {click(2)}}>2</button>
        <button onClick={() => {click(3)}}>3</button>
        <button onClick={() => {clickOpe("-")}}>-</button>
        <button onClick={() => {click(".")}}>.</button>
        <button onClick={() => {click(0)}}>0</button>
        <button onClick={() => {getResult()}} className="span-two">=</button>
      </div>

    </div>
  )
}

export default App
