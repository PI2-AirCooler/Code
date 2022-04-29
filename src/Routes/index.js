import React, { useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Connection from '../pages/Connection';
import Settings from '../pages/Settings';
import MainPage from '../pages/MainPage';
import Stopwatch from '../pages/Stopwatch';
import SearchDevices from '../pages/SearchDevices';
import SocketContext from '../context';

export default function Routes() {
  const Stack = createNativeStackNavigator();
  const { connected } = useContext(SocketContext);

  const ConnectedHome = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Stopwatch"
          component={Stopwatch}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  const DisconnectedHome = () =>{
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Connection"
          component={Connection}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SearchDevices"
          component={SearchDevices}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  const AppRoutes = () => {
    if (connected) {
      return <ConnectedHome />;
    } else {
      return <DisconnectedHome />;
    }
  };

  return (
    <NavigationContainer>
      {AppRoutes()}
    </NavigationContainer>
  );
}