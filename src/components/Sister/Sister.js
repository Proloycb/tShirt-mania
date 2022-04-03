import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Sister = () => {
    const [house] = useContext(RingContext);
    return (
        <div>
            <h3>Sister</h3>
            <p>House:{house}</p>
        </div>
    );
};

export default Sister;