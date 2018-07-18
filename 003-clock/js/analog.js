'use strict';

var Analog = function Analog(props) {
    var date = new Date(props.time);
    var dialStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        border: '1rem solid #de2323'
    };
    var secondHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + (date.getSeconds() / 60 * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red'
    };
    var minuteHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid grey',
        width: '40%',
        height: 3,
        transform: 'rotate(' + (date.getMinutes() / 60 * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'grey'
    };
    var hourHandStyle = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid grey',
        width: '20%',
        height: 7,
        transform: 'rotate(' + (date.getHours() / 12 * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'blue'
    };
    return React.createElement(
        'div',
        { style: dialStyle },
        React.createElement('div', { style: secondHandStyle }),
        React.createElement('div', { style: minuteHandStyle }),
        React.createElement('div', { style: hourHandStyle })
    );
};