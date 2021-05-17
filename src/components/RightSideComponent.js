import React, { useState } from 'react';

function RightSideComponent(props) {
  const [cityName, setCityName] = useState('');
  const apiKey = 'a38e4c152acd47df64d67dac365c9bbe';
  const [feelsLike, setFeelsLike] = useState();
  const [wind, setWind] = useState();
  const [humidity, setHumidity] = useState();

  const displayData = () => {
    fetch(
      `https:api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`,
    )
      .then((response) => response.json())
      .then((data) => {
        props.setCity(data.city.name);
        props.setTemp(Math.round(data.list[0].main.temp));
        props.setDescription(data.list[0].weather[0].main);
        setFeelsLike(Math.round(data.list[0].main.feels_like));
        setWind(data.list[0].wind.speed.toFixed(1));
        setHumidity(Math.round(data.list[0].main.humidity));
      });
  };
  return (
    <div className="right">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          displayData();
        }}
      >
        <input
          onChange={(event) => setCityName(event.target.value)}
          placeholder="Search Location"
          type="text"
          value={cityName}
        />
        <button type="submit">Search</button>
      </form>
      <hr />
      <h2>Weather Details</h2>

      <p>Feels Like {feelsLike ? feelsLike + '°' : ''}</p>
      <p>Wind {wind ? wind + 'km/h' : ''}</p>
      <p>Humidity {humidity ? humidity + '%' : ''}</p>
      <hr />
    </div>
  );
}

export default RightSideComponent;
