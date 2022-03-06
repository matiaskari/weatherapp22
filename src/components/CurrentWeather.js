import React from 'react'

const CurrentWeather = ({ weatherData }) => {
    const style = {
        box: {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            gridTemplateRows: '2',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: '#E6E6E6',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#FFFFFF'
        },
        title: {
            fontSize: '23pt',
            color: '#262626',
            margin: '0',
            gridColumn: '1'
        },
        subTitle: {
            fontSize: '15pt',
            color: '#70757A',
            margin: '0',
            gridColumn: '1'
        },
        smallText: {
            fontSize: '13pt',
            color: '#70757A',
            margin: '0'
        },
        smallTextRight: {
            fontSize: '13pt',
            color: '#70757A',
            margin: '0',
            gridColumn: '2',
            textAlign: 'right',
            verticalAlign: 'bottom'
        },
        temp: {
            fontSize: '26pt',
            color: '#262626',
            margin: '0',
            gridColumn: '2',
            textAlign: 'right',
            verticalAlign: 'top'
        },
        bottomLeftBox: {
            verticalAlign: 'bottom'
        }
    }

    const date = new Date()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let dayNumber = ''
    if (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31) {
        dayNumber = date.getDate() + 'st'
    } else if (date.getDate() === 2 || date.getDate() === 22) {
        dayNumber = date.getDate() + 'nd'
    } else if (date.getDate() === 3 || date.getDate() === 23) {
        dayNumber = date.getDate() + 'rd'
    } else {
        dayNumber = date.getDate() + 'th'
    }

    const day = months[date.getMonth()] + ' ' + dayNumber
    const time = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    if (weatherData) {
        return (
            <div style={style.box}>
                <div>
                    <p style={style.title}>{weatherData.name === 'Jyvaskyla' ? 'Jyväskylä' : weatherData.name}</p>
                    <p style={style.smallText}>{capitalize(weatherData.weather[0].description)}</p>
                </div>
                <div>
                    <p style={style.temp}>{weatherData.weather.icon} {Math.round(weatherData.main.temp - 273.15) / 1} &deg;C</p>
                </div>
                <div>
                    <p style={style.subTitle}>{day}</p>
                    <p style={style.smallText}>{time}</p>
                </div>
                <div>
                    <p style={style.smallTextRight}>Wind: {weatherData.wind.speed} m/s</p>
                    <p style={style.smallTextRight}>Humidity: {weatherData.main.humidity} %</p>
                    <p style={style.smallTextRight}>Precipitation (3 h): {weatherData.rain} mm</p>
                </div>
            </div>
        )
    } else {
        return (<p style={style.title}>Loading data...</p>)
    }
}

export default CurrentWeather