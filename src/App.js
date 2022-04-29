import React from 'react';
import Routes from './Routes';
import { SocketProvider } from './context';
import { LogBox } from 'react-native';

function App() {
  LogBox.ignoreAllLogs();//Ignore all log notifications
  return (
    <SocketProvider>
      <Routes />  
    </SocketProvider>
  );
}

export default App;
