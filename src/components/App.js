import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youTube from "../apis/youtube";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit('react.js');
  };

  onTermSubmit = async (term) => {
    const res = await youTube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
