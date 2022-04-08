import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const ButtonContainer = styled.TouchableOpacity`
  width: 70%;
  height: ${normalize(50)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${normalize(7)}px;
  background-color: ${(props) => props.color || "#57B0E2"};
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: ${normalize(20)}px;
  font-weight: bold;
`;
