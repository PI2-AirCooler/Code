
import React from 'react';
import {
  Container,
  TitleText,
  HeaderContainer,
  BodyContainer,
  FooterContainer
} from './style';
import Button from '../Button';

function ScreenTemplate({
  MainText,
  children,
  headerColor,
  footerColor,
  buttonColor,
  buttonText,
  onPress,
  hasButton,
}) {
  return (
    <Container>
      <HeaderContainer color={headerColor}>
        <TitleText>
          {MainText}
        </TitleText>
      </HeaderContainer>
      <BodyContainer>
       {children}
      </BodyContainer>
      <FooterContainer color={footerColor}>
        <Button
          buttonColor={buttonColor}
          buttonText={buttonText}
          onPress={onPress}
        />
      </FooterContainer>
    </Container>
  );
}

export default ScreenTemplate;
