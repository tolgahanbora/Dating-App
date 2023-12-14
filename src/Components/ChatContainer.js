import { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { io } from "socket.io-client";


import "../Style/chatPageStyle.css"

import { BsFillSendFill } from "react-icons/bs";


function ChatContainer({ token, peerId, socket }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    console.log('peerId:', peerId);


    if (peerId) {

      console.log('Socket connected successfully', socket); // Yeni satır
 


      socket.on('connect', () => {
        socket.emit('joinRoom', { userId: token.user.id, peerId });
      });

      socket.on('message', (msg) => {
        setMessages(prevMessages => [...prevMessages, msg]);
        console.log('Received message:', msg);
      });

      return () => {
        socket.emit('leaveRoom', { userId: token.user.id, peerId });
        socket.disconnect();
      };
    }
  }, [peerId, token.user.id]);

  const sendMessage = () => {
    if (socket) {
      socket.emit('sendMessage', { userId: token.user.id, peerId, message });
      console.log('Message sent:', message);
      setMessage('');
    }
  };


  return (
    <div style={{ width: '400px', height: '714px', border: '1px solid #E8E8E8', borderRadius: '10px', padding: '20px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ marginBottom: '20px' }}>Chats</h2>
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
            id="ocinput"
            placeholder="Type Something..."
            aria-label="Type Something..."
            aria-describedby="basic-addon2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="outline-secondary" id="button-addon2" className="d-flex align-items-center" onClick={sendMessage}>
            <span style={{ backgroundColor: "#FEACAD" }}>
              <BsFillSendFill color='white' size={20} style={{ backgroundColor: "#FEACAD" }} />
            </span>
          </Button>

        </InputGroup>
      </div>
    </div>
  );


}
export default ChatContainer;