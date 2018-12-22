const React = require('react')
class Login extends React.Component {
    render() {
        return (
            <div>
                <h3>Login</h3>
                <div className="btn-group">
                    <button type="button" className="btn btn-Primary">
                        Login
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}

module.exports = Login
