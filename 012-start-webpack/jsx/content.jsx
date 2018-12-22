const React = require("react");
const ReactDOM = require("react-dom");

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.prompt = "전자우편주소를 입력하세요.";
    }

    submit(event) {
        let emailAddress = this.refs.emailAddress;
        let comments = this.refs.comments;

        console.log(`emailAddress: ${emailAddress}`);
        console.log(`comments: ${comments}`);

        console.log(ReactDOM.findDOMNode(emailAddress).value);
        console.log(ReactDOM.findDOMNode(comments).value);
    }
    render() {
        return (
            <div className="well">
                <p>{this.prompt}</p>
                <div className="form-group">
                    <label htmlFor="emailAddress" className="control-label">
                        전자우편주소
                    </label>
                    <input
                        ref="emailAddress"
                        id="emailAddress"
                        name="emailAddress"
                        className="form-control"
                        type="email"
                        placeholder="johndoe@gmail.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="comments" className="control-label">
                        내용
                    </label>
                    <textarea
                        ref="comments"
                        id="comments"
                        name="comments"
                        className="form-control"
                        rows="3"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.submit}>
                        전송
                    </button>
                </div>
            </div>
        );
    }
}

module.exports = Content;
