import React, { useState } from 'react';

import Button from './Button2'
// import changeRouteFactory from '../utils/changeRouteFactory'
import Page from './Page'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

const HomePage = ({history}) => {
    // const changeRoute = changeRouteFactory(history);

    const [loading, setLoading] = useState(false);

    const next = (approved) => {
        setLoading(true)

        axios.post('http://localhost:5000/', {approved}).then(data => {
            console.log('Got data:', data);
        })

    }
    return (
    <Page>
        <p>Can we save the photo?</p>
        
        {loading ? ( 
            <div>loading...</div>
        ) : (
            
                <div className='row'>
        <Button
            big
            onClick={() => {next(true)}}
          label={'Yes!'}
        />
        <Button
            big
            onClick={() => {next(false)}}
          label={'No!'}
        />
        </div>
          
        )}
        
        
    </Page>
    );
}
export default withRouter(HomePage)