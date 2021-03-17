import React from 'react';
  
function DisplayQuote({ quote }) {
  return (
    <div className="DisplayQuote">
        <img src={quote.image} alt={quote.character}></img>
        <ul>
            <li>
                {quote.quote}
            </li>
            <li>
                {quote.character}
            </li>
        </ul>

    </div>
  );
};
  
export default DisplayQuote;