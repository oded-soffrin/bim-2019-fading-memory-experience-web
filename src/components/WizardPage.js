import React, { useState } from 'react';

import Button from './Button2'
// import changeRouteFactory from '../utils/changeRouteFactory'
import Page from './Page'
import axios from 'axios'
import { withRouter } from 'react-router-dom';


const snapshot = approved => {

    const mockReturn = {
        image_idx: "109",
        image_url: "/Users/odeds/Downloads/unnamed%20(2).png"
    }
    //file://

    const isMock = true;

    if (isMock) {
        return Promise.resolve(mockReturn)
    }
    return axios.post('http://localhost:5000/', {approved}).then(res => {
        console.log("snapshot got ", res);
        return res.data;
    });
}
const HomePage = ({history}) => {
    // const changeRoute = changeRouteFactory(history);
    const [loading, setLoading] = useState(false);
    const [imageId, setImage] = useState(false);

    const next = (approved) => {
        setLoading(true)
        snapshot(approved)
        .then(snapshotData => {
            setImage(snapshotData.image_idx);
        })
    }

    let imgDiv;
    if (imageId) {
        imgDiv = (
            <div>
                <h1>got the image!</h1>
                <img src={`/image?id=${imageId}`} alt="snapshot"/>
            </div>
        );
    } else if (loading) {
        imgDiv = <div>loading...</div>;
    }
    return (
    <Page>
        <p>Can we save the photo?</p>
        {imgDiv}
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
    </Page>
    );
}
export default withRouter(HomePage)