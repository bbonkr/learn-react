const React = require('react')
const ReactDOM = require('react-dom')
const Router = require('./router.jsx')
const mapping = {
    '#profile': (
        <div>
            Profile (<a href="#">Home</a>)
        </div>
    ),
    '#account': (
        <div>
            Account (<a href="#">Home</a>)
        </div>
    ),
    '*': (
        <div>
            Dashboard
            <br />
            <a href="#profile">Profile</a>
            <br />
            <a href="#account">Account</a>
        </div>
    )
}

ReactDOM.render(
    <Router mapping={mapping} />,
    document.getElementById('content')
)
