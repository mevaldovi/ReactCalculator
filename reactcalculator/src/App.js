// import logo from './logo.svg';
import "./App.css";
import NumberFormat from "react-number-format";
import { useState, useEffect } from "react";

function App() {
  //set hooks for ReactApp
  const [preState, setpreState] = useState("");
  const [currentState, setcurrentState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    //if user clicks the "." button more than once, exit the function since a calculator can not display two "." at once
    if (currentState.includes(".") && e.target.innerText === ".") return;
    //if a total exists, set prestate as an empty string.
    if (total) {
      setpreState("");
    }
    //ternary operator checking to see if there's a current state. If no current state, set currentstate as preState and cancatenate event target's innerText
    currentState
      ? setcurrentState((pre) => pre + e.target.innerText)
      : setcurrentState(e.target.innerText);
    //re-set Total back to false to prepare for additional other calculations.
    setTotal(false);
  };

  useEffect(() => {
    setInput(currentState);
  }, [currentState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (currentState === "") return;
    if (preState !== "") {
      equals();
    }
    setpreState(currentState);
    setcurrentState("");
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") setTotal(true);
  };

  let cal;
  switch (operator) {
    case "/":
      cal = String(parseFloat(preState) / parseFloat(currentState));
      break;
    case "+":
      cal = String(parseFloat(preState) + parseFloat(currentState));
      break;
    case "X":
      cal = String(parseFloat(preState) * parseFloat(currentState));
      break;
    case "-":
      cal = String(parseFloat(preState) - parseFloat(currentState));
      break;
  }
  // setInput("");
  // setpreState(cal);
  // setcurrentState("");

  const reset = () => {
    //set preState to an empty string
    setpreState("");
    setcurrentState("");
    setInput("0");
  };

  const percent = () => {};

  const minusPlus = () => {};
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">
          {input !== "" || input === "0" ? (
            <NumberFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
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
        <div className=" btn zero" onClick={inputNum}>
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
