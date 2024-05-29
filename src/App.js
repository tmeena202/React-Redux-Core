import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <span>
            <button onClick={() => dispatch(decNumber())}>-</button>
          </span>
          <input type="text" value={myState} className=""></input>
          <span>
            <button onClick={() => dispatch(incNumber())}>+</button>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
