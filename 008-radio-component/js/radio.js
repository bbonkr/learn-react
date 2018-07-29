'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_React$Component) {
    _inherits(Radio, _React$Component);

    function Radio(props) {
        _classCallCheck(this, Radio);

        var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

        _this.handleResize = _this.handleResize.bind(_this);
        var order = props.order;
        var i = 1;
        _this.state = {
            outerStyle: _this.getStyle(4, i),
            innerStyle: _this.getStyle(1, i),
            selectedStyle: _this.getStyle(2, i),
            taggerStyle: {
                top: order * 20,
                width: 25,
                height: 25
            }
        };
        return _this;
    }

    _createClass(Radio, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('resize', this.handleResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }
    }, {
        key: 'getStyle',
        value: function getStyle(i, m) {
            var value = i * m;
            return {
                top: value,
                bottom: value,
                left: value,
                right: value
            };
        }
    }, {
        key: 'handleResize',
        value: function handleResize(e) {
            var w = 1 + Math.round(window.innerWidth / 300);
            this.setState({
                taggerStyle: {
                    top: this.props.order * w * 10,
                    width: w * 10,
                    height: w * 10
                },
                textStyle: {
                    left: w * 13,
                    fontSize: w * 7
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'radio-tagger', style: this.state.taggerStyle },
                React.createElement('input', { type: 'radio', name: this.props.name, id: this.props.id }),
                React.createElement(
                    'label',
                    { htmlFor: this.props.id },
                    React.createElement(
                        'div',
                        { className: 'radio-text', style: this.state.textStyle },
                        this.props.label
                    ),
                    React.createElement(
                        'div',
                        { className: 'radio-outer', style: this.state.outerStyle },
                        React.createElement(
                            'div',
                            { className: 'radio-inner', style: this.state.innerStyle },
                            React.createElement('div', { className: 'radio-selected', style: this.state.selectedStyle })
                        )
                    )
                )
            );
        }
    }]);

    return Radio;
}(React.Component);