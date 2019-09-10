import React from 'react';
import './Button.css'
export default ({label, onClick, big}) => {
    return (
        <div className={`button ${big ? 'big' : ''}`} onClick={onClick}>
          {label}
        </div>
    );
}