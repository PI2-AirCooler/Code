import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import {
  AlertContainer, 
  ListItemContainer,
  IconContainer,
  TextContainer,
  TextView
} from './style';

function AlertComponent() {

    const renderItem = () => (
        <ListItemContainer>
            <IconContainer>
                <Icon name="report" size={30} color={"#7c7c7c"}/>
            </IconContainer>
            <TextView>
                <TextContainer>
                    Iniciando resfriamento até 2°C
                </TextContainer>
            </TextView>
        </ListItemContainer>
    );

  return (
    <AlertContainer>
        <FlatList
            data={[1, 2, 3]}
            renderItem={renderItem}
        />
    </AlertContainer>
  );
}

export default AlertComponent;
