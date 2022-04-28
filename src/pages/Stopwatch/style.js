import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    padding: ${normalize(15)}px;
    align-items: center;
`;

export const TextView = styled.View`
    flex: 0.5;
    background-color: #f2f2f2;
    width: 100%;
`;

export const TextBodyDescription = styled.Text`
  color: #212121;
  padding: 0px 10px;
  font-size: ${normalize(18)}px;
`;

export const StopwatchView = styled.View`
    flex: 0.5;
    flex-direction: row;
    background-color: #f2f2f2;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    margin-right: ${normalize(35)}px;
`;

export const StopwatchText = styled.Text`
  color: #212121;
  font-size: ${normalize(30)}px;
`;
