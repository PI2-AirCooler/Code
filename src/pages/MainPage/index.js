import React, { useContext } from 'react';
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenTemplate from '../../components/ScreenTemplate'
import AlertComponent from '../../components/Alert';
import SocketContext from '../../context';
import {
  ImageContainer,
  InfosContainer,
  StatusConteiner,
  TextBodyDescription
} from './style';
Icon.loadFont();

function MainPage({
  navigation, 
}) {
  const { 
    temperature,
    status,
    wishTemp
  } = useContext(SocketContext);
  
  const navigateTo = (screenName) => {
    navigation.navigate(screenName, )
  };  

  const getColor = () => {
    if (status.toLowerCase() === "pronto"){
      return "#013A26"
    } 
    else if (status.toLowerCase() === "erro"){
      return "#BC2A2A"
    }
    else {
      return '#14445F'
    }
  }

  const buttonAction = () => {
    if (status.toLowerCase() !== "pronto"){
        return () => {}
    }
    else{
      return navigateTo('Stopwatch')
    }
  }

  const getButtonColor = () => {
    if (status.toLowerCase() !== "pronto"){
      return "#CCC"
    }
    else {
      return "#57B0E2"
    }
  }

  return (
    <ScreenTemplate
    headerColor={getColor}
    buttonColor={getButtonColor}
    MainText='AcquaCooler'
    MainTextColor='#FFFFFF'
    blankViewColor={getColor}
    RightButtonBackgroundColor={getColor}
    LeftButtonBackgroundColor={getColor}
    hasRightButton={true}
    RightButtonIconColor={'#FFFFFF'}
    onPressRightButton= {() => navigateTo('Settings')}
    hasButton={true}
    buttonText={"Iniciar"}
    onPress={buttonAction}
    >
      <StatusConteiner color={getColor}>
        <ImageContainer color={getColor}>
          <Image 
            source={require('../../../assets/cooler.png')} 
            style={{height: 225, width: 225
          }}/>
        </ImageContainer>
        <InfosContainer color={getColor}>
          <TextBodyDescription>
            Temperatura Atual: {temperature} °C
          </TextBodyDescription>
          <TextBodyDescription>
            Status: {status}
          </TextBodyDescription>
          <TextBodyDescription>
            Temperatura desejada: {wishTemp} °C
          </TextBodyDescription>
        </InfosContainer>
      </StatusConteiner>
      <AlertComponent></AlertComponent>
    </ScreenTemplate>
  );
}

export default MainPage;
