import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const searchWeather = (query) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=bc3d974648b545299bb110927242810&q=${query}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      });
  };

  return (
    <>
      <h1>Weather search</h1>
      <input name="myInput" onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => searchWeather(input)}>search</button>
      {weatherData && (
        <p>
          Weather in {weatherData.location.name}, {weatherData.location.country}{" "}
          is {weatherData.current.condition.text}
        </p>
      )}
    </>
  );
}

export default App;
