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

ReactDOM.render(
    <Menu data-url="./menus.json" />,
    document.getElementById('menu')
)