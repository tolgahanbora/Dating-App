import React, { useEffect, useState } from 'react';
import AgoraRTC from "agora-rtc-sdk-ng";
import VideoPlayer from './VideoPlayer';

const options = {
  appId: "1edac649805444669dd4c53dbb75fda2",
  channel: 'Coupling',
  token: "007eJxTYGAKy7hU65KS+H9uxCttWeXViinu7O6PL12MDj4TnKlzsUKBwTA1JTHZzMTSwsDUxMTEzMwyJcUk2dQ4JSnJ3DQtJdGIc7NuakMgI4Pd/AoGRigE8TkYnPNLC3Iy89IZGABFYR8j",
};

const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8",
});

function VideoRoom() {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);
  const [matchedUser, setMatchedUser] = useState(null);

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
      setUsers((previousUsers) => [...previousUsers, user]);
    }
  };

  const handleUserLeft = (evt) => {
    setUsers((previousUsers) => previousUsers.filter(user => user.uid !== evt.uid));
  };

  useEffect(() => {
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);

    let tracks;

    client.join(options.appId, options.channel, options.token, null)
      .then((uid) => Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), Promise.resolve(uid)]))
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        setUsers((previousUsers) => [...previousUsers, { uid, videoTrack, audioTrack }]);
        client.publish(tracks);
      });


    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }

      client.off("user-published", handleUserJoined);
      client.off("user-left", handleUserLeft);
      client.unpublish(tracks).then(() => client.leave());
    };
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 410px)" }}>
      {users.map((user) => (
        <VideoPlayer key={user.uid} user={user} />
      ))}

      <VideoPlayer key="local" user={{ uid: "local", videoTrack: localTracks[1] }} />
    </div>
  );
}

export default VideoRoom;
