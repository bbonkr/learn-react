class Menu extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            menus: []
        }
    }
    componentDidMount(){
        fetch(this.props['data-url'])
            .then((response) => response.json())
            .then((menus) => this.setState({menus: menus}))
    }
    render(){
        return (
            <div>
                {this.state.menus.map((v, i)=>{
                    return <div key={i}><Link label={v} /></div>
                })}
            </div>
        )
    }
}