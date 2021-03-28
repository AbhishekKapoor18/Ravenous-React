import React from 'react';
import './App.css';
import '../BusinessList/BusinessList';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
      </div>
    )
  }
}
export default App;
