import React from 'react';
import Button from './Button'
import changeRouteFactory from '../utils/changeRouteFactory'
import Page from './Page'

import { withRouter } from 'react-router-dom';

const HomePage = ({history}) => {
    const changeRoute = changeRouteFactory(history);

    return (
    <Page>
        <p>Welcome!</p>
        
        <Button
            big
            onClick={() => {changeRoute('wizard')}}
          label={'Start!'}
        />
    </Page>
    );
}
export default withRouter(HomePage)