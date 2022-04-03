import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const [house] = useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>
            <p><small>Gift: {house}</small></p>
        </div>
    );
};

export default Special;