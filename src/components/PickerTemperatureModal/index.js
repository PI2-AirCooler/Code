
import React from 'react';
import {
  ModalContainer,
  TemperatureContainer,
} from './style';
import { Modal, Alert, View }from 'react-native';
import { ScrollPicker } from 'react-native-value-picker';

function PickerTemperatureModal({
  modalVisible,
  setModalVisible,
  pickedValue,
  setPickedValue
}) {

  var list = []
  for(let i = 2; i <= 30; i++) {
    list.push({
      value: i,
      label: `${i}°C`,
    })
  }

  const handleItemSelected = (value) => {
    setPickedValue(value)
    console.log(value);
    setModalVisible(false);
  };

  return (
    <Modal 
      animationType="slide"
      style={{alignItems: 'center', justifyContent: 'center'}}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <ModalContainer>
        <TemperatureContainer>
          <ScrollPicker
            currentValue={pickedValue}
            list={list}
            onItemPress={(value) => handleItemSelected(value)}
            labelColor="#212121"
            separatorColor="#E5E5E5"
            selectedColor="#2D9CDB"
          />
        </TemperatureContainer>
      </ModalContainer>
    </Modal>
  );
}

export default PickerTemperatureModal;
