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

    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
        page.getMonsters((users) => this.setState({ monsters: users }))
  }


  // handleChange(e) {
  //   this.setState({ searchField: e.target.value })
  // }

  handleChange = (stateName) => (e) => {
    this.setState({
      [stateName]: e.target.value
    })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = page.filterMonsters(monsters, searchField);

    return (
      <div className="App">
        <h1 className='title-header'> Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange('searchField')}
        />
        <CardList monsters={filteredMonsters} />
      
      </div>
    );
  }
}
export default App;

