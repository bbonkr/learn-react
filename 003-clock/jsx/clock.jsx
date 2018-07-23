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
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(e){
        console.log('componentDidMount')
        console.log('DOM node: ', ReactDOM.findDOMNode(this))
    }
    componentWillReceiveProps(newProps){
        console.log('componentWillReceiveProps')
        console.log('new Property: ', newProps)
    }
    shouldComponentUpdate(newProps, newState){
        console.log('shouldComponentUpdate')
        console.log('new Property: ', newProps)
        console.log('new States', newState)
        return true;
    }
    componentWillUpdate(newProps, newState){
        console.log('componentWillUpdate')
        console.log('new Propery: ', newProps)
        console.log('new State: ', newState)
    }
    componentDidUpdate(oldProps, oldState){
        console.log('componentDidUpdate')
        console.log('old Property: ', oldProps)
        console.log('old state: ', oldState)
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
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