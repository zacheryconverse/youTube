import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youTube from "../apis/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('react.js');
  }, [])

  const onTermSubmit = async (term) => {
    const res = await youTube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  }

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
