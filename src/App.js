import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      greeting: 'Hello to everyone From Sai',
      users: [
        {
          id: 1,
          name: 'Saikarthik'
        },
        {
          id: 2,
          name: 'Pratul'
        },
        {
          id: 3,
          name: 'Pavan'
        }
      ],
      searchField: ''
    }
    // this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(respJson => this.setState({users: respJson}));
  }

  changeGreeting() {
    this.setState({
      greeting: 'Greeting modified'
    });
  }
  changeUser(index) {
    this.setState({
      users: [
        {
          id: 1,
          name: 'Saikarthik Parachi'
        },
        {
          id: 2,
          name: 'Pratul'
        },
        {
          id: 3,
          name: 'Pavan'
        }
      ]
    })
  }
  handleSearch = (e) => {
    this.setState({searchField: e.target.value});
  }
  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleSearch}/>
        <CardList name="test" monsters={filteredUsers}>
          <h1>example of a child</h1>
        </CardList>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.greeting}
          </p>
          <button onClick={() => this.changeGreeting()}>Change Greeting</button>
          <button onClick={() => this.changeUser(1)}>Change First User</button>
          <button onClick={() => this.changeUser(2)}>Change Second User</button>
          <button onClick={() => this.changeUser(3)}>Change Third User</button>
        </header>
        <div>
        { this.state.users.map(user => <h1 key={user.id}>{user.name}</h1>) }
        </div> */}
      </div>
    );
  }
}

export default App;
