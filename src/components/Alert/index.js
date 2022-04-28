import React, { useContext } from 'react';
import SocketContext from '../../context';
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
    const { alertList } = useContext(SocketContext);

    const renderItem = ({item}) => (
        <ListItemContainer>
            <IconContainer>
                <Icon name="report" size={30} color={"#7c7c7c"}/>
            </IconContainer>
            <TextView>
                <TextContainer>
                    {item.message}
                </TextContainer>
            </TextView>
        </ListItemContainer>
    );

  return (
    <AlertContainer>
        <FlatList
            data={alertList}
            renderItem={renderItem}
        />
    </AlertContainer>
  );
}

export default AlertComponent;
