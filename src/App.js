import React from "react";
import Time from "./components/Time";
import Question from "./components/Question";
import Start from "./components/Start";
import FinalScore from "./components/FinalScore";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      isUp: false
    }
  }

  getFromStart(startData) {
    this.setState({
      isStarted: startData
    })
  }

  getFromTime(timeData) {
    this.setState({
      isUp: timeData,
      isStarted: false
    })
  }

  getFromQuestion(score, correct, wrong) {
    this.setState({
      score: score,
      correctAnswer: correct,
      wrongAnswer: wrong
    })
  }

  getFromFinalScore() {
    this.setState({
      isStarted: true
    })
  }

  render() {
    if (this.state.isStarted) {
      return (
        <div>
          <div>
            <Question data={this.getFromQuestion.bind(this)} />
          </div>
          <div>
            <Time data={this.getFromTime.bind(this)} />
          </div>
        </div>
      );
    } else if (!this.state.isStarted && !this.state.isUp) {
      return (
        <div>
          <Start data={this.getFromStart.bind(this)} />
        </div>
      );
    } else {
      return (
        <div>
          <FinalScore
            finalScore={this.state.score}
            correctNumber={this.state.correctAnswer}
            wrongNumber={this.state.wrongAnswer}
            data={this.getFromFinalScore.bind(this)} />
        </div>
      );

    }
  }
}

export default App;