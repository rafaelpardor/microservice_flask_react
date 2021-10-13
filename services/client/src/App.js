<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
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
>>>>>>> master
}

export default App;
