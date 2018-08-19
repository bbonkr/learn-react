class Menu extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // let menus = [
        //     'Home',
        //     'Services',
        //     'Potofolio',
        //     'Contact us'
        // ]
        console.log(this.props.menus)
        return React.createElement(
            'div',
            null, 
            this.props.menus.map((v, i) => {
                return React.createElement(
                    'div', 
                    {key: i}, 
                    React.createElement(Link, {label:v}))
            })
        )
    }
}

class Link extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const url = '/' + 
            this.props.label
                .toLowerCase()
                .trim()
                .replace(' ', '-')
        console.log(url)
        return React.createElement(
            'div', 
            null,
            React.createElement('a', {href: url}, this.props.label),
            React.createElement('br')
        )
    }
}

const menuOptions = [
    'Home',
    'Services',
    'Potofolio',
    'Contact us'    
]

ReactDOM.render(
    React.createElement(
        Menu, 
        {menus: menuOptions}
    ),
    document.getElementById('menu')
)