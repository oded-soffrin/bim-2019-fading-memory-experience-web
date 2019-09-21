import React from 'react';
import Button from './Button2'

export default ({next}) => {
    return (
        <div className='Instructions-page'>
            <h1>Instructions</h1>
            <p>here's how to use this thing you're in</p>
            <ul>
                <li>Go</li>
                <li>Smile</li>
                <li>Come back</li>
            </ul>
            <h1>Hi, here's a Question</h1>
            <p>Can we save the photo?</p>
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
        </div>
    );

}