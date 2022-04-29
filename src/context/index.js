import React, { useState, useEffect, createContext } from 'react';

import PushNotification from "react-native-push-notification"; 

const SocketContext = createContext({});

export const SocketProvider = ( { children } ) => {
  const [connected, setConnected] = useState(false);
  const [temperature, setTemperature] = useState('25');
  const [status, setStatus] = useState('Preparando AcquaCooler');
  const [wishTemp, setWishTemp] = useState(2);
  const [alertList, setAlertList] = useState([]);
  const [deviceInfo, setDeviceInfo] = useState('AcquaCooler-VVV');

  useEffect(() => {
    PushNotification.createChannel({
      channelId: "AcquaCoolerChannel", // (required)
      channelName: "AcquaCoolerChannel", // (required)
    });
  }, []);


  useEffect(() => {
    let newAlert = {message: `Iniciando resfriamento até ${wishTemp} °C`}
    setAlertList([newAlert, ...alertList])
  }, [wishTemp]);
  
  useEffect(() => {
    let newAlert;
    if (status.toLowerCase() === "erro"){
      newAlert = {message: "ERRO: dispositivo em posição incorreta!"}
      setAlertList([newAlert, ...alertList])
    }
    if (status.toLowerCase() === "pronto"){
      newAlert = {message: "Dispositivo pronto! Insira sua bebida!"}
      setAlertList([newAlert, ...alertList])
    }
    if (status.toLowerCase() === "erro" || status.toLowerCase() === "pronto") {
      try {
        let notificationConfig = {
          channelId: "AcquaCoolerChannel",
          title: "AcquaCooler",
          message: newAlert.message,
        }
        PushNotification.localNotification(notificationConfig);
      } catch(e){
        console.log(e);
      }
    }
  }, [status]);

  return (
    <SocketContext.Provider value={{
      connected,
      setConnected,
      temperature,
      setTemperature,
      status,
      setStatus,
      wishTemp,
      setWishTemp,
      alertList,
      setAlertList,
      deviceInfo,
      setDeviceInfo,
    }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;