import React, { useEffect, useState } from 'react'
import axios from "axios";

function Weather() {
    const [weatherData, setWeatherData] = useState();
    const [selectedCity, setSelectedCity] = useState('istanbul');
    useEffect(() => {
        axios( `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=f5fea04b50574fd876eb0cb8f961c4bc`)
        .then((res)=> setWeatherData(res.data.main.temp))
    },[selectedCity]);

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
      };
    return (
        <div>
            <h1>Weathers</h1>
                <select value={selectedCity} onChange={handleCityChange}>
                    <option value={"istanbul"}>İstanbul</option>
                    <option value={"Ankara"}>Ankara</option>
                    <option value={"İzmir"}>İzmir</option>
                </select>
            {/* {weatherData.map((weather) => (
                <div key={weather}>
                    {weather}
                </div>
            ))} */}
            <h2>{weatherData}</h2>

        </div>
    )
}

export default Weather