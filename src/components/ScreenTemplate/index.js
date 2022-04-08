
import React from 'react';
import {
  Container,
  TitleText,
  HeaderContainer,
  BodyContainer
} from './style';

function ScreenTemplate({MainText, children}) {
  return (
    <Container>
      <HeaderContainer>
        <TitleText>
          {MainText}
        </TitleText>
      </HeaderContainer>
      <BodyContainer>
       {children}
      </BodyContainer>
    </Container>
  );
}

export default ScreenTemplate;
