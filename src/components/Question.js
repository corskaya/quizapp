import React from "react";
import "../App.css";
import Detector from "./Detector";
import CurrentResult from "./CurrentResult";
import QuestionData from "../data.json";

class Question extends React.Component {
    constructor(props) {
        const randomQuestion = Math.floor(Math.random() * QuestionData.length);
        const randomChoises = Math.floor((Math.random() * 3) + 1);
        super(props);
        this.state = {
            questionNumber: randomQuestion,
            choises: randomChoises,
            score: 0,
            correctAnswer: 0,
            wrongAnswer: 0
        }
    }

    clickTrue() {
        this.setState((state) => ({
            correctAnswer: state.correctAnswer + 1,
            questionNumber: Math.floor(Math.random() * QuestionData.length),
            score: state.score + 10,
            choises: Math.floor((Math.random() * 3) + 1)
        }));
        this.setState({
            answer: 'Correct!'
        });
    }

    clickFalse() {
        this.setState((state) => ({
            wrongAnswer: state.wrongAnswer + 1,
            questionNumber: Math.floor(Math.random() * QuestionData.length),
            score: state.score - 10,
            choises: Math.floor((Math.random() * 3) + 1)
        }));
        this.setState({
            answer: 'Wrong!'
        });
    }

    componentWillUnmount() {
        this.props.data(this.state.score, this.state.correctAnswer, this.state.wrongAnswer);
    }

    render() {
        if (this.state.choises === 1) {
            return (
                <div className="center">
                    <h2 className="question">{QuestionData[this.state.questionNumber].question}</h2>
                    <div className="d-flex justify-content-between row align-items-center">
                        <button
                            onClick={this.clickTrue.bind(this)}
                            className="btn btn-warning col-3"
                        >
                            {QuestionData[this.state.questionNumber].answer1}
                        </button>
                        <button
                            onClick={this.clickFalse.bind(this)}
                            className="btn btn-warning col-3"
                        >
                            {QuestionData[this.state.questionNumber].answer2}
                        </button>
                        <button
                            onClick={this.clickFalse.bind(this)}
                            className="btn btn-warning col-3"
                        >
                            {QuestionData[this.state.questionNumber].answer3}
                        </button>
                    </div>
                    <Detector data={this.state.answer} />
                    <CurrentResult data1={this.state.correctAnswer} data2={this.state.wrongAnswer} data3={this.state.score} />
                </div>
            );
        } else if (this.state.choises === 2) {
            return (
                <div className="center">
                    <h2 className="question">{QuestionData[this.state.questionNumber].question}</h2>
                    <div className="d-flex justify-content-between row align-items-center">
                        <button
                            onClick={this.clickFalse.bind(this)}
                            className="btn btn-warning col-3"
                        >
                            {QuestionData[this.state.questionNumber].answer3}
                        </button>
                        <button
                            onClick={this.clickTrue.bind(this)}
                            className="btn btn-warning col-3"
                        >
                            {QuestionData[this.state.questionNumber].answer1}
                        </button>
                        <button
                            onClick={this.clickFalse.bind(this)}
                            className="btn btn-warning col-3"
                        >
                            {QuestionData[this.state.questionNumber].answer2}
                        </button>
                    </div>
                    <Detector data={this.state.answer} />
                    <CurrentResult data1={this.state.correctAnswer} data2={this.state.wrongAnswer} data3={this.state.score} />
                </div>
            );
        } else if (this.state.choises === 3) {
            return (
                <div className="center">
                    <h2 className="question">{QuestionData[this.state.questionNumber].question}</h2>
                    <div className="d-flex justify-content-between row align-items-center">
                        <button
                            onClick={this.clickFalse.bind(this)}
                            className="btn btn-warning col-3"
                        >
                            {QuestionData[this.state.questionNumber].answer2}
                        </button>
                        <button
                            onClick={this.clickFalse.bind(this)}
                            className="btn btn-warning col-3"
                        >
                            {QuestionData[this.state.questionNumber].answer3}
                        </button>
                        <button
                            onClick={this.clickTrue.bind(this)}
                            className="btn btn-warning col-3"
                        >
                            {QuestionData[this.state.questionNumber].answer1}
                        </button>
                    </div>
                    <Detector data={this.state.answer} />
                    <CurrentResult data1={this.state.correctAnswer} data2={this.state.wrongAnswer} data3={this.state.score} />
                </div>
            );
        }
    }
}

export default Question;