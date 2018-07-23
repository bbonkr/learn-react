'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Note = function (_React$Component) {
    _inherits(Note, _React$Component);

    function Note(props) {
        _classCallCheck(this, Note);

        return _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this, props));
    }

    _createClass(Note, [{
        key: 'confirmLeave',
        value: function confirmLeave(e) {
            var confirmationMessage = '창을 닫으시겠습니까?';
            e.returnValue = confirmationMessage; /* Gecko, Treident, Chrome 34+ */
            return confirmationMessage; /* Gecko, WebKit, Chrome < 34 */
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('beforeunload 이벤트에 confirmLeave 이벤트 리스너 등록');
            window.addEventListener('beforeunload', this.confirmLeave);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('beforeunload 이벤트에 confirmLeave 이벤트 리스너 제거');
            window.removeEventListener('beforeunload', this.confirmLeave);
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('render');
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    '\uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB294 ',
                    this.props.secondsLeft,
                    '\uCD08 \uB4A4\uC5D0 \uC81C\uAC70\uB429\uB2C8\uB2E4.'
                ),
                React.createElement('input', { type: 'text' })
            );
        }
    }]);

    return Note;
}(React.Component);