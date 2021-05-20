import React, { useEffect, useState } from 'react';

function RightSideComponent(props) {
  const [cityName, setCityName] = useState('vienna');
  const [feelsLike, setFeelsLike] = useState();
  const [wind, setWind] = useState();
  const [humidity, setHumidity] = useState();
  const [temp3h, setTemp3h] = useState();
  const [temp6h, setTemp6h] = useState();
  const [temp9h, setTemp9h] = useState();

  useEffect(() => {
    displayData();
  }, []);

  const displayData = () => {
    fetch(
      `https:api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
    )
      .then((response) => response.json())
      .then((data) => {
        props.setCity(data.city.name);
        props.setTemp(Math.round(data.list[0].main.temp));
        props.setDescription(data.list[0].weather[0].main);
        setFeelsLike(Math.round(data.list[0].main.feels_like));
        setWind(data.list[0].wind.speed.toFixed(1));
        setHumidity(Math.round(data.list[0].main.humidity));
        setTemp3h(data.list[1].weather[0].main);
        setTemp6h(data.list[2].weather[0].main);
        setTemp9h(data.list[3].weather[0].main);
      });
    setCityName('');
  };

  let now = new Date();
  now.setHours(now.getHours() + 3);
  const hours = now.getHours();
  let now1 = new Date();
  now1.setHours(now1.getHours() + 6);
  const hours1 = now1.getHours();
  let now2 = new Date();
  now2.setHours(now2.getHours() + 9);
  const hours2 = now2.getHours();
  return (
    <div className="right">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          displayData();
        }}
      >
        <input
          className="input"
          onChange={(event) => setCityName(event.target.value)}
          placeholder="Search Location"
          type="text"
          value={cityName}
        />
        <button type="submit" className="search">
          <i className="fa fa-search" />
        </button>
      </form>
      <h1>Weather Details</h1>
      <div className="par">
        <p className="leftp">Feels Like</p>
        <p className="rightp"> {feelsLike ? feelsLike + '°' : ''}</p>
      </div>
      <div className="par">
        <p className="leftp">Wind</p>
        <p className="rightp">{wind ? wind + ' km/h' : ''}</p>
      </div>
      <div className="par">
        <p className="leftp">Humidity </p>
        <p className="rightp">{humidity ? humidity + '%' : ''}</p>
      </div>
      <hr />
      <div className="forecast">
        <div>
          <div className={temp3h} id="forec"></div>
          <p className="hour">{hours + ':00'}</p>
        </div>
        <div>
          <div className={temp6h} id="forec"></div>
          <p className="hour">{hours1 + ':00'}</p>
        </div>
        <div>
          <div className={temp9h} id="forec"></div>
          <p className="hour">{hours2 + ':00'}</p>
        </div>
      </div>
    </div>
  );
}

export default RightSideComponent;
