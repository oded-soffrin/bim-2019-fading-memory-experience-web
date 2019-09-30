import React from 'react';
import Button from './Button2'
import changeRouteFactory from '../utils/changeRouteFactory'
import { useTranslation } from 'react-i18next';
import Page from './Page'

import { withRouter } from 'react-router-dom';

const HomePage = ({history}) => {
    const changeRoute = changeRouteFactory(history);

    const { t } = useTranslation();
    return (
    <Page>
        <p>{t('HOME_WELCOME')}</p>
        
        <Button
            big
            onClick={() => {changeRoute('wizard')}}
          label={'Start!'}
        />
    </Page>
    );
}
export default withRouter(HomePage)