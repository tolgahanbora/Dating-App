import React, { useEffect, useRef } from 'react';

function VideoPlayer({ user }) {
  const ref = useRef();

  useEffect(() => {
    if (user.videoTrack) {
      user.videoTrack.play(ref.current);
    }

    return () => {
      if (user.videoTrack) {
        user.videoTrack.stop();
        user.videoTrack.close();
      }
    };
  }, [user.videoTrack]);

  return (
    <div>
      Uid: {user.uid}
      <div ref={ref} style={{ width: "400px", height: "400px" }}></div>
    </div>
  );
}

export default VideoPlayer;
