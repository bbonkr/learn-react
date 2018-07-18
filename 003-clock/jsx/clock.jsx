class Clock extends React.Component{
    constructor(props){
        super(props)
        this.updateCurrentTime()
        this.state = {
            currentTime : new Date()
        }
    }
    updateCurrentTime(){
        setInterval(()=>{
            this.setState({
                currentTime: new Date()
            })
        }, 1000)
    }
    render(){
        
        return (
            <div>
                <Analog time={this.state.currentTime} />
                <Digital time={this.state.currentTime} />
            </div>
        )
    }
}