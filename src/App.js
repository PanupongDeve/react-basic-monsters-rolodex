import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';


class App extends Component {

  constructor() {
    super();

    this.state = {
      string: 'Hello Panupong'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick={() => this.setState({ string: 'Hello BOBA'})} >Change Text</button>
        </header>
      </div>
    );
  }
}
export default App;
