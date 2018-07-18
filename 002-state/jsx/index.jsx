class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentTime: (new Date()).toLocaleString('ko')
        }
    }
    updateCurrentTime(){
        setInterval(()=>{
            this.setState({currentTime: (new Date()).toLocaleString('ko')})
        }, 1000)
    }
    render(){
        this.updateCurrentTime()
        return (
            <div style={{'color':'#0000ff'}}>{this.state.currentTime}</div>
        ) 
    }
        
}

ReactDOM.render(
    <Clock />,
    document.getElementById('content')
)