import React, {useState} from 'react';
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
  const [modalVisible, setModalVisible] = useState(false);
  const [pickedValue, setPickedValue] = useState(2);
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
      onBack={() => navigateTo('Home')}
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
            <DataText>{pickedValue}°C</DataText>
          </TemperatureButton>
        </InputContainer>
      </Container>
      <PickerTemperatureModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pickedValue={pickedValue}
        setPickedValue={setPickedValue}
      />
    </ScreenTemplate>
  );
}

export default Settings;
