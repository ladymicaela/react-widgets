import React from 'react';

const toQueryString = (obj) => {
    const parts = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
        }
    }
    return parts.join('&');
}

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: null
        };

        this.pollWeather = this.pollWeather.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.pollWeather);
    }


    pollWeather(location) {
        let url = 'https://api.openweathermap.org/data/2.5/weather?';
        const params = {
            lat: location.coords.latitude,
            lon: location.coords.longitude
        };

        url += toQueryString(params);

        const apiKey = 'cb9905234e546d730b3b871e80956204';

        url += `&APPID=${apiKey}`;

        fetch(url)
            .then(result => {
                if (result.ok) {
                    return result.json()
                } else {
                    throw new Error('Cannot retrieve locale weather.')
                }
            })
            .then((result) => {
                this.setState({
                    weather: result
                });
            }) 
    }


    render() {
        let content = <div></div>;

        let icon;

        if (this.state.weather) {
            const weather = this.state.weather;
            const temp = (weather.main.temp - 273.15) * 1.8 + 32;
            let description = weather.weather[0].description
            content = <div className="weather-info">
                <p>{weather.name}</p>
                <p>{temp.toFixed(1)}°</p>
                <p>{description}</p>
            </div>;
            switch (description) {
                case description.includes("clear"):
                    icon = <i class="fas fa-sun"></i>
                    break;

                case description.includes("clouds"):
                    icon = <i class="fas fa-cloud"></i>
                    break;

                case description.includes("rain"):
                    <i class="fas fa-cloud-rain"></i>
                    break;

                case description.includes("thunderstorm"):
                    <i class="fas fa-bolt"></i>
                    break;

                case description.includes("snow"):
                    <i class="far fa-snowflake"></i>
                    break;

                default:
                    icon = <i class="fas fa-cloud-sun"></i>
                    break;
            }
        } else {
            content = <div className='loading'>loading weather...</div>;
        }
        return (
            <div className="weather-container">
                <h1 className="weather-header">React Weather</h1>
                <div className='weather'>
                    {content}
                    {icon}
                </div>
            </div>
        );
    }
};


export default Weather;