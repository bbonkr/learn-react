class ClickButtonCounter extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <button 
                onClick={this.props.handler} 
                className="btn btn-primary">
                {this.props.counter} click(s)!!
            </button>
        )
    }
}