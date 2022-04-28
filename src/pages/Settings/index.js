import React, { useState, useContext} from 'react';
import SocketContext from '../../context';
import {
  Container,
  DescriptionText,
  InputContainer,
  NameInput,
  DataText,
  TemperatureButton,
} from './style';
import { Switch } from 'react-native';
import ScreenTemplate from '../../components/ScreenTemplate';
import normalize from 'react-native-normalize';
import PickerTemperatureModal from '../../components/PickerTemperatureModal';

function Settings({navigation}) {
  const { wishTemp, setWishTemp} = useContext(SocketContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  
  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <ScreenTemplate
      MainText={"Configurações"}
      buttonColor="#BC2A2A"
      buttonText="Desconectar"
      hasLeftButton={true}
      onBack={() => navigateTo('MainPage')}
      onPress={() => navigateTo('Connection')}
    >
      <Container>
        <DescriptionText>Alterar nome</DescriptionText>
        <InputContainer>
          <NameInput 
            placeholder="Nome"
            style={{fontSize: normalize(20)}}
          />
        </InputContainer>
        <DescriptionText>Notificações</DescriptionText>
        <InputContainer>
          <DataText>
            {isEnabled ? 'Ativadas' : 'Desativadas'}
          </DataText>
          <Switch
            trackColor={{ false: "#767577", true: "#85c6ea" }}
            thumbColor={isEnabled ? "#2D9CDB" : "#a3a2a4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </InputContainer>
        <DescriptionText>Temperatura Desejada</DescriptionText>
        <InputContainer>
          <TemperatureButton onPress={() => setModalVisible(!modalVisible)}>
            <DataText>{wishTemp}°C</DataText>
          </TemperatureButton>
        </InputContainer>
      </Container>
      <PickerTemperatureModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pickedValue={wishTemp}
        setPickedValue={setWishTemp}
      />
    </ScreenTemplate>
  );
}

export default Settings;
