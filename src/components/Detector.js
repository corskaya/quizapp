import React from "react";
import "../App.css";

function Detector(props) {
    if (props.data === "Correct!") {
        return <h3 className="detector correct">Correct!</h3>;
    } else if (props.data === "Wrong!") {
        return <h3 className="detector wrong">Wrong!</h3>;
    } else {
        return null;
    }
}

export default Detector;