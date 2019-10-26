import React, {useEffect} from 'react';

const Page = ({children, className2 = ''}) => {

  

  useEffect(() => {
    window.keepalive();
  }, [])
  return (
      <header className={`App-header ${className2}`}>
          
          {children}
      </header>
    );
}

export default Page;
