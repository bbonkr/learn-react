class TimerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timeLeft: null, timer: null };
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer);
        let timer = setInterval(() => {
            console.log("2: Inside of setInterval");
            let timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) {
                clearInterval(timer);
            }
            this.setState({ timeLeft: timeLeft });
        }, 1000);

        console.log("1: After setInterval");

        this.setState({ timeLeft: timeLeft, timer: timer });
    }

    render() {
        return React.createElement(
            "div",
            { className: "row-fluid" },
            React.createElement(
                "h2",
                null,
                "Timer"
            ),
            React.createElement(
                "div",
                { className: "btn-group", role: "group" },
                React.createElement(Button, { time: "5", startTimer: this.startTimer }),
                React.createElement(Button, { time: "10", startTimer: this.startTimer }),
                React.createElement(Button, { time: "15", startTimer: this.startTimer })
            ),
            React.createElement(Timer, { timeLeft: this.state.timeLeft }),
            React.createElement("audio", { id: "end-of-timer-audio", src: "ring.mp3", preload: "auto" })
        );
    }
}

class Timer extends React.Component {
    render() {
        if (this.props.timeLeft === 0) {
            document.getElementById("end-of-timer-audio").play();
        }
        if (!this.props.timeLeft) {
            return React.createElement("div", null);
        }
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Time left: ",
                this.props.timeLeft
            )
        );
    }
}

class Button extends React.Component {
    startTimer(event) {
        return this.props.startTimer(this.props.time);
    }

    render() {
        return React.createElement(
            "button",
            {
                type: "button",
                className: "btn btn-secondary",
                onClick: this.startTimer.bind(this)
            },
            this.props.time,
            " seconds"
        );
    }
}

ReactDOM.render(React.createElement(TimerWrapper, null), document.getElementById("timer-app"));
