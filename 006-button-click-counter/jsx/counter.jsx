class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }
    handleCount(event){
        this.setState({counter: ++this.state.counter})
    }
    render(){
        return (
            <div>
                <button onClick={this.handleCount.bind(this)}
                    className="btn btn-primary">{this.state.counter} click(s)!
                </button>
            </div>
        )
    }
}