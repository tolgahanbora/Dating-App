/* eslint-disable no-self-compare */
import { useEffect, useState } from 'react'
import AgoraRTC from "agora-rtc-sdk-ng"
import VideoPlayer from './VideoPlayer';





function VideoRoom({token,peerId}) {

  const options = {
    appId: "1edac649805444669dd4c53dbb75fda2",
  
    channel: 'Coupling', // your agora channel
  
  

  };

  const client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
  })

  const [users, setUsers] = useState([])
  const [localTracks, setLocalTracks] = useState([])

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType)

    if (mediaType === "video") {
      setUsers(peerId)
    }

    if (mediaType === "audio") {

    }

  }

  const handleUserLeft = (evt) => {
    // Kullanıcı çıkış yaptığında yapılması gereken işlemler burada gerçekleştirilir
    // Örneğin, kullanıcıyı users dizisinden kaldırabilirsiniz
    setUsers((previousUsers) => previousUsers.filter(user => peerId !== evt.uid));
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
          audioTrack,
          isLocal: true, // Add this flag
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
    <div className='container'>

    
    <div style={{ display: "flex", flexDirection: "column", alignItems:"start", justifyContent:"start" }}>
      {users.map((user) => (
        <VideoPlayer key={user.uid} user={user} isLocal={user.isLocal} />
      ))}
    </div>
    </div>
  )

}

export default VideoRoom