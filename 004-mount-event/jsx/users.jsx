class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
        console.log(props)
    }
    componentDidMount(){
        fetch(this.props['data-url'])
            .then((response) => response.json())
            .then((users) => this.setState({users: users}))
    }
    render(){
        return (
        <div className="container">
            <h1>List of Users</h1>
            <table className="table table-striped table-condensed table-bordered table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Ip Address</th>
                </tr>
            </thead>
            <tbody>{this.state.users.map(user => 
                <tr key={user.id}>
                    <td>{user.firstName} {user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.ipAddress}</td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
        )
    }
}