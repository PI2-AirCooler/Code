import React from 'react';
import {
  Container,
  TitleText,
  AddDeviceButton,
  AddDeviceButtonText,
} from './style';

function Home() {
  return (
    <Container>
      <TitleText>AcquaCooler</TitleText>
      <AddDeviceButton>
        <AddDeviceButtonText>+ Adicionar Dispositivo</AddDeviceButtonText>
      </AddDeviceButton>
    </Container>
  );
}

export default Home;
