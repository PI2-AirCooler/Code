import React, { useState, useEffect, useRef, useContext } from 'react';
import normalize from 'react-native-normalize';
import ScreenTemplate from '../../components/ScreenTemplate';
import AlertComponent from '../../components/Alert'
import Icon from 'react-native-vector-icons/MaterialIcons';
import SocketContext from '../../context';
import PushNotification from "react-native-push-notification"; 
import {
  Container,
  TextView,
  TextBodyDescription,
  StopwatchView,
  StopwatchText
} from './style';

function Stopwatch({ navigation }) {
  const [seconds, setSeconds] = useState(5);
  const { alertList, setAlertList } = useContext(SocketContext)
  const [time, setTime] = useState(0);
  const intervalRef = useRef(); 
      
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  
  useEffect(() => {
    if (seconds <= 0) {
      let newAlert = {message: "Bebida resfriada!"};
      setAlertList([newAlert, ...alertList]);
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
      handleStop();
      
    }
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    setTime(`${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`);
  }, [seconds]);
    
  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current)
    setSeconds(0)
    setTime("00:00")
    navigateTo('MainPage')
  };

  return (
    <ScreenTemplate 
      MainText={"Resfriando"}
      buttonColor="#BC2A2A"
      buttonText="Interromper"
      onPress={() => {handleStop()}}
      hasLeftButton={true}
      onBack={() => handleStop()}
    >
      <Container>
          <StopwatchView>
          <Icon name="alarm" size={normalize(35)} color={"#7c7c7c"}/>
            <StopwatchText>
              {`${time}`}
            </StopwatchText>
          </StopwatchView>
        <TextView>
            <TextBodyDescription>
              Tempo restante aproximado para a sua bebida atingir a temperatura desejada.
            </TextBodyDescription>
        </TextView>
        <AlertComponent></AlertComponent>
      </Container>
    </ScreenTemplate>
  );
}

export default Stopwatch