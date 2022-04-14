
import React from 'react';
import {
  Container,
  TitleText,
  HeaderContainer,
  BodyContainer,
  FooterContainer,
  LeftButton,
  BlankView,
  TitleTextView,
} from './style';
import Button from '../Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

function ScreenTemplate({
  MainText,
  children,
  headerColor,
  footerColor,
  buttonColor,
  buttonText,
  onPress,
  hasLeftButton = false,
  blankViewColor = '#F2F2F2',
  onBack
}) {
  return (
    <Container>
      <HeaderContainer color={headerColor}>
        {hasLeftButton ? (
          <LeftButton onPress={onBack}>
            <Icon name="arrow-back" size={30} color="#2D9CDB" />
          </LeftButton>

        ) : (
          <BlankView color={blankViewColor}>
          </BlankView>
        )}
        <TitleTextView>
          <TitleText>
            {MainText}
          </TitleText>

        </TitleTextView>
        <BlankView color={blankViewColor}>
        </BlankView>
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
