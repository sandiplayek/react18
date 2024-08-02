import React from 'react';
import { memo } from 'react';

const Remember = ({changecount}) => {
    console.log('remember called')
    return (
        <div>
            Remember
            <p><button onClick={changecount}>Increase Count</button></p>
        </div>
    );
};

export default memo(Remember);