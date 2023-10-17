// VideoPlayer.js

import React from 'react';

const VideoPlayer = ({ user, isLocal }) => {
  const videoStyle = {
    width: isLocal ? '340px' : '1280px',
    height: isLocal ? '200px' : '720px',
    border: '1px solid #ccc',
  };

  return (
    <div style={videoStyle}>
      <video
        ref={(node) => {
          if (node && user.videoTrack) {
            user.videoTrack.play(node);
          }
        }}
        autoPlay
      />
    </div>
  );
};

export default VideoPlayer;
