import React from 'react';
import "./NameCard.css";

const NameCheap = 'https://www.namecheap.com/domains/registration/results/?domain=%27%3B';

const NameCard = ({ suggested }) => {
    return (
        
        <div className="NameCard-container">
            
            <a className="result-name-link" href={`${NameCheap}${suggested}`}>
            <p className="NameCard">
                {suggested}
            </p>
            </a>
        </div>
    );
    
};

export default NameCard;