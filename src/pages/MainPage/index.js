import React from 'react';
import {
  Container,
 
} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenTemplate from '../../components/ScreenTemplate'
Icon.loadFont();

function MainPage({navigation}) {

  const navigateTo = (screenName) => {
    navigation.navigate(screenName)
  }  

  return (
    <Container>
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
        />
    </Container>
  );
}

export default MainPage;
