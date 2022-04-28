import React, { useState, useEffect, createContext } from 'react';
import { io } from "socket.io-client";

const SocketContext = createContext({});

export const SocketProvider = ( { children } ) => {
  const [connected, setConnected] = useState(false);
  const [temperature, setTemperature] = useState('X');
  const [event, setEvent] = useState({});
  useEffect(() => {
    const socket = io("http://10.0.2.2:3333");
    socket.on("event", (data) => {
      if (data.hasOwnProperty("temperature")) {
        setTemperature(data.temperature);
      }
      console.log(data);
    });
    console.log('SocketProvider');
  }, []);
  
  return (
    <SocketContext.Provider value={{connected, setConnected, temperature}}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;