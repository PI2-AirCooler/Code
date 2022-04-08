import React from 'react';
import ScreenTemplate from '../../components/ScreenTemplate';
import {
  Container,
  TextBody,
} from './style';
import Button from '../../components/Button';

function Connection({navigation}) {
  return (
    <ScreenTemplate 
      MainText={"Conexão"}
      buttonColor="#57B0E2"
      buttonText="Concluído"
      onPress={() => {}}
    >
      <Container>
        <TextBody>
          Teste
        </TextBody>
      </Container>
    </ScreenTemplate>
  );
}

export default Connection;