import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForecastTile from "./components/WeatherForecastTile";

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleChangeInput = (e) => {
    // removes any error message that might be visible
    setError(null);
    // updates text in search bar
    setInput(e.target.value);
  };

  const searchWeather = (query) => {
    setWeatherData(null);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          throw new Error("Sorry, we can't find that city...");
        }
        throw new Error("Something went wrong! Please check again later.");
      })
      .then((data) => setWeatherData(data))
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div id="main-container" className="p-5">
      <div
        id="title-container"
        className="d-flex flex-column align-items-center"
      >
        <h1>Weather search</h1>
        <div id="search-container" className="mt-2 input-group">
          <input
            type="text"
            name="myInput"
            className="form-control"
            placeholder="enter city name or lat,long"
            onChange={handleChangeInput}
          ></input>
          <button
            className="btn btn-outline-primary"
            onClick={() => searchWeather(input)}
            disabled={input.length === 0}
          >
            search
          </button>
        </div>
        {error && <p className="lead mt-5">{error}</p>}
        {weatherData && (
          <WeatherForecastTile
            current={weatherData.current}
            location={weatherData.location}
          />
        )}
      </div>
    </div>
  );
}

export default App;
