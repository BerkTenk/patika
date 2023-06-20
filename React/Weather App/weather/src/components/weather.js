import React, {  useEffect, useState,useContext } from 'react'
import axios from "axios";
import CityContext from '../contexts/CityContext';


function Weather() {
    const [minTemperature, setMinTemperature] = useState();
    const [maxTemperature, setMaxTemperature] = useState();
    const [description, setDescription] = useState();
    const [icon, setIcon] = useState();

  const [selectedCity, setSelectedCity] = useState('Adana');
  const cities = useContext(CityContext);

  useEffect(() => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=f5fea04b50574fd876eb0cb8f961c4bc`
    ).then((res) => {
      setMinTemperature(res.data.main.temp_min);
      setMaxTemperature(res.data.main.temp_max);
      setDescription(res.data.weather[0].description);
      setIcon(res.data.weather[0].icon);
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
    });
}, [selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <h1>Weathers</h1>
      <select value={selectedCity} onChange={handleCityChange}>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <h2>Min Temperature: {minTemperature}</h2>
      <h2>Max Temperature: {maxTemperature}</h2>
      <h2>Description: {description}</h2>
      {icon && <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />}
    </div>
  );
}

export default Weather;