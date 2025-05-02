import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleChangeInput = (e) => {
    setError(null);
    setInput(e.target.value);
  };

  const searchWeather = (query) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=bc3d974648b545299bb110927242810&q=${query}&aqi=no`
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
            placeholder="enter city name"
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
          <div id="results-container" className="container">
            <div className="row justify-content-md-center">
              <div className="col-7">
                <div className="card mt-5">
                  <h3 class="card-header">
                    {weatherData.location.name}, {weatherData.location.country}
                  </h3>

                  <div className="card-body d-flex justify-content-between align-items-center">
                    <img src={weatherData.current.condition.icon} />
                    <div>{weatherData.current.condition.text}</div>{" "}
                    <div>
                      {weatherData.current.temp_c}
                      ºC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
