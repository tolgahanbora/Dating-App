import { useState, useEffect } from 'react'

import VideoRoom from "../Components/VideoRoom"

function Chat({ token }) {
    const [joined, setJoined] = useState(false)

    return (

        <div>
            {token ? (
                <div>
                    {/* <p>Durum: {user.online ? 'Çevrimiçi' : 'Çevrimdışı'}</p> */}
                </div>
            ) : (
                <p>Kullanıcı oturumu açmamış</p>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <div style={{ marginLeft: "55px" }} >Welcome, <b>{token.user.user_metadata.first_name}</b> </div>
                {!joined && (
                    <button class="btn btn-danger rounded-1" id='premiumbtn' onClick={() => setJoined(true)}>Join Room </button>
                )}
                {joined && (
                    <VideoRoom />
                )}
            </div>
        </div>

    )
}

export default Chat