import { useState } from "react"

import VideoRoom from "../Components/VideoRoom"

function Profile({ token }) {
  const [joined, setJoined] = useState(false)

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ marginLeft: "55px" }} >Welcome, {token.user.user_metadata.first_name} </div>
      <div style={{ marginLeft: "55px" }}>Mail: {token.user.email} </div>
      {!joined && (
        <button class="btn btn-danger rounded-1" id='premiumbtn' onClick={() => setJoined(true)}>Join Room </button>
        )}
    {joined && (
      <VideoRoom />
    )}


    </div>
  )
}

export default Profile