import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';

/**
 * context api
 * 1. call createContext with a default value
 * 2. set a variable of the context with uppercase
 * 3. Make sure you export the context to use it in other places
 * 4. Wrap you child content using RingContext.Provider
 * 5. Provide a value
 * 6. to consume the context from child component
 * 7. useContext hook and you will you need to pass the contextName
 * 8. Make sure you take notes...
 */

export const RingContext = createContext('ring');

const GrandPa = () => {
    const ornament = 'Diamond Ring';
    const [house, setHouse] = useState(1);
    const handleBuy = () => setHouse(house + 1);
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h1>GrandPa</h1>
                <p>House:{house} <button onClick={handleBuy}>Buy A House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;