// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [preState, setpreState] = useState("");
  const [currentState, setcurrentState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {};

  const operatorType = (e) => {};

  const equals = (e) => {};

  const reset = () => {};

  const percent = () => {};

  const minusPlus = () => {};
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen"></div>
        <div className="btn light-gray" onClick={reset}>
          AC
        </div>
        <div className="btn light-gray" onClick={percent}>
          %
        </div>
        <div className="btn light-gray" onClick={minusPlus}>
          +/-
        </div>
        <div className="btn orange" onClick={operatorType}>
          /
        </div>
        <div className="btn " onClick={inputNum}>
          7
        </div>
        <div className="btn " onClick={inputNum}>
          8
        </div>
        <div className="btn " onClick={inputNum}>
          9
        </div>
        <div className="btn orange" onClick={operatorType}>
          X
        </div>
        <div className="btn " onClick={inputNum}>
          4
        </div>
        <div className="btn " onClick={inputNum}>
          5
        </div>
        <div className="btn " onClick={inputNum}>
          6
        </div>
        <div className="btn orange" onClick={operatorType}>
          +
        </div>
        <div className="btn " onClick={inputNum}>
          1
        </div>
        <div className="btn " onClick={inputNum}>
          2
        </div>
        <div className="btn " onClick={inputNum}>
          3
        </div>
        <div className="btn orange" onClick={operatorType}>
          -
        </div>
        <div className="btn " onClick={inputNum}>
          0
        </div>
        <div className="btn " onClick={inputNum}>
          .
        </div>
        <div className="btn " onClick={equals}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;
