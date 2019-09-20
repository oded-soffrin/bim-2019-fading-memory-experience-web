import React from 'react';
import Page from './Page'
import * as api from '../api';

export default () => {

    api.getGallery().then(images => {
        console.log('got', images)
    })
    return (
        <Page>
            <p>Gallery page!</p>
        </Page>
    );
}