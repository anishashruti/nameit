import React from 'react';
import "./Header.css";


const Header = ({ headerExp }) => {
    return (
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className= {`header-image ${headerExp ? 'header-image-exp':'header-image-con'}`} alt="header_img"></img>
            <h1 className="heat-text">Name Finder</h1>

        </div>
    );
    
};

export default Header;