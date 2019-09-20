import React, { useState } from 'react';
import Page from './Page'
import InstructionsSection from './InstructionsSection'
import { withRouter } from 'react-router-dom';
import changeRouteFactory from '../utils/changeRouteFactory'
import * as api from '../api';

const HomePage = ({history}) => {
    const changeRoute = changeRouteFactory(history);
    const [loading, setLoading] = useState(false);

    const next = (approved) => {
        setLoading(true)
        api.snapshot(approved)
        .then(snapshotData => {
            changeRoute(`/image/${snapshotData.image_idx}`)
        })
    }

    let wizardSection = false;
    if (loading) {
        wizardSection = <div>Processing...</div>;
    } else {
        wizardSection = (
            <InstructionsSection next={next} />
        );
    }
    return (
    <Page>
        {wizardSection}
    </Page>
    );
}
export default withRouter(HomePage)