import React, { useState } from 'react';
import Page from './Page'
import Button from './Button2'
import * as api from '../api';
import { Link } from "react-router-dom";
import { getImageSrc} from '../utils/global'
import { useTranslation } from 'react-i18next';

import KeyboardedInput from 'react-touch-screen-keyboard';
import 'react-touch-screen-keyboard/lib/Keyboard.css'; // if you just want css


export default ({match}) => {

    const [mail, setMail] = useState('');
    const [mailStatus, setMailStatus] = useState(false);
    const {params: {imageId}} = match;
    const { t } = useTranslation();

    const onSendMail = () => {
        setMailStatus('sending');
        api.sendMail(mail, imageId).then(() => {
            setMailStatus('sent');
        })
    }

    let emailSection;

    if (mailStatus === 'sent') {
        emailSection = (
            <div>
                <p>Will do!</p>
                <Link to="/gallery">Take me to the gallery</Link>

            </div>
        );
    }


    else if (mailStatus === 'sending') {
        emailSection = <p>Saving...</p>
    } else {
        const CustomMapping = [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['z', 'x', 'c', 'v', 'b', 'n', 'm', '.com']
          ];
        emailSection = <div>
            <p>{t('PLEASE_MAIL')}</p>
            
            <div className='keyboard'>
                <KeyboardedInput
                    containerClassName='imagePage'
                    keyboardClassName='keyboardClassName'
                    value={mail}
                    defaultKeyboard={CustomMapping}
                    placeholder={'mymail@midburn.co.il'}
                    isFirstLetterUppercase={false}
                    onChange={(value) => {
                        setMail(value);
                    }}
                    enabled
                />
            </div>
            <Button onClick={onSendMail} label={'Mail!'} />
            
        </div>
    }
    
    

    return (
        <Page className2='imagePage'>
            
            <div className='dynamic'>
            
                <img className='image-shot' src={getImageSrc(imageId)} alt="snapshot"/>
            </div>
            {emailSection}
            
          
        </Page>
    );
}