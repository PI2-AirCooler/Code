import React from 'react';
import ScreenTemplate from '../../components/ScreenTemplate';
import {
  Container,
  TextBody,
} from './style';

function Connection() {
  return (
    <ScreenTemplate MainText={"Conexão"}>
      <Container>
        <TextBody>
          Teste
        </TextBody>
      </Container>
    </ScreenTemplate>
  );
}

export default Connection;