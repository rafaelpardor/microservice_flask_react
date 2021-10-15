import axios from 'axios';

import { Component } from 'react';
import './App.css';

class App extends Component {
  // The constructor: https://reactjs.org/docs/react-component.html#constructor
  // The constructor for a React component is called before it is mounted.
  // When implementing the constructor, you should call `super(props)` before 
  // any other statement. Otherwise, `this.props` will be undefined in the constructor,
  // which can lead to bugs.
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE}/users`)
    .then((res) => { this.setState({ users: res.data.data.users }); })
    .catch((err) => { console.error(err); });
  }

  render() {
    return (
      <div>
        <h1>All users</h1>
        <br/>
        {
          this.state.users.map(user => {
            return (
              <p
                key={user.id}
              >
                 {user.id}. <i>{user.username}</i>, {user.email} <br/>
              </p>
            )
          })
        }
      </div>
    )  
  }
}

export default App;
