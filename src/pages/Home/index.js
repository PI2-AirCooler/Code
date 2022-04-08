import React from 'react';
import {
  Container,
  TitleText,
  AddDeviceButton,
  AddDeviceButtonText,
} from './style';

function Home({navigation}) {

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <Container>
      <TitleText>AcquaCooler</TitleText>
      <AddDeviceButton onPress={() => navigateTo('Connection')}>
        <AddDeviceButtonText>+ Adicionar Dispositivo</AddDeviceButtonText>
      </AddDeviceButton>
    </Container>
  );
}

export default Home;
