import React, { useEffect, useRef } from 'react'


function VideoPlayer({user,isLocal }) {
  
  const videoStyle = {
    width: isLocal ? '300px' : '410px', // Adjust sizes as needed
    height: isLocal ? '200px' : '300px', // Adjust sizes as needed
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

export default VideoPlayer 