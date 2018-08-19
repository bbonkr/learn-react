"use strict";

/*
const menuOptions = [
    'Home',
    'Services',
    'Potofolio',
    'Contact us'    
]
ReactDOM.render(
    <Menu menus={menuOptions} />,
    document.getElementById('menu')
)
*/

ReactDOM.render(React.createElement(Menu, { "data-url": "./menus.json" }), document.getElementById('menu'));