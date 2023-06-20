import React, { useEffect, useState } from 'react'
import axios from "axios";

function Weather() {
    const [weatherData, setWeatherData] = useState([]);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then((res) => setWeatherData(res.data));
    }, [])
    return (
        <div>
                <h1>Weathers</h1>

                {weatherData.map((weather) => (
                    <div key={weather.id}>
                        {weather.title}
                    </div>
                ))}

            
        </div>
    )
}

export default Weather