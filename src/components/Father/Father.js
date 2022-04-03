import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import { RingContext } from '../GrandPa/GrandPa';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = () => {
    const [house] = useContext(RingContext);
    return (
        <div>
            <h3>Father</h3>
            <p>House:{house}</p>
            <div style={{display: 'flex'}}>
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;