import { useState, useEffect } from 'react'
import { Modal, Form } from "react-bootstrap"
import { io } from "socket.io-client";

import QuestionGameCard from '../Components/QuestionGameCard'
import ChatContainer from '../Components/ChatContainer';
import VideoRoom from "../Components/VideoRoom"

import { supabase } from '../lib/supabaseClient';
import AC from 'agora-chat'


import { BiWorld } from 'react-icons/bi';
import { BsGenderAmbiguous } from 'react-icons/bs';



function Chat({ token }) {
    const [joined, setJoined] = useState(false)
    const [showWorldModal, setShowWorldModal] = useState(false);
    const [showGenderModal, setShowGenderModal] = useState(false);

    const [socket, setSocket] = useState()
    const [peerId, setPeerId] = useState();

    const [selectedFreeCountry, setSelectedFreeCountry] = useState('');
    const [selectedPremiumCountry, setSelectedPremiumCountry] = useState('');

    const openWorldModal = () => setShowWorldModal(true);
    const closeWorldModal = () => setShowWorldModal(false);

    const openGenderModal = () => setShowGenderModal(true);
    const closeGenderModal = () => setShowGenderModal(false);

    const handleFreeCountryChange = (event) => {
        setSelectedFreeCountry(event.target.value);
    }

    const handlePremiumCountryChange = (event) => {
        setSelectedPremiumCountry(event.target.value);
    }


    useEffect(() => {
        const newSocket = io('http://localhost:8000/'); // Sunucu URL'sini buraya ekleyin
        setSocket(newSocket);
    
        return () => newSocket.disconnect();
      }, []);

 


    const setPeerUser = async () => {
        try {
            let { data: profiles, error } = await supabase
                .from('profiles')
                .select('*')
                .eq("acount", true)
                .neq("id", token?.user.id)

            if (!error && profiles.length > 0) {
                socket.emit("peerId", profiles)
            }
        } catch (error) {
            console.error("Error fetching peer user:", error);
        }
    }






    const joinerRoom = async () => {
        setJoined(true);

        await setPeerUser()
    };



    useEffect(() => {
          setPeerUser();
     
    }, [])



    const [showNextButton, setShowNextButton] =  useState(false);

    const handleNextClick = async () => {
        // Implement the logic for "Next" button click action here
        // For example, you can reset the state and find a new peer.
        setShowNextButton(false);
        setJoined(false);
        setPeerId(null);




        if (peerId !== null) {

            await setPeerUser();
      
        }
    };

    const handleStopClick = async () => {

        setJoined(false);
        setPeerId(null);
        setShowNextButton(false);
    };



    return (
        <div className='container'>
            {token ? (
                <div>
                    {/* <p>Durum: {user.online ? 'Çevrimiçi' : 'Çevrimdışı'}</p> */}
                </div>
            ) : (
                <p>Kullanıcı oturumu açmamış</p>
            )}

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {!joined && (
                        <div style={{ position: 'relative', width: '920px', height: '560px', background: '#f0f0f0', borderRadius: '10px' }}>
                            <button className="btn btn-danger rounded-1" id='videoButton' style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }} onClick={joinerRoom}>Join Room</button>

                            {showNextButton && (
                                <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <button className="btn btn-danger rounded-1" id='videoButton' onClick={handleNextClick}>Next</button>
                                </div>
                            )}

                            {joined && (
                                <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <button className="btn btn-danger rounded-1" id='videoButton' onClick={handleStopClick}>Stop</button>
                                </div>
                            )}

                            <div style={{ position: 'absolute', top: '10px', right: '10px', width: '48px', height: '48px', background: '#FC838E', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: "pointer" }} onClick={openWorldModal}>
                                <span style={{ color: "white", backgroundColor: "#FC838E", padding: "5px !important" }}>
                                    <BiWorld style={{ color: "white", backgroundColor: "transparent", padding: "5px", width: "34px", height: "34px" }} />

                                </span>
                            </div>
                            <div style={{ position: 'absolute', top: '10px', right: '70px', width: '48px', height: '48px', backgroundColor: '#FC838E', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: "pointer" }} onClick={openGenderModal}>
                                <span style={{ color: "white", backgroundColor: "#FC838E", padding: "5px !important" }}>
                                    <BsGenderAmbiguous style={{ color: "white", backgroundColor: "transparent", padding: "5px", width: "34px", height: "34px" }} />
                                </span>

                            </div>
                        </div>
                    )}
                {/*    {joined && (
                        <VideoRoom token={token} peerId={peerId} />
                    )}  */}

                    {/* Filter Modal */}
                    <Modal

                        show={showWorldModal}
                        onHide={closeWorldModal}
                        dialogClassName="filter-modal"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Country Filter</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='row'>
                                <h5>Free Country Filter</h5>
                                <div className='col'>
                                    <Form.Select value={selectedFreeCountry} onChange={handleFreeCountryChange}>
                                        <option value="">Select</option>
                                        <option value="country1">Country 1</option>
                                        <option value="country2">Country 2</option>
                                        {/* Diğer ülkeleri buraya ekleyin */}
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <h5>Premium Country Filter</h5>
                                <div className='col'>
                                    <Form.Select value={selectedPremiumCountry} onChange={handlePremiumCountryChange}>
                                        <option value="">Select</option>
                                        <option value="country3">Country 3</option>
                                        <option value="country4">Country 4</option>
                                        {/* Diğer ülkeleri buraya ekleyin */}
                                    </Form.Select>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className='row mt-5' >
                                <div className='col'>
                                    <button className="btn btn-danger rounded-1" id='videoButton' style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>Save</button>
                                </div>
                            </div>
                        </Modal.Footer>
                    </Modal>

                    <Modal

                        show={showGenderModal}
                        onHide={closeGenderModal}
                        dialogClassName="filter-modal"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Gender Filter</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='row'>
                                <h5>Free Gender Filter</h5>
                                <div className='col'>
                                    <Form.Select value={selectedFreeCountry} onChange={handleFreeCountryChange}>
                                        <option value="">Select</option>
                                        <option value="country1">Country 1</option>
                                        <option value="country2">Country 2</option>
                                        {/* Diğer ülkeleri buraya ekleyin */}
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <h5>Premium Gender Filter</h5>
                                <div className='col'>
                                    <Form.Select value={selectedPremiumCountry} onChange={handlePremiumCountryChange}>
                                        <option value="">Select</option>
                                        <option value="country3">Country 3</option>
                                        <option value="country4">Country 4</option>
                                        {/* Diğer ülkeleri buraya ekleyin */}
                                    </Form.Select>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className='row mt-5' >
                                <div className='col'>
                                    <button className="btn btn-danger rounded-1" id='videoButton' style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>Save</button>
                                </div>
                            </div>
                        </Modal.Footer>
                    </Modal>



                    <div className='row align-items-start justify-content-start'>

                        <div className='col-6 align-items-start justify-content-start' style={{ width: '305px', height: '140px', background: '#f0f0f0', borderRadius: '10px', marginTop: '10px' }}>

                        </div>
                        <div className='col-6'>
                            <QuestionGameCard />
                        </div>

                    </div>
                </div>

                <div style={{ flex: 1 }}>
                <div style={{ flex: 1 }}>
    {socket ? (
        <ChatContainer token={token} peerId={peerId} socket={socket} />
    ) : (
       <p>SoCKET not live</p>
    )}
</div>
                     {/* <AgoraChat token={token} peerId={peerId} /> */}
                </div>
            </div>
        </div>
    )
}

export default Chat;
