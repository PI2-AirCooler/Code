import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const AlertContainer = styled.View` 
    flex: 1;
    width: ${normalize(100)}%;
    background-color: #f2f2f2;
`;

export const ListItemContainer = styled.View` 
    height: ${normalize(80)}px;
    margin: 10px 30px 0px 30px;
    background-color: #e5e5e5;
    border-radius: 15px;
    flex-direction: row;
`;

export const IconContainer = styled.View` 
    flex: 0.15;
    align-items: center;
    justify-content: center;
    padding-left: 11px;
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
`;