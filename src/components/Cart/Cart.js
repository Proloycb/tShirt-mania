import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveItem}) => {

    // conditional rendering
    // 1. Element variable
    // 2. Ternary operator
    // 3. && operator
    // 4. || operator

    let command;
    if(cart.length === 0){
        command = <p>Please add at least one item!!!</p>
    }
    else if(cart.length === 1){
        command = <p>Please add more...</p>
    }
    else{
        command = <p>Thanks to adding item</p>
    }
    return (
        <div>
            <h1>Items Selected:{cart.length}</h1>
            {
                cart.map(tShirt => <p>
                   {tShirt.name}
                   <button onClick={() => handleRemoveItem(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>YaY! You are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h5>Trigonal</h5>
                <p>Tin jon ke ki gift diva</p>
                </div>}
            {command}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Remove all</button>}
            {cart.length === 4 && <button className='orange'>Review Order</button>}
            
        </div>
    );
};

export default Cart;