import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';
import Special from '../Special/Special';

const MySelf = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>MySelf</h3>
            <p>House:{house}</p>
            <button onClick={() => setHouse(house + 1)}>Buy a House</button>
            <Special></Special>
        </div>
    );
};

export default MySelf;