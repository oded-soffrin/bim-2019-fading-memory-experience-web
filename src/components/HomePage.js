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
    <Page className2='homePage'>        
        <div className='title'>{t('HOME_WELCOME')}</div>
        
        <Button
            type='big new'
            onClick={() => {changeRoute('wizard')}}
            label={t('START')}
        />
    </Page>
    );
}
export default withRouter(HomePage)