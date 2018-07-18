'use strict';

var Digital = function Digital(props) {
    return React.createElement(
        'div',
        null,
        props.time.toLocaleString('ko')
    );
};