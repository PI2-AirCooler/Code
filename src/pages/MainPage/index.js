import React from 'react';
import { Image } from 'react-native'
import {
  ImageContainer,
  InfosContainer,
  StatusConteiner,
  TextBodyDescription
} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenTemplate from '../../components/ScreenTemplate'
import AlertComponent from '../../components/Alert'
Icon.loadFont();

function MainPage({
  navigation, 
  StatusBackgroundColor
}) {

  const navigateTo = (screenName) => {
    navigation.navigate(screenName)
  };  

  return (
    <ScreenTemplate
    headerColor={'#14445F'}
    MainText='AcquaCooler'
    MainTextColor='#FFFFFF'
    blankViewColor={'#14445F'}
    RightButtonBackgroundColor={'#14445F'}
    LeftButtonBackgroundColor={'#14445F'}
    hasRightButton={true}
    RightButtonIconColor={'#FFFFFF'}
    onPressRightButton= {() => navigateTo('Settings')}
    hasButton={true}
    buttonText={"Iniciar"}
    onPress={() => navigateTo('Settings')}
    >
      <StatusConteiner color={StatusBackgroundColor}>
        <ImageContainer color={StatusBackgroundColor}>
          <Image 
            source={require('../../../assets/cooler.png')} 
            style={{height: 225, width: 225
          }}/>
        </ImageContainer>
        <InfosContainer color={StatusBackgroundColor}>
          <TextBodyDescription>
            Temperatura Atual: 
          </TextBodyDescription>
          <TextBodyDescription>
            Status: 
          </TextBodyDescription>
          <TextBodyDescription>
            Temperatura desejada: 
          </TextBodyDescription>
        </InfosContainer>
      </StatusConteiner>
      <AlertComponent></AlertComponent>
    </ScreenTemplate>
  );
}

export default MainPage;
