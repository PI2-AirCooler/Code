import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: ${normalize(15)}px;
  /* justify-content: center; */
`;

export const TextBodyMain = styled.Text`
  color: #212121;
  font-size: ${normalize(20)}px;
  font-weight: bold;
  margin-top: ${normalize(50)}px;
`;

export const TextBodyDescription = styled.Text`
  color: #212121;
  font-size: ${normalize(15)}px;
`;
