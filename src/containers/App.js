import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      })
  }

  onSearchChange = (event) => { // use function expression instead of function declaration due to 'this' // this would refer to the event if using function declation
    this.setState({searchfield: event.target.value})
  }
  render() {
    const filteredRobots = this.state.robots.filter((robot) => { 
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if(this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );  
    }
    
  }
}

export default App;