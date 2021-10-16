import React from "react";
import "../App.css";

class Start extends React.Component {

    clickHandler() {
        this.props.data(true);
    }

    render() {
        return (
            <div>
                <h2 className="vocQuiz">Vocabulary Quiz</h2>
                <div className="d-flex justify-content-center startButtonCenter">
                    <button className="startButton" onClick={this.clickHandler.bind(this)}>Let's start! 👍</button>
                </div>
            </div>
        );
    }
}

export default Start;