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
        return (
            <div>
                <a href={url}>{this.props.label}</a>
                <br />
            </div>
        )
    }
}