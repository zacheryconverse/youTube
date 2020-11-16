import React from 'react'
import VideoItem from './VideoItem';

export default function VideoList({ videos }) {
  return (
    <div>
      VideoList
      {videos ? videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} />
      )) :
      'VideoList'}
    </div>
  )
};
