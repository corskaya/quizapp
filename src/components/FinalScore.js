import React from "react";

class FinalScore extends React.Component {
  clickHandler() {
    this.props.data();
  }

  render() {
    return (
      <div>
        <h2 className="timeIsUp">Time is up!</h2>
        <p className="d-flex justify-content-center finalScore">
          Score: {this.props.finalScore}
        </p>
        <p className="d-flex justify-content-center finalCorrect">
          Correct: {this.props.correctNumber}
        </p>
        <p className="d-flex justify-content-center finalWrong">
          Wrong: {this.props.wrongNumber}
        </p>
        <div className="d-flex justify-content-center">
          <button
            onClick={this.clickHandler.bind(this)}
            className="btn btn-light tryAgain"
          >
            Try Again ♻️
          </button>
        </div>
      </div>
    );
  }
}

export default FinalScore;
