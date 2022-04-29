import React, { useState, useEffect, createContext } from 'react';
import { io } from "socket.io-client";
import PushNotification from "react-native-push-notification"; 

const SocketContext = createContext({});

export const SocketProvider = ( { children } ) => {
  const [connected, setConnected] = useState(false);
  const [temperature, setTemperature] = useState('25');
  const [status, setStatus] = useState('Preparando AcquaCooler');
  const [wishTemp, setWishTemp] = useState(2);
  const [alertList, setAlertList] = useState([]);
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

  useEffect(() => {
    let newAlert = {message: `Iniciando resfriamento até ${wishTemp} °C`}
    setAlertList([newAlert, ...alertList])
  }, [wishTemp]);
  
  useEffect(() => {
    if (status.toLowerCase() === "erro"){
      let newAlert = {message: "ERRO: dispositivo em posição incorreta!"}
      setAlertList([newAlert, ...alertList])
      let notificationConfig = {
        channelId: "AcquaCoolerChannel",
        title: "AcquaCooler",
        message: newAlert.message,
        data: {},
        message: "Erro"
      }
      PushNotification.localNotification(notificationConfig) 
    }
    if (status.toLowerCase() === "pronto"){
      let newAlert = {message: "Dispositivo pronto! Insira sua bebida!"}
      setAlertList([newAlert, ...alertList])
    }
  }, [status]);

  return (
    <SocketContext.Provider value={{connected, setConnected, temperature, status, wishTemp, setWishTemp, alertList, setAlertList}}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;