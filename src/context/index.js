import React, { useState, useEffect, createContext } from 'react';
import { io } from "socket.io-client";
const SocketContext = createContext({});

export const SocketProvider = ( { children } ) => {
  const [connected, setConnected] = useState(false);
  const [event, setEvent] = useState({});
  
  useEffect(() => {
    const socket = io("http://10.0.2.2:3333");
    socket.on("event", (data) => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
      setEvent(data);
      console.log(data);
    });
    console.log('SocketProvider');
  }, []);
  
  return (
    <SocketContext.Provider value={{connected, setConnected}}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;