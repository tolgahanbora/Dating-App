import { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AC from 'agora-chat'
import "../Style/chatPageStyle.css"
import { BsFillSendFill } from "react-icons/bs";

export default function AgoraChat({ token, peerId }) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const appKey = "71957724#1119022";
    const conn = new AC.connection({
        appKey: appKey,
    });

    const onTextMessageReceived = (message) => {
        setMessages(prevMessages => [...prevMessages, message]);
    };

    useEffect(() => {
        conn.addEventHandler("connection&message", {
            onConnected: () => {
                document
                    .getElementById("log")
                    .appendChild(document.createElement("div"))
                    .append("Connect success !");
            },
            onDisconnected: () => {
                document
                    .getElementById("log")
                    .appendChild(document.createElement("div"))
                    .append("Logout success !");
            },
            onTextMessage: onTextMessageReceived,
            onError: (error) => {
                console.log("on error", error);
            },
        });

        if (peerId) {
            conn.open({
                user: token.user.id,
                token: null
            });
        }

        return () => {
            conn.removeEventHandler("connection&message");
        }
    }, [peerId, token.user.id]);

    const sendMessage = async () => {
        let peerMessage = message;
        let option = {
            chatType: "singleChat",
            type: "txt",
            to: peerId,
            msg: peerMessage,
        };
        let msg = AC.message.create(option);
        conn
            .send(msg)
            .then((res) => {
                console.log("send private text success");
                setMessage('');
            })
            .catch(() => {
                console.log("send private text fail");
            });
    }

    return (
        <div style={{ width: '400px', height: '714px', border: '1px solid #E8E8E8', borderRadius: '10px', padding: '20px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '20px' }}>Chats</h2>
                <div id='log'></div>
            </div>
            <div>
                <div style={{ overflowY: 'auto', flex: 1 }}>
                    {messages.map((msg, index) => (
                        <div key={index} style={{ marginBottom: '10px', alignSelf: msg.userId === token.user.id ? 'flex-end' : 'flex-start' }}>
                            <div style={{ background: msg.userId === token.user.id ? '#FFC107' : '#EEEEEE', padding: '10px', borderRadius: '10px', maxWidth: '70%', wordWrap: 'break-word' }}>
                                {msg.message}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="inputGroupContainer">
                <InputGroup className="mb-3" id="inputChatgroup" >
                    <Form.Control
                        id="peerMessage"
                        placeholder="Type Something..."
                        aria-label="Type Something..."
                        aria-describedby="send_peer_message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button variant="outline-secondary" id="send_peer_message" className="d-flex align-items-center" onClick={sendMessage}>
                        <span style={{ backgroundColor: "#FEACAD" }}>
                            <BsFillSendFill color='white' size={20} style={{ backgroundColor: "#FEACAD" }} />
                        </span>
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
}
