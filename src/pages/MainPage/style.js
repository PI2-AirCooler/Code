import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StatusConteiner = styled.View`
  width: 100%;
  height: ${normalize(70)}%;
  align-items: center;
  background-color: ${(props) => props.color || "#14445F"};
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: ${normalize(75)}%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "#14445F"};
`;

export const InfosContainer = styled.View`
  margin-left: ${normalize(10)}px;
  width: 100%;
  flex-direction: row;
  height: ${normalize(20)}%;
  align-items: center;
  background-color: ${(props) => props.color || "#14445F"};
`;

export const RightButton = styled.TouchableOpacity`
  width: 15%;
  height: ${normalize(60)}%;
  justify-content: center;
  align: left;
  align-items: center;
  borderWidth:0.5;
  borderRadius:50;
  background-color: ${(props) => props.color || "#F2F2F2"};
`;

export const InfosView = styled.View`
  width: 80%;
  padding-left: ${normalize(10)}px;
  height: ${normalize(80)}%;
  justify-content: space-around;
  background-color: ${(props) => props.color || "#14445F"};
`;

export const TextBodyDescription = styled.Text`
  color: #ffff;
  align-text: left;
  font-size: ${normalize(15)}px;
  padding-right: 10px;
  `;