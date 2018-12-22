const React = require('react')
const { Link } = require('react-router')

class Posts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                <ol>
                    {this.props.route.posts.map((post, index) => (
                        <li key={post.slug}>
                            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

module.exports = Posts
