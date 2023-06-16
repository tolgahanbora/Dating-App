/* eslint-disable no-self-compare */
import { useEffect, useState } from 'react'
import AgoraRTC from "agora-rtc-sdk-ng"
import VideoPlayer from './VideoPlayer';

const options = {
  appId: "1edac649805444669dd4c53dbb75fda2",

  channel: 'Coupling', // your agora channel

  token: "007eJxTYIhf09Kz6r6q/TuXU8trn8+bX3yitTysRLpdL37Lpjjm9i4FBsPUlMRkMxNLCwNTExMTMzPLlBSTZFPjlKQkc9O0lESjiQ49KQ2BjAxvLgUzMzJAIIjPweCcX1qQk5mXzsAAAC+oIlI=", // use null or skip if using app in testing mode

};

const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8",
})

function VideoRoom() {

  const [users, setUsers] = useState([])
  const [localTracks, setLocalTracks] = useState([])

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user,mediaType)

    if(mediaType === "video") {
      setUsers((previousUsers) => [...previousUsers, user])
    }

    if(mediaType === "audio") {
      
    }

  }

  const handleUserLeft = (evt) => {
    // Kullanıcı çıkış yaptığında yapılması gereken işlemler burada gerçekleştirilir
    // Örneğin, kullanıcıyı users dizisinden kaldırabilirsiniz
    setUsers((previousUsers) => previousUsers.filter(user => user.uid !== evt.uid));
  }

 

  useEffect(() => {
    client.on("user-published", handleUserJoined)
    client.on("user-left", handleUserLeft)
    let tracks

    client.join(options.appId, options.channel, options.token, null)
    .then((uid) => Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), Promise.resolve(uid)]))
    .then(([tracks, uid]) => {
      const [audioTrack, videoTrack] = tracks;
      setLocalTracks(tracks)
      setUsers((previousUsers) => [...previousUsers, {
        uid,
        videoTrack,
        audioTrack
      }]);
      client.publish(tracks);
    });
    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop()
        localTrack.close()
      }

      client.off("user-published", handleUserJoined)
      client.off("user-left", handleUserLeft)
      client.unpublish(tracks).then(() => client.leave()) 
    }
  }, [])



  return ( 
    <div style={{display: "grid",gridTemplateColumns: "repeat(2, 410px)" }}>
      {users.map((user)  => (
        <VideoPlayer key={user.uid} user={user} />
      ))}
    </div>
  )

}

export default VideoRoom