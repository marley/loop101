function WeatherForecastTile({ current, location }) {
  return (
    <div id="results-container" className="container">
      <div className="row justify-content-md-center">
        <div className="col-7">
          <div className="card mt-5">
            <h3 className="card-header">
              {location.name}, {location.country}
            </h3>

            <div className="card-body d-flex justify-content-between align-items-center">
              <img src={current.condition.icon} />
              <div>{current.condition.text}</div>{" "}
              <div>
                {current.temp_c}
                ºC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecastTile;
