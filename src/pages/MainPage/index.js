import React from 'react';
import Image from 'react-native'
import {
  Container,
  ImageContainer,
  InfosContainer,
  StatusConteiner,
  RightButton,
  InfosView,
  TextBodyDescription
} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenTemplate from '../../components/ScreenTemplate'
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
    hasButton={false}
    // footerColor={'#141414'}
    >
      <StatusConteiner color={StatusBackgroundColor}>
        <ImageContainer color={StatusBackgroundColor}>
          {/* <Image source={require('./assets/cooler.png')}/>  */}
        </ImageContainer>
        <InfosContainer color={StatusBackgroundColor}>
          <InfosView>
            <TextBodyDescription>
              Temperatura Atual: 
            </TextBodyDescription>
            <TextBodyDescription>
              Status: 
            </TextBodyDescription>
          </InfosView>
          <RightButton>
            <Icon name="play-arrow" size={60} color={"#2D9CDB"}/>
          </RightButton>
        </InfosContainer>
      </StatusConteiner>
    </ScreenTemplate>
  );
}

export default MainPage;
