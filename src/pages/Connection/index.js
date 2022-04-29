import React, { useEffect } from 'react';
import ScreenTemplate from '../../components/ScreenTemplate';
import BleManager from "react-native-ble-manager";
import {
  Container,
  TextBodyMain,
  TextBodyDescription
} from './style';

function Connection({navigation}) {
  useEffect(() => {
    BleManager.start({ showAlert: false }).then(() => {
      // Success code
      console.log("Module initialized");
    });
    BleManager.enableBluetooth()
    .then(() => {
      // Success code
      console.log("The bluetooth is already enabled or the user confirm");
      // navigateTo('SearchDevices');
    })
    .catch((error) => {
      // Failure code
      console.log("The user refuse to enable bluetooth");
    });
  }, []);

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <ScreenTemplate 
      MainText={"Conexão"}
      buttonColor="#57B0E2"
      buttonText="Concluído"
      onPress={() => navigateTo("SearchDevices")}
    >
      <Container>
        <TextBodyMain>
          Ligar o Bluetooth
        </TextBodyMain>
        <TextBodyDescription>
          Necessário para conectar o seu celular
          ao AcquaCooler
        </TextBodyDescription>
      </Container>
    </ScreenTemplate>
  );
}

export default Connection;