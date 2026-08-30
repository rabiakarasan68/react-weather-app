import { useState } from "react";
import "./App.css"

function App() {
  const [city, setCity] = useState("");
  const [searchedCity, setSearchedCity] = useState("");

  const [temperature, setTemperature] = useState<number | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  const [feelslike, setFeelsLike] = useState<number | null>(null);
  const [windSpeed, setWindSpeed] = useState<number | null>(null);

  const [weatherCode, setWeatherCode] = useState<number | null>(null); 

  const [error, setError] = useState(""); 

  const [loading, setLoading] = useState(false); 

  async function searchCity() {
    if(city.trim() === "") {
      return;
    }

    setError(""); 

    setLoading(true);

    try{
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=tr&format=json`
      );

      const data = await response.json(); 

      if(!data.results) {
        setError("Şehir bulunamadı!");
        setSearchedCity("");
        setTemperature(null);
        setHumidity(null);
        setFeelsLike(null);
        setWindSpeed(null);
        setLoading(false); // Bunu koymazsak loading açık kalır.
        return;
      }

      const location = data.results[0];
      console.log(location)

      const latitude = location.latitude;
      const longitude = location.longitude;

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto`
      )

      const weatherData = await weatherResponse.json();

      console.log(weatherData);

      setTemperature(weatherData.current.temperature_2m);
      setHumidity(weatherData.current.relative_humidity_2m);
      setFeelsLike(weatherData.current.apparent_temperature);
      setWindSpeed(weatherData.current.wind_speed_10m);

      setSearchedCity(location.name);

      setWeatherCode(weatherData.current.weather_code);
    }
    catch (error) {
      setError("Bir hata oluştu.Lütfen tekrar deneyin.");
    }
    finally { 
      setLoading(false); 
  }
}

  function getWeatherInfo(code: number) {
    if(code == 0) {
      return {
        icon: "☀️",
        description: "Açık"
      };
    }

    if(code === 1 || code === 2 || code === 3) {
      return {
        icon: "☁️",
        description: "Bulutlu",
      };
    }

    if(code >= 51 && code <= 67) {
      return {
        icon: "🌧️",
        description: "Yağmurlu",
      };
    }

    if(code >= 71 && code <= 77) {
      return {
        icon: "❄️",
        description: "Karlı",
      };
    }

    if(code >= 80 && code <= 82) {
      return {
        icon: "🌦️",
        description: "Sağanak Yağışlı",
      };
    }

    if(code >= 95 && code <= 99) {
      return {
        icon: "⛈️",
        description: "Fırtınalı",
      };
    }

    return {
      icon: "🌤️",
      description: "Bilinmiyor",
    };
  }

  return (
    <div className="weather-container">
      <h1>Hava Durumu</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Şehir adını giriniz..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={searchCity}>Ara</button>

        {loading && (
          <div className="loading-container">
            <div className="loading-bar"></div>
          </div>
        )}

        {error && ( 
          <p className="error-message">
            {error}
          </p>
        )}
      </div>

        {temperature !== null && ( 
          <div className="weather-card">
            <div className="weather-card-content">
            <h2 className="searched-city">{searchedCity}</h2>

            {weatherCode !== null && (
              <div className="weather-status">
                <span className="weather1">{getWeatherInfo(weatherCode).icon}</span>
                <span className="weather2">{getWeatherInfo(weatherCode).description}</span>
              </div>
            )}

            <div className="values">
            <p>Sıcaklık: {temperature} °C</p>
            <p>Hissedilen: {feelslike} °C</p>
            <p>Nem: {humidity}</p>
            <p>Rüzgar: {windSpeed} km/sa</p>
            </div>
          </div>
          </div>
        )}

      </div>
  );
}

export default App;
