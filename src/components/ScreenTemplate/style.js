import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.View`
  flex: 0.15;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.color || "#F2F2F2"};
`;

export const TitleTextView = styled.View`
  flex: 1;
  align-items: center;
  width: 50%;
  justify-content: center;
  background-color: ${(props) => props.color || "#000"};
`;


export const TitleText = styled.Text`
  color:${(props) => props.color || "#2D9CDB"};
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

export const FooterContainer = styled.View`
  flex: 0.15;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "#F2F2F2"};
`;

export const LeftButton = styled.TouchableOpacity`
  width: 15%;
  height: ${normalize(30)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${normalize(7)}px;
  background-color: ${(props) => props.color || "#F2F2F2"};
`;

export const RightButton = styled.TouchableOpacity`
  width: 15%;
  height: ${normalize(30)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${normalize(7)}px;
  background-color: ${(props) => props.color || "#F2F2F2"};
`;

export const BlankView = styled.View`
  width: 15%;
  height: ${normalize(50)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${normalize(7)}px;
  background-color: ${(props) => props.color || "#F2F2F2"};
`;



