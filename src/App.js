import './App.css';
import React from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/seach-box.component.jsx';

import { page } from './usecases/page';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  
  componentDidMount() {
        page.getMonsters((users) => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = page.filterMonsters(monsters, searchField);

    return (
      <div className="App">
        <SearchBox
          placeholder='search monster'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      
      </div>
    );
  }
}
export default App;

