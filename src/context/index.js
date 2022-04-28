import { createContext } from 'react';

const SocketContext = createContext({});

export const SocketProvider = ( { children } ) => {
  
  return (
    <SocketContext.Provider>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;