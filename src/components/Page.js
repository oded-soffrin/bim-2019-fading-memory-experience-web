import React, {useEffect} from 'react';

const Page = ({children, className2 = '', styles}) => {


  useEffect(() => {
    window.keepalive();
  }, [])
  return (
      <header className={`App-header ${className2}`} style={styles}>
          
          {children}
      </header>
    );
}

export default Page;
