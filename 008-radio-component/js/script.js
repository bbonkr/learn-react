"use strict";

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(Radio, { id: "radioItem1", label: "Apple", name: "radioItems", order: "1" }),
    React.createElement(Radio, { id: "radioItem2", label: "Google", name: "radioItems", order: "2" }),
    React.createElement(Radio, { id: "radioItem3", label: "Microsoft", name: "radioItems", order: "3" }),
    React.createElement(Radio, { id: "radioItem4", label: "Tweeter", name: "radioItems", order: "4" }),
    React.createElement(Radio, { id: "radioItem5", label: "Facebook", name: "radioItems", order: "5" })
), document.getElementById('app'));