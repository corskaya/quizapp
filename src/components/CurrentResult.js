import React from "react";
import "../App.css";

function CurrentResult(props) {
  return (
    <div>
      <div className="d-flex justify-content-around">
        <span className="correctCount">✔️ Correct: {props.data1}</span>
        <span className="score">Score: {props.data3}</span>
        <span className="wrongCount">❌ Wrong: {props.data2}</span>
      </div>
    </div>
  );
}

export default CurrentResult;
