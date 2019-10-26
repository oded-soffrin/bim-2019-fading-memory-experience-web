import React from 'react';
import changeRouteFactory from '../utils/changeRouteFactory'
import Button from './Button2'
import { useTranslation } from 'react-i18next';

const Header = ({history}) => {

    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
  
    const changeRoute = changeRouteFactory(history);

    return (
        <div className='navbar'>
            <div className="App-logo" alt="logo">BIM</div>
            <div className='menu'>         
                <Button
                label={t('NAVBAR_HOME')}
                onClick={() => changeRoute('/')}
                />
                <Button
                label={t('NAVBAR_GALLERY')}
                onClick={() => changeRoute('/gallery')}
                />
                <Button
                label={t('NAVBAR_ABOUT')}
                onClick={() => changeRoute('/about')}
                />
                

                <button onClick={() => changeLanguage('he')}>HE</button>
                <button onClick={() => changeLanguage('en')}>EN</button>
            </div>
        </div>
    )
}

export default Header;