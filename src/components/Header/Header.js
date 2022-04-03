import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome to my TShirt Mania!!</h2>
            <nav className='menu'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/orderreview'>OrderReview</CustomLink>
                <CustomLink to='/grandpa'>GrandPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;