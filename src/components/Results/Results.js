import React from 'react';
import "./Results.css";
import NameCard from '../NameCard/NameCard';


const Results = ({ suggested }) => {
    const suggestedResults = suggested.map((suggested) => {
        return <NameCard key={suggested } suggested={suggested }/>
});
    return (
        <div classname="results-container">
            {suggestedResults}
        </div>
    );
    
};

export default Results;