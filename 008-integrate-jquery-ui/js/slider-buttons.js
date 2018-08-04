'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderButtons = function (_React$Component) {
    _inherits(SliderButtons, _React$Component);

    function SliderButtons(props) {
        _classCallCheck(this, SliderButtons);

        var _this = _possibleConstructorReturn(this, (SliderButtons.__proto__ || Object.getPrototypeOf(SliderButtons)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSlide = _this.handleSlide.bind(_this);
        _this.state = { sliderValue: 0 };
        return _this;
    }

    _createClass(SliderButtons, [{
        key: 'handleSlide',
        value: function handleSlide(event, ui) {
            this.setState({ sliderValue: ui.value });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(value) {
            var _this2 = this;

            return function () {
                $('#slider').slider('value', _this2.state.sliderValue + value);

                _this2.setState({ sliderValue: _this2.state.sliderValue + value });
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            $('#slider').on('slide', this.handleSlide);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            $('#slide').off('slide', this.handleSlide);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'span',
                        null,
                        'Value: ',
                        this.state.sliderValue
                    )
                ),
                React.createElement(
                    'button',
                    { disabled: this.state.sliderValue < 1,
                        className: 'btn btn-warning',
                        onClick: this.handleChange(-1) },
                    '1 less (',
                    this.state.sliderValue - 1 < 0 ? 0 : this.state.sliderValue - 1,
                    ')'
                ),
                React.createElement(
                    'button',
                    { disabled: this.state.sliderValue > 99,
                        className: 'btn btn-primary',
                        onClick: this.handleChange(1) },
                    '1 more (',
                    this.state.sliderValue + 1 > 100 ? 100 : this.state.sliderValue + 1,
                    ')'
                )
            );
        }
    }]);

    return SliderButtons;
}(React.Component);