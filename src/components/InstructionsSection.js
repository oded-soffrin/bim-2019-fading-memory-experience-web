import React from 'react';
import Button from './Button2'
import { useTranslation } from 'react-i18next';

export default ({next}) => {
    const { t } = useTranslation();
    return (
        <div className='Instructions-page'>
            <h1>{t('INSTRUCTIONS_TITLE')}</h1>
            <ul>
                <li>{t('INSTRUCTIONS_1')}</li>
                <li>{t('INSTRUCTIONS_2')}</li>
                <li>{t('INSTRUCTIONS_3')}</li>
            </ul>
            <h1>{t('INSTRUCTIONS_Q')}</h1>
            <div className='row'>
            <Button
                big
                type='new'
                onClick={() => {next(true)}}
            label={t('YES')}
            />
            <Button
                big
                type='new'
                onClick={() => {next(false)}}
            label={t('NO')}
            />
            </div>
        </div>
    );

}