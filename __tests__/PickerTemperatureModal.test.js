/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import PickerTemperatureModal from '../src/components/PickerTemperatureModal';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 
 it('PickerTemperatureModal renders correctly', () => {
   const tree = renderer
     .create(<PickerTemperatureModal />)
     .toJSON();
   expect(tree).toMatchSnapshot();
 });
 