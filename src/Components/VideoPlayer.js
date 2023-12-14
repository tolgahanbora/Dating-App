import React, { useEffect, useRef } from 'react'


function VideoPlayer({ user, isLocal }) {

  const ref = useRef()

  useEffect(() => {
    user.videoTrack.play(ref.current)
  }, [user.videoTrack])

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <span>Uid: {user.uid}</span>
      </div>
      <div ref={ref} style={{ width: "1080px", height: "720px" }}>
      </div>
    </div>
  )
}

export default VideoPlayer 