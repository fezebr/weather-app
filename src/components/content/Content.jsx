import React from 'react';
import './content.css'
const Content = () => {
     return (
          <div className="content">

               <div className="location-box">
                    <div className="location">NY</div>
                    <div className="date">2020</div>
               </div>

               <div className="weather-box">
                    <div className="temp">
                         7°c
            </div>
                    <div className="weather">sunny</div>
               </div>
          </div>
     );
}

export default Content;
