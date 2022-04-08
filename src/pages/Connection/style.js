import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* background-color: #2D9CDB; */
`;

export const TextBody = styled.Text`
  color: #000;
  font-size: ${normalize(35)}px;
  position: absolute;
`;
