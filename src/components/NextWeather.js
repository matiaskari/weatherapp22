import React from 'react'

const NextWeather = ({ weatherData }) => {
    const style = {
        box: {
            textAlign: 'center'
        },
        topBox: {
            borderStyle: 'solid',
            borderBottomStyle: 'none',
            borderWidth: '2px',
            borderColor: '#E6E6E6',
            borderRadius: '10px 10px 0 0',
            padding: '15px',
            backgroundColor: '#FFFFFF'
        },
        bottomBox: {
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: '#E6E6E6',
            backgroundColor: '#E5F6FD',
            borderRadius: '0 0 10px 10px',
            padding: '10px',
        },
        time: {
            fontSize: '13pt',
            color: '#70757A',
            margin: '0'
        },
        temp: {
            fontSize: '15pt',
            color: '#70757A',
            margin: '0'
        },
        tinyText: {
            fontSize: '10pt',
            color: '#70757A',
            margin: '3px'
        }
    }

    const date = new Date(weatherData.dt * 1000)
    const time = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())


    let precipitation = '' //Variable to save the amount of precipitation, either rain or snow

    if (weatherData.hasOwnProperty('rain')) {
        precipitation = weatherData.rain['3h']
    } else if (weatherData.hasOwnProperty('snow')) {
        precipitation = weatherData.snow['3h']
    } else {
        precipitation = '0'
    }

    return (
        <div style={style.box}>
            <div style={style.topBox}>
                <p style={style.time}>{time}</p>
                <img src={'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '.png'} alt={weatherData.weather[0].description} />
                <p style={style.temp}>{Math.round(weatherData.main.temp - 273.15) / 1} &deg;C</p>
            </div>
            <div style={style.bottomBox}>
                <p style={style.tinyText}>{weatherData.wind.speed} m/s</p>
                <p style={style.tinyText}>{weatherData.main.humidity} %</p>
                <p style={style.tinyText}>{precipitation} mm</p>
            </div>
        </div>
    )
}

export default NextWeather