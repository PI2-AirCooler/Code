import React from 'react';
import { Image, FlatList } from 'react-native';
import ScreenTemplate from '../../components/ScreenTemplate';
import {
  Container,
  ListItemContainer,
  ImageContainer,
  TextView,
  TextContainer
} from './style';
import normalize from 'react-native-normalize';

function SearchDevices({navigation}) {

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  const devicesList = [
    {
      id: 'IDDDFRI123-2',
      deviceName: 'AcquaCooler-VVV',
    },
    {
      id: 'IDDDFRI123-3',
      deviceName: 'AcquaCooler-VVV2',
    },
  ]

  const renderItem = ({ item }) => (
    <ListItemContainer onPress={() => navigateTo('MainPage')}>
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
        <FlatList
            data={devicesList}
            renderItem={renderItem}
        />
      </Container>
    </ScreenTemplate>
  );
}

export default SearchDevices;