import styled from 'styled-components/native';
import normalize from 'react-native-normalize';


export const ModalContainer = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center ;
  border-radius: ${normalize(7)}px;
  background-color: 'rgba(0,0,0,0.8)';
`;

export const TemperatureContainer = styled.View`
  height: 50%;
  width: 90%;
  align-items: center;
  justify-content: center;

  border-radius: ${normalize(7)}px;
  background-color: ${(props) => props.color ||"#FFF"};
`;