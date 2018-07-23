"use strict";

var Counter = function Counter(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "span",
            null,
            props.value
        ),
        " click(s)."
    );
};