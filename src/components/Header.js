import React from 'react';
import changeRouteFactory from '../utils/changeRouteFactory'
import Button from './Button2'
import { useTranslation } from 'react-i18next';

const Header = ({history, langChange}) => {

    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        langChange(lng);
      i18n.changeLanguage(lng);
    };
  
    const changeRoute = changeRouteFactory(history);

    return (
        <div className='navbar'>
            <div className='menu'>         
                <Button
                label={t('NAVBAR_HOME')}
                type='simple'
                onClick={() => changeRoute('/')}
                />
                <Button
                label={t('NAVBAR_GALLERY')}
                type='simple'
                onClick={() => changeRoute('/gallery')}
                />
                <Button
                label={t('NAVBAR_ABOUT')}
                type='simple'
                onClick={() => changeRoute('/about')}
                />
            </div>
            <div className='menu-lang'>
                <Button
                    label={t('HE')}
                    type='simple'
                    onClick={() => changeLanguage('he')}
                />
                <div>|</div>
                <Button
                    label={t('EN')}
                    type='simple'
                    onClick={() => changeLanguage('en')}
                />
            </div>
        </div>
    )
}

export default Header;