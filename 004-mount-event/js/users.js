"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_React$Component) {
    _inherits(Users, _React$Component);

    function Users(props) {
        _classCallCheck(this, Users);

        var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));

        _this.state = {
            users: []
        };
        console.log(props);
        return _this;
    }

    _createClass(Users, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            fetch(this.props['data-url']).then(function (response) {
                return response.json();
            }).then(function (users) {
                return _this2.setState({ users: users });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "h1",
                    null,
                    "List of Users"
                ),
                React.createElement(
                    "table",
                    { className: "table table-striped table-condensed table-bordered table-hover" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                null,
                                "Name"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Email"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Ip Address"
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        this.state.users.map(function (user) {
                            return React.createElement(
                                "tr",
                                { key: user.id },
                                React.createElement(
                                    "td",
                                    null,
                                    user.firstName,
                                    " ",
                                    user.lastName
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    user.email
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    user.ipAddress
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Users;
}(React.Component);