'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.updateCurrentTime();
        _this.state = {
            currentTime: new Date()
        };
        return _this;
    }

    _createClass(Clock, [{
        key: 'updateCurrentTime',
        value: function updateCurrentTime() {
            var _this2 = this;

            setInterval(function () {
                _this2.setState({
                    currentTime: new Date()
                });
            }, 1000);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('componentWillMount');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount(e) {
            console.log('componentDidMount');
            console.log('DOM node: ', ReactDOM.findDOMNode(this));
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            console.log('componentWillReceiveProps');
            console.log('new Property: ', newProps);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(newProps, newState) {
            console.log('shouldComponentUpdate');
            console.log('new Property: ', newProps);
            console.log('new States', newState);
            return true;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(newProps, newState) {
            console.log('componentWillUpdate');
            console.log('new Propery: ', newProps);
            console.log('new State: ', newState);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(oldProps, oldState) {
            console.log('componentDidUpdate');
            console.log('old Property: ', oldProps);
            console.log('old state: ', oldState);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(Analog, { time: this.state.currentTime }),
                React.createElement(Digital, { time: this.state.currentTime })
            );
        }
    }]);

    return Clock;
}(React.Component);