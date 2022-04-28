import React, { useState, useEffect, createContext } from 'react';
import { io } from "socket.io-client";

const SocketContext = createContext({});

export const SocketProvider = ( { children } ) => {
  const [connected, setConnected] = useState(false);
  const [temperature, setTemperature] = useState('25');
  const [status, setStatus] = useState('Preparando AcquaCooler');
  const [wishTemp, setWishTemp] = useState(2);
  const [event, setEvent] = useState({});
  useEffect(() => {
    const socket = io("http://10.0.2.2:3333");
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
    <SocketContext.Provider value={{connected, setConnected, temperature, status, wishTemp, setWishTemp}}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;