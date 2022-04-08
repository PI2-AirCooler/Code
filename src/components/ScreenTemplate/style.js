import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  /* background-color: #2D9CDB; */
`;

export const HeaderContainer = styled.View`
  flex: 0.15;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: #F2F2F2;
`;

export const TitleText = styled.Text`
  color: #2D9CDB;
  font-size: ${normalize(35)}px;
  font-weight: bold;
  position: absolute;
`;

export const BodyContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
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
