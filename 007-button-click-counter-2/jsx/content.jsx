class Content extends React.Component{
    constructor(props){
        super(props)
        
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            counter:0
        }
    }
    handleClick(event){
        this.setState({counter: ++this.state.counter})
    }
    render(){
        return (
            <div>
                <ClickButtonCounter
                    handler={this.handleClick}
                    counter={this.state.counter} />

                <Counter value={this.state.counter} />
            </div>
        )
    }
}