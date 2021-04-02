import React from "react";
import Moment from "react-moment";


export const ResultCard = ({ resultItem }) => {

  return (
    <div className="result-card">
      {resultItem.links ? 
       <div className="poster-wrapper">
       <img
         src={resultItem.links[0].href}
         alt={`${resultItem.data[0].title} Poster`}
       />
     </div>
    : null}
     

      <div className="info">
        <div className="header">
          <h3 className="title">{resultItem.data[0].title}</h3>
          <h4 className="release-date">
            <Moment format="DD-MM-YYYY">{resultItem.data[0].date_created}</Moment>
          </h4>
        </div>
      </div>
     
    </div>
  );
};
