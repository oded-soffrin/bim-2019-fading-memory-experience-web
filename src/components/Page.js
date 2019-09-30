import React, {useEffect} from 'react';

const Page = ({children}) => {

  

  useEffect(() => {
    window.keepalive();
  }, [])
  return (
      <header className="App-header">
          
          {children}
      </header>
    );
}

export default Page;
