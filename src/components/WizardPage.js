import React, { useState, useEffect } from 'react';
import Page from './Page'
import InstructionsSection from './InstructionsSection'
import { withRouter } from 'react-router-dom';
import changeRouteFactory from '../utils/changeRouteFactory'
import { useTranslation } from 'react-i18next';
import * as api from '../api';

const DotLoader = () => {
    const [dots, setDots] = useState('.');
    useEffect(() => {
        const interval = setInterval(() => {
            if (dots.length === 3) {
                setDots('.');
            } else {
                setDots(`${dots}.`);
            }
        }, 1000)
        return () => {
            window.clearInterval(interval);
        }
    });
    return (<span>{dots}</span>);
}
const PROC = {type: 'proc'}
const TIMER = {type: 'timer'}
const HomePage = ({history}) => {
    const { t } = useTranslation();
    const changeRoute = changeRouteFactory(history);
    const [state, setState] = useState({});

    const timer = (approved, sec = 10) => {

        if (sec === 10) {
            api.snapshot(approved).then(snapshotData => {
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
        wizardSection = <div>{t('PROCESSING')}<DotLoader /></div>;
    }
    else if (state.type === TIMER.type) {
        wizardSection = <div>{state.time}</div>
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