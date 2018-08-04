class SliderButtons extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSlide = this.handleSlide.bind(this)
        this.state = {sliderValue: 0}
    }
    handleSlide(event, ui){
        this.setState({sliderValue: ui.value})
    }
    handleChange(value){
        return ()=> {
            $('#slider').slider('value', this.state.sliderValue + value)

            this.setState({sliderValue: this.state.sliderValue + value})
        }
    }
    componentDidMount(){
        $('#slider').on('slide',this.handleSlide)
    }
    componentWillUnmount(){
        $('#slide').off('slide', this.handleSlide)
    }
    render(){
        return (
            <div>
                <div>
                    <span>Value: {this.state.sliderValue}</span>
                </div>
                <button disabled={(this.state.sliderValue < 1)}
                    className="btn btn-warning"
                    onClick={this.handleChange(-1)}>
                    1 less ({this.state.sliderValue - 1 < 0 ? 0 : this.state.sliderValue - 1})
                </button>
                <button disabled={(this.state.sliderValue > 99)}
                    className="btn btn-primary"
                    onClick={this.handleChange(1)}>
                    1 more ({this.state.sliderValue + 1 > 100 ? 100 : this.state.sliderValue + 1})
                </button>
            </div>
        )
    }
}