import styled from 'styled-components/native';
import normalize from 'react-native-normalize';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2D9CDB;
`;

export const TitleText = styled.Text`
  color: #FFF;
  font-size: ${normalize(35)}px;
  font-weight: bold;
  position: absolute;
`;

export const AddDeviceButton = styled.TouchableOpacity`
  width: 70%;
  height: ${normalize(50)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${normalize(7)}px;
  margin-bottom: ${normalize(-500)}px;
  background-color: #57B0E2
`;

export const AddDeviceButtonText = styled.Text`
  color: #FFF;
  font-size: ${normalize(20)}px;
  font-weight: bold;
`;
