
import React from 'react';
import {
  ButtonContainer,
  ButtonText,
} from './style';

function Button({buttonColor, buttonText, onPress}) {
  return (
    <ButtonContainer 
      color={buttonColor}
      onPress={onPress}
    >
      <ButtonText>
        {buttonText}
      </ButtonText>
    </ButtonContainer>
  );
}

export default Button;
