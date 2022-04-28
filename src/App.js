import React from 'react';
import Routes from './Routes';
import { SocketProvider } from '../context';

function App() {
  return (
    <SocketProvider>
      <Routes />  
    </SocketProvider>
  );
}

export default App;
