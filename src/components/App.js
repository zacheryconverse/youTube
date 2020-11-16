import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youTube from '../apis/youtube';

class App extends Component {

  onTermSubmit = (term) => {
    youTube.get('/search', {
      params: {
        q: term
      }
    })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
