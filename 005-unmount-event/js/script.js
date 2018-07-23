'use strict';

var secondsLeft = 5;

var interval = setInterval(function () {

    if (secondsLeft === 0) {
        ReactDOM.render(React.createElement(
            'div',
            null,
            'Note was removed after ',
            secondsLeft,
            ' seconds.'
        ), document.getElementById('app'));

        clearInterval(interval);
    } else {
        ReactDOM.render(React.createElement(
            'div',
            null,
            React.createElement(Note, { secondsLeft: secondsLeft })
        ), document.getElementById('app'));
    }
    secondsLeft--;
}, 1000);