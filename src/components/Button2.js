import React from 'react';
import './Button.css'
export default ({label, onClick, big, type=''}) => {
    return (
        <div className={`button ${big ? 'big' : ''} ${type}`} onClick={onClick}>
          {label}
        </div>
    );
}