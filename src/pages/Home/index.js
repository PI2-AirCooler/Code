import React from 'react';
import {
  Container,
  TitleText
} from './style';
import ScreenTemplate from '../../components/ScreenTemplate';

function Home({navigation}) {

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <ScreenTemplate
      headerColor="#2D9CDB"
      footerColor="#2D9CDB"
      buttonColor="#57B0E2"
      buttonText="+ Adicionar dispositivo"
      blankViewColor="#2D9CDB"
      onPress={() => navigateTo('Connection')}
    >
      <Container>
        <TitleText>AcquaCooler</TitleText>
      </Container>
    </ScreenTemplate>
  );
}

export default Home;
