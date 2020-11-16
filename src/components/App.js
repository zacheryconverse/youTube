import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youTube from '../apis/youtube';

class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const res = await youTube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: res.data.items });
  };

  render() {
    const { videos } = this.state;
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={videos} />
      </div>
    );
  }
}

export default App;
