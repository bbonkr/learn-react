const React = require('react')

class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let post = this.props.route.posts.find(
            el => el.slug === this.props.params.id
        )
        return (
            <div>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <p>
                    <a href={post.link} target="_blank">
                        Continue reading ...
                    </a>
                </p>
            </div>
        )
    }
}

module.exports = Post
