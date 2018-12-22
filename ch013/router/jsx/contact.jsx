const React = require('react')

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        this.props.router.push('about')
    }

    render() {
        return (
            <div>
                <h3>Contact Us</h3>
                <div className="form-group">
                    <label htmlFor="emailAddress" className="control-label">
                        Email
                    </label>
                    <input
                        ref="emailAddress"
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        placeholder="Your email address"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="control-label">
                        Message
                    </label>
                    <textarea
                        rows="6"
                        ref="message"
                        id="message"
                        name="message"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <button
                        className="btn btn-primary"
                        type="button"
                        role="button"
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

module.exports = Contact
