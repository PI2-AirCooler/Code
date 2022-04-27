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
    // Inicia um valor pros segundos
    const [seconds, setSeconds] = useState(10);
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
    }, [seconds]);
    
  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <ScreenTemplate 
      MainText={"Resfriando"}
      buttonColor="#BC2A2A"
      buttonText="Interromper"
      onPress={() => {clearInterval(intervalRef.current)}}
    >
      <Container>
          <StopwatchView>
          <Icon name="alarm" size={normalize(35)} color={"#7c7c7c"}/>
            <StopwatchText>
               {/* {${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}} */}
               {/* {${convert(seconds).minutes}} */}
               {`${seconds}:${seconds}`}
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

export default Stopwatch;