import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    messages: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/messages`)
      .then(res => {
        const messages = res.data;
        this.setState({ messages });
        console.log(res)
      })
  }

  render() {
    return (
      <div>
        <h1>Page</h1>

        <ul>
          { this.state.messages.map(message => <li>{message.text}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
