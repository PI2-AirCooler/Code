import React, {useState} from 'react';
import {
  Container,
  DescriptionText,
  InputContainer,
  NameInput,
  DataText,
  TemperatureButton,
} from './style';
import ScreenTemplate from '../../components/ScreenTemplate';
import normalize from 'react-native-normalize';
import PickerTemperatureModal from '../../components/PickerTemperatureModal';

function Settings({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [pickedValue, setPickedValue] = useState(2);

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <ScreenTemplate
      MainText={"Configurações"}
      buttonColor="#BC2A2A"
      buttonText="Desconectar"
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
            Ativadas
          </DataText>
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
