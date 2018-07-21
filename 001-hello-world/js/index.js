let h1 = React.createElement('h1', null, 'Hello world');
let facebookLink = React.createElement('a', {href: 'https://www.facebook.com'}, 'Facebook')
let rootDiv = React.createElement('div', null, h1, h1, h1, facebookLink, h1);

class HelloWorld extends React.Component{
    render(){
        return React.createElement(
            'h1', 
            // {id: this.props.id, title: this.props.title}, 
            this.props,
            'Hello ' + this.props.frameworkname + ' world');
    }
}

ReactDOM.render(
    React.createElement(
        'div', 
        null,
        React.createElement(
            HelloWorld, 
            {id:'ember', frameworkname:'Ember.js', title:'A framework for creating ambitious web applications.'}),
            React.createElement(
                HelloWorld, 
                {id:'backbone', frameworkname:'Backbone.js', title:'Backbone.js is gives structure to web applications.'})
    ),
    document.getElementById('content')
);