import React from 'react';
import Button from './Button2'
import changeRouteFactory from '../utils/changeRouteFactory'
import { useTranslation } from 'react-i18next';
import Page from './Page'
import {getImageSrc} from '../utils/global'

import { withRouter } from 'react-router-dom';

const HomePage = ({history}) => {
    const changeRoute = changeRouteFactory(history);
    const { t } = useTranslation();
    const bgimage = getImageSrc(0)
    return (
    <Page className2='homePage' styles={{backgroundImage: `url(${bgimage})`}}>        
        <p>{t('HOME_WELCOME')}</p>
        
        <Button
            big
            onClick={() => {changeRoute('wizard')}}
          label={t('START')}
        />
    </Page>
    );
}
export default withRouter(HomePage)