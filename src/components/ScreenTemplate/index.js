
import React from 'react';
import {
  Container,
  TitleText,
  HeaderContainer,
  BodyContainer,
  FooterContainer,
  LeftButton,
  RightButton,
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
  hasButton = true,
  onPressRightButton,
  hasLeftButton = false,
  hasRightButton = false,
  blankViewColor,
  onBack,
  MainTextColor,
  RightButtonBackgroundColor,
  RightButtonIconColor,
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
          <TitleText color={MainTextColor}>
            {MainText}
          </TitleText>

        </TitleTextView>
        {hasRightButton ? (
          <RightButton onPress={onPressRightButton} color={RightButtonBackgroundColor}>
            <Icon name="settings" size={30} color={RightButtonIconColor ? RightButtonIconColor : "#2D9CDB"}/>
          </RightButton>
        ) : (
          <BlankView color={blankViewColor}>
          </BlankView>
        )}
      </HeaderContainer>
      <BodyContainer>
       {children}
      </BodyContainer>
      <FooterContainer color={footerColor}>
        {hasButton ? 
        (<Button
            buttonColor={buttonColor}
            buttonText={buttonText}
            onPress={onPress}
          />
        ) : null}
      </FooterContainer>
    </Container>
  );
}

export default ScreenTemplate;
