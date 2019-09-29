import React, { useState } from 'react';
import Page from './Page'
import Button from './Button2'
import * as api from '../api';
import { Link } from "react-router-dom";
import { getImageSrc} from '../utils/global'



export default ({match}) => {

    const [mail, setMail] = useState('');
    const [mailStatus, setMailStatus] = useState(false);
    const {params: {imageId}} = match;
    
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
        emailSection = <div>
            <p>Please mail it to after the burn:</p>
            <input onChange={e => setMail(e.target.value)} placeholder='mymail@midburn.co.il' value={mail} className='mail' type='text' />
            <Button onClick={onSendMail} label={'Mail!'} />
        </div>
    }
    
    return (
        <Page>
        
            <div>BOOM!</div>
            
            <div className='dynamic'>
            
            <img  src={getImageSrc(imageId)} alt="snapshot"/>
            </div>
            {emailSection}
            
        </Page>
    );
}