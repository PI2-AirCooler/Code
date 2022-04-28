import React, { useState, useEffect, createContext } from 'react';
import { io } from "socket.io-client";

const SocketContext = createContext({});

export const SocketProvider = ( { children } ) => {
  const [connected, setConnected] = useState(false);
  const [temperature, setTemperature] = useState('X');
  const [status, setStatus] = useState('Preparando...');
  const [event, setEvent] = useState({});
  useEffect(() => {
    // const socket = io("http://10.0.2.2:3333");
    const socket = io("http://137.184.125.41:3333");
    socket.on("event", (data) => {
      if (data.hasOwnProperty("temperature")) {
        setTemperature(data.temperature);
      }
      if (data.hasOwnProperty("status")){
        setStatus(data.status);
      }
      console.log(data);
    });
    console.log('SocketProvider');
  }, []);
  
  return (
    <SocketContext.Provider value={{connected, setConnected, temperature, status}}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;