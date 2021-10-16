import React from "react";
import "../App.css";

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUp: false,
            time: 30
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.time(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        this.setState({
            isUp: true
        });
        this.isUpHandler();
    }

    time() {
        if (this.state.time === 0) {
            this.componentWillUnmount();
        } else {
            this.setState((state) => ({
                time: state.time - 1
            }));
        }
    }

    isUpHandler() {
        this.props.data(true);
    }

    render() {
        return <p className="time">Time: 🕒 {this.state.time}</p>;
    }
}

export default Time;