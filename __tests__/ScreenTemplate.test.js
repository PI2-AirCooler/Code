/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import ScreenTemplate from '../src/components/ScreenTemplate';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 
 it('ScreenTemplate renders correctly', () => {
   const tree = renderer
     .create(<ScreenTemplate />)
     .toJSON();
   expect(tree).toMatchSnapshot();
 });