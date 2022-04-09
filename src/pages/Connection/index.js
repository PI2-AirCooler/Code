import React from 'react';
import ScreenTemplate from '../../components/ScreenTemplate';
import {
  Container,
  TextBodyMain,
  TextBodyDescription
} from './style';
import Button from '../../components/Button';

function Connection({navigation}) {

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <ScreenTemplate 
      MainText={"Conexão"}
      buttonColor="#57B0E2"
      buttonText="Concluído"
      onPress={() => navigateTo("Settings")}
    >
      <Container>
        <TextBodyMain>
          Ligar o Bluetooth
        </TextBodyMain>
        <TextBodyDescription>
          Necessário para conectar o seu celular
          ao AcquaCooler
        </TextBodyDescription>
      </Container>
    </ScreenTemplate>
  );
}

export default Connection;