import "./WeatherForecast.css";

const WeatherForecast = ({weatherForecast}) => {
    return (
        <div className="weather">
            <h2>Day of the Week</h2>
            <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />
            <p><span>conditions: </span>{weatherForecast.conditions}</p>
            <p><span>time: </span>{weatherForecast.time}</p>
        </div>
    )
};

export default WeatherForecast;