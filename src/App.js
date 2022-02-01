import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';


class App extends Component {

  constructor() {
    super();

    this.state = {

      monsters: [
        {
          name: "Frankestein"
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Zombie'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1>{monster.name}</h1>)
        }
      </div>
    );
  }
}
export default App;
