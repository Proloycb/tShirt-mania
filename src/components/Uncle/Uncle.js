import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Uncle = () => {
    const [house] = useContext(RingContext);
    return (
        <div>
            <h3>Uncle</h3>
            <p>House:{house}</p>
        </div>
    );
};

export default Uncle;