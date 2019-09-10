import React from 'react';
import changeRouteFactory from '../utils/changeRouteFactory'
import Button from './Button'

const Header = ({history}) => {

    const changeRoute = changeRouteFactory(history);

    return (
        <div className='navbar'>
            <div className="App-logo" alt="logo">BIM</div>
            <div className='menu'>         
                <Button
                label={'Home'}
                onClick={() => changeRoute('/')}
                />
                <Button
                label={'About'}
                onClick={() => changeRoute('/about')}
                />
                <Button
                label={'Gallery'}
                onClick={() => changeRoute('/gallery')}
                />
            </div>
        </div>
    )
}

export default Header;