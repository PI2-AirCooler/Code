import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const StatusConteiner = styled.View`
  width: 100%;
  height: ${normalize(60)}%;
  align-items: center;
  borderBottomRightRadius: 25px;
  borderBottomLeftRadius: 25px;
  background-color: ${(props) => props.color || "#14445F"};
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: ${normalize(58)}%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "#14445F"};
`;

export const InfosContainer = styled.View`
  paddingLeft: ${normalize(20)}px;
  width: 100%;
  height: ${normalize(30)}%;
  align-items: flex-start;
  justify-content: space-around;
  background-color: ${(props) => props.color || "#14445F"};
`;

export const TextBodyDescription = styled.Text`
  color: #ffff;
  font-size: ${normalize(15)}px;
  padding-right: 10px;
  `;