import styled from 'styled-components';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: ${normalize(15)}px;
  background-color: #F2F2F2;
  align-items: center;
`;

export const DescriptionText = styled.Text`
  color: #000;
  font-size: ${normalize(15)}px;
  align-self: flex-start;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin: ${normalize(10)}px;
  height: ${normalize(60)}px;
  border-radius: ${normalize(7)}px;
  padding-left: ${normalize(15)}px;
  justify-content: space-between;
  align-items: center ;
  align-self: center;
  background-color: #E5E5E5;
`;

export const NameInput = styled.TextInput`
  flex: 1;
`;

export const DataText = styled.Text`
  color: #000;
  font-size: ${normalize(20)}px;
  padding-left: ${normalize(6)}px;
`;

export const TemperatureButton = styled.TouchableOpacity`
  /* width: 100%;
  height: 100%; */
  flex: 1;
  justify-content: center;
  padding-left: ${normalize(6)}px;
`;