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

    const date = new Date(weatherData.dt * 1000)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let dayNumber = ''
    if (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31) { //Formatting the number of the date
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

    let precipitation = '' //Variable to save the amount of precipitation, either rain or snow
    let precipDuration = '3' //Variable to save the time interval that was provided in the fetched precipitation data (preferably 3 (hours), is set to 1 if 3h data not available and 1h data is)

    if (weatherData.hasOwnProperty('rain')) {
        if (weatherData.rain.hasOwnProperty('3h')) { //Prefer showing the data for the past 3h
            precipitation = weatherData.rain['3h']
            precipDuration = '3' //Shows the user that 3h precipitation data was available
        } else {
            precipitation = weatherData.rain['1h'] //If 3h data not available, show 1h data instead
            precipDuration = '1' //Shows the user that 3h precipitation data was not available but 1h data was
        }
    } else if (weatherData.hasOwnProperty('snow')) { //Same as above, but the precipitation is snow instead of rain
        if (weatherData.snow.hasOwnProperty('3h')) {
            precipitation = weatherData.snow['3h']
            precipDuration = '3'
        } else {
            precipitation = weatherData.snow['1h']
            precipDuration = '1'
        }
    } else {
        precipitation = '0'
    }

    return (
        <div style={style.box}>
            <div>
                <p style={style.title}>{weatherData.name === 'Jyvaskyla' ? 'Jyväskylä' : weatherData.name}</p>
                <p style={style.smallText}>{capitalize(weatherData.weather[0].description)}</p>
            </div>
            <div>

                <p style={style.temp}><img src={'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png'} alt={weatherData.weather[0].description} />{Math.round(weatherData.main.temp - 273.15) / 1} &deg;C</p>
            </div>
            <div>
                <p style={style.subTitle}>{day}</p>
                <p style={style.smallText}>{time}</p>
            </div>
            <div>
                <p style={style.smallTextRight}>Wind: {weatherData.wind.speed} m/s</p>
                <p style={style.smallTextRight}>Humidity: {weatherData.main.humidity} %</p>
                <p style={style.smallTextRight}>Precipitation ({precipDuration} h): {precipitation} mm</p>
            </div>
        </div>
    )

}

export default CurrentWeather