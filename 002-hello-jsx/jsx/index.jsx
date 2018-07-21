class HelloWorld extends React.Component {
    getTitle(name){
        return 'Hello ' + name + ' world!!!'; 
    }
    render(){
        return (
            <h1 {...this.props}>{this.getTitle(this.props.frameworkname)}</h1>
        )
    }
}

ReactDOM.render(
    <div>
        <HelloWorld 
            id="ember"
            title="Ember.js is ...."
            frameworkname="Ember.js"/>
        <HelloWorld 
            id="backbone"
            title="Backbone.js is ...."
            frameworkname="Backbone.js"/>
        <HelloWorld 
            id="react"
            title="React.js is ...."
            frameworkname="React.js"/>                        
    </div>,
    document.getElementById('content')
)