import React from 'react';
import {
  Container,
  TitleText
} from './style';
import ScreenTemplate from '../../components/ScreenTemplate';
import Button from '../../components/Button';

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
      onPress={() => navigateTo('Connection')}
    >
      <Container>
        <TitleText>AcquaCooler</TitleText>
      </Container>
    </ScreenTemplate>
  );
}

export default Home;
