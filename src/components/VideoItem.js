import React from 'react'

export default function VideoItem({ video }) {
  return (
    <div>
      {video ? video.snippet.title : 'VideoItem'}
    </div>
  );
};
