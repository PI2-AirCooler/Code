import React, { useState, useEffect, useRef } from 'react';
import normalize from 'react-native-normalize';
import ScreenTemplate from '../../components/ScreenTemplate';
import AlertComponent from '../../components/Alert'
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  TextView,
  TextBodyDescription,
  StopwatchView,
  StopwatchText
} from './style';

function Stopwatch({navigation}) {
  const [seconds, setSeconds] = useState(240);
  const [time, setTime] = useState('04:00');
  const intervalRef = useRef(); 
      
    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setSeconds((t) => t - 1);
      }, 1000);
      return () => clearInterval(intervalRef.current);
    }, []);
    
    useEffect(() => {
      if (seconds <= 0) {
        clearInterval(intervalRef.current);
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