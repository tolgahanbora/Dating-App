// VideoPlayer.js

import React from 'react';

const VideoPlayer = ({ user, isLocal }) => {
  const videoStyle = {  
    width: isLocal ? '1920px' : '300px',
    height: isLocal ? '1080px' : '120px',
    marginTop: isLocal ? 3 : 0,
    border: '1px solid #ccc',
    borderRadius: 14
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
