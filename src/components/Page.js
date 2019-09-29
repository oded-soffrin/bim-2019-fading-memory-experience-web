import React, {useEffect} from 'react';

export default  ({children}) => {

  useEffect(() => {
    window.keepalive();
  }, [])
  return (
      <header className="App-header">
          {children}
      </header>
    );
}
