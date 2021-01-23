import React from 'react';
import './content.css'
const Content = ({ weather, fulldate }) => {
     console.log(typeof weather.main)


     return (


          (typeof weather.main != "undefined") ? (


               <div className="content">

                    <div className="location-box">
                         <div className="location">{weather.name}</div>
                         <div className="date">{fulldate(new Date())}</div>
                    </div>

                    <div className="weather-box">
                         <div className="temp">
                              {Math.round(weather.main.temp)}°c
                              </div>
                         <div className="weather">{weather.weather[0].main}</div>
                    </div>
               </div>
          ) : ('')



     );
}

export default Content;
