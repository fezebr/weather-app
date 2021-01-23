import React, { useState } from 'react';
import Search from './components/search/Search';
import Content from './components/content/Content';

const api = {
  key: "9b3538c1661d81707cf48d71a2225697",
  base: "https://api.openweathermap.org/data/2.5/"
}




function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }

    console.log(weather)
    console.log(typeof weather.main)

  }
  console.log(typeof weather.main)


  const fulldate = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }

  // (typeof weather.main != "undefined") ? (weather.main.temp > 0 ? 'app warm' : 'app') : ("app")
  return (
    <div className="container">
      <div className={(typeof weather.main != "undefined") ? (( weather.main.temp ) > 15? 'app warm' : 'app') : 'app'}>
        <main>
          <Search
            search={search}
            setQuery={setQuery}
            query={query}
          />
          <Content
            weather={weather}
            fulldate={fulldate}
          />


        </main>
      </div>
    </div>
  );
}

export default App;
