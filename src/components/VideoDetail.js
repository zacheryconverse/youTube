import React from "react";

export default function VideoDetail({ video }) {
  if (!video) return <div>Loading...</div>;
  return (
    <div>
      <div className='ui embed'>
        <iframe title={video.snippet.title} src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
      </div>
      <div className="ui segment"></div>
      <h1 className="ui header">{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
}
