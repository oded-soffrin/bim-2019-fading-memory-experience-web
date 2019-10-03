import React, { useState } from 'react';
import Page from './Page'
import InstructionsSection from './InstructionsSection'
import { withRouter } from 'react-router-dom';
import changeRouteFactory from '../utils/changeRouteFactory'
import * as api from '../api';

const PROC = {type: 'proc'}
const TIMER = {type: 'timer'}
const HomePage = ({history}) => {
    const changeRoute = changeRouteFactory(history);
    const [state, setState] = useState({});

    const timer = (approved, sec = 10) => {

        if (sec === 10) {
            api.snapshot().then(snapshotData => {
                changeRoute(`/imagepage/${snapshotData.image_idx}`)
            })
        }
        setState({...TIMER, time: sec})
        if (sec > 0) {
            setTimeout(() => timer(approved, sec-1), 1000)
        } else {
            setState(PROC)
        }
    }
    
    let wizardSection = false;
    if (state.type === PROC.type) {
        wizardSection = <div>Processing...</div>;
    }
    else if (state.type === TIMER.type) {
        wizardSection = <div>Timer: {state.time}</div>
    } else {
        wizardSection = (
            <InstructionsSection next={timer} />
        );
    }
    return (
    <Page>
        {wizardSection}
    </Page>
    );
}
export default withRouter(HomePage)