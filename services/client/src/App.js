import axios from 'axios';

import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.getUsers();
  }
  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE}/users`)
    .then((res) => {console.log(res.data.data);})
    .catch((err) => {console.log(err);});
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default App;
