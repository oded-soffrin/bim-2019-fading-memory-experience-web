import React, { useEffect, useState } from 'react';
import Page from './Page'
import * as api from '../api';
import {getImageSrc} from '../utils/global'

export default () => {

    const [images, setImages] = useState([]);
    const [expanded, expand] = useState(-1);
    useEffect(() => {
        
        api.getGallery().then(res => {
            
            setImages(res.map(x => typeof(x) === 'object' ? x[0] : x))
        })
    }, []);
    
    const maybeExpanded = expanded > -1 && (
        <div className='fullScreen'>
            <div className='x' onClick={() => expand(-1)}>X</div>
            <img className='fullScreenImage' src={getImageSrc(expanded)} key={`fullscreen`} alt={`fullscreen`}/>
        </div>
    );

    
    return (
        <Page>
            {maybeExpanded}
            <p>Gallery page!</p>
            <div className='gallery'>
            {images.map((imgId, i) => {
                return <img onClick={() => expand(i)} className='galleryImage' src={getImageSrc(imgId)} key={`snapshot${i}`} alt={`snapshot${i}`}/>
            })}
            </div>
        </Page>
    );
}