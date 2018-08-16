import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }
  onSearchChange = (event) => { // use function expression instead of function declaration due to 'this'
  const filteredRobots = this.state.robots.filter((robot) => { // this would refer to the event if using function declation
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  });
  console.log(event.target.value);
    console.log(filteredRobots);
  }
  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={this.state.robots} />
      </div>
    );  
  }
}

export default App;