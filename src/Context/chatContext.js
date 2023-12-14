import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <ChatContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
