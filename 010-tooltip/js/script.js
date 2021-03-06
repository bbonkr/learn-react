'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip(props) {
        _classCallCheck(this, Tooltip);

        var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

        _this.state = { opacity: false };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Tooltip, [{
        key: 'toggle',
        value: function toggle() {
            var tooltipNode = ReactDOM.findDOMNode(this);
            this.setState({
                opacity: !this.state.opacity,
                top: tooltipNode.offsetTop,
                left: tooltipNode.offsetLeft
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                zIndex: this.state.opacity ? 1000 : -1000,
                opacity: +this.state.opacity,
                top: (this.state.top || 0) + 30,
                left: (this.state.left || 0) - 30
            };
            return React.createElement(
                'div',
                { style: { display: 'inline' } },
                React.createElement(
                    'span',
                    { style: { color: 'blue' },
                        onMouseEnter: this.toggle,
                        onMouseOut: this.toggle },
                    this.props.children
                ),
                React.createElement(
                    'div',
                    { className: 'tooltip bottom', style: style, role: 'tooltip' },
                    React.createElement('div', { className: 'arrow' }),
                    React.createElement(
                        'div',
                        { className: 'tooltip-inner' },
                        this.props.text
                    )
                )
            );
        }
    }]);

    return Tooltip;
}(React.Component);

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(
        Tooltip,
        { text: 'Javascript library from Facebook' },
        'React'
    ),
    ' was awesome!'
), document.getElementById('tooltip'));