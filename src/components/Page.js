import React, {useEffect} from 'react';
import {isDev} from '../utils/global'
const Page = ({children, className2 = ''}) => {
  
  
  useEffect(() => {
    window.keepalive();
  }, [])
  return (
      <header className={`${isDev ? 'dev' : '' } App-header ${className2}`}>
          
          {children}
      </header>
    );
}

export default Page;
