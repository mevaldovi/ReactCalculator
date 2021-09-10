// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen"></div>
        <div className="btn light-gray" onClick={reset}>AC</div>
        <div className="btn light-gray" onClick={percent}>%</div>
        <div className="btn light-gray" onClick={minusPlus}>+/-</div>
        <div className="btn orange" onClick={operatorType}>/</div>
      </div>
    </div>
  );
}

export default App;
