import React, { useState, useEffect, useContext } from 'react';
import { io } from "socket.io-client";
import { Image, FlatList, ActivityIndicator } from 'react-native';
import ScreenTemplate from '../../components/ScreenTemplate';
import SocketContext from '../../context';
import normalize from 'react-native-normalize';
import {
  Container,
  ListItemContainer,
  ImageContainer,
  TextView,
  TextContainer
} from './style';

function SearchDevices({navigation}) {
  const { deviceInfo } = useContext(SocketContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  const { 
    setTemperature,
    setStatus,
    setConnected,
  } = useContext(SocketContext);
  
  const devicesList = [
    {
      deviceName: deviceInfo,
    }
  ];

  useEffect(() => {
    async function sleep () {
      await new Promise(resolve => setTimeout(resolve, 10000));
    };
    sleep();
    setIsLoading(false);
  }, []);

  handleNextPage = () => {
    const socket = io("http://137.184.125.41:3333");
    
    socket.on("event", (data) => {
      if (data.hasOwnProperty("temperature")) {
        setTemperature(data.temperature);
      }
      if (data.hasOwnProperty("status")){
        setStatus(data.status);
      }
      console.log(data);
    });
    console.log('SocketProvider');
    setConnected(true);
    // navigateTo('MainPage');
  };

  const renderItem = ({ item }) => (
    <ListItemContainer onPress={handleNextPage}>
        <ImageContainer>
          <Image 
            source={require('../../../assets/cooler.png')} 
            style={{height: normalize(60), width: normalize(60)
          }}/>
        </ImageContainer>
        <TextView>
            <TextContainer>
                {item.deviceName}
            </TextContainer>
        </TextView>
    </ListItemContainer>
  );
  return (
    <ScreenTemplate 
      MainText={"Procurando"}
      buttonColor="#57B0E2"
      buttonText="Concluído"
      hasButton={false}
      onPress={() => {}}
    >
      <Container>
        {isLoading ? (
          <ActivityIndicator/>
        ) : (
          <FlatList
              data={devicesList}
              renderItem={renderItem}
          />
        )}
      </Container>
    </ScreenTemplate>
  );
}

export default SearchDevices;