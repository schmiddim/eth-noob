import logo from './logo.svg';
import './App.css';
import {greeterContract} from './EthereumSetup';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'loading',
    };

  }

  componentDidMount() {
    greeterContract.methods.greet().call().then(result => {
      this.setState({
        greeting: result,
      });
    });
  }

  render() {
    const {greeting} = this.state;

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
              <h1>{greeting}</h1>
          </header>
        </div>
    );
  }

}

export default App;
