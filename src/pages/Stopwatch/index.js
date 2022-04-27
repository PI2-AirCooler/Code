import React from 'react';
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

    /* const timer = setInterval(function(){
    //     alert("Olá"); 
    //   }, 20000) */

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <ScreenTemplate 
      MainText={"Resfriando"}
      buttonColor="#BC2A2A"
      buttonText="Interromper"
      onPress={() => navigateTo("MainPage")}
    >
      <Container>
          <StopwatchView>
          <Icon name="alarm" size={normalize(35)} color={"#7c7c7c"}/>
            <StopwatchText>
                00:00
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