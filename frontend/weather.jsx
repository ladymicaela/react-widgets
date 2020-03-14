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
                <div>{weather.name}</div>
                <div>{temp.toFixed(1)}°</div>
                <div>{description}</div>
            </div>;
            
            if (description.includes("clear")) {
                icon = <i className="fas fa-sun"></i>
            } else if (description.includes("clouds")) {
                icon = <i className="fas fa-cloud"></i>
            } else if (description.includes("rain")) {
                icon = <i className="fas fa-cloud-rain"></i>
            } else if (description.includes("thunderstorm")) {
                icon = <i className="fas fa-bolt"></i>
            } else if (description.includes("snow")) {
                icon = <i className="far fa-snowflake"></i>
            } else {
                icon = <i className="fas fa-cloud-sun"></i>
            }
                
        } else {
            content = <div className='loading'>loading weather...<br/>allow location permissions</div>;
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