import styled from 'styled-components';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #2D9CDB;
`;

export const TitleText = styled.Text`
  color: #FFF;
  font-size: ${normalize(35)}px;
  font-weight: bold;
`;

