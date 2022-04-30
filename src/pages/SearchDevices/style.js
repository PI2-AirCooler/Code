import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const ListItemContainer = styled.TouchableOpacity` 
    height: ${normalize(80)}px;
    margin: 10px 30px 0px 30px;
    background-color: #e5e5e5;
    border-radius: 15px;
    flex-direction: row;
`;

export const TextView = styled.View` 
    flex: 1;
    flex-direction: row;
`;

export const TextContainer = styled.Text` 
    font-size: ${normalize(15)}px; 
    align-self: center;
    color: #7c7c7c;
    margin-left: 10px;
`;

export const ImageContainer = styled.View` 
    flex: 0.2;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

