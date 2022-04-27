import React, { useState } from 'react';
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
    // const [minutes, setMinutes] = useState(4)
    const [seconds, setSeconds] = useState(120)
    var convert = require('convert-seconds');


    const timer = setInterval ((async) => {
        // setSeconds(seconds-1)
        // if (minutes === 0 && seconds === 0){
        //     clearTimeout(timer)
        // }
        // while (minutes !== 0 && seconds === 0){
        //     setMinutes(minutes-1)
        //     setSeconds(59)
        // }
        // console.log("ANDALOGO"); 
    }, 10000)

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <ScreenTemplate 
      MainText={"Resfriando"}
      buttonColor="#BC2A2A"
      buttonText="Interromper"
      onPress={() => clearInterval(timer)}
    >
      <Container>
          <StopwatchView>
          <Icon name="alarm" size={normalize(35)} color={"#7c7c7c"}/>
            <StopwatchText>
               {/* {`${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`} */}
               {/* {`${convert(seconds).minutes}`} */}
               {seconds}
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