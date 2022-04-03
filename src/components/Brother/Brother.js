import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Brother = () => {
    const [house] = useContext(RingContext);
    return (
        <div>
            <h3>Brother</h3>
            <p>House:{house}</p>
        </div>
    );
};

export default Brother;