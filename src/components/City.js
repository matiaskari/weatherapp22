import React from 'react'
import CurrentWeather from './CurrentWeather'
import NextWeather from './NextWeather'

const City = ({ weatherData }) => {
    const style = {
        current: {
            color: 'black',
            margin: '20px'
        },
        nextBox: {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto auto',
            columnGap: '10px',
            margin: '0 20px 0 20px'
        },
        next: {
            color: 'black'
        }
    }
    return (
        <div>
            <div style={style.current}>
                <CurrentWeather weatherData={weatherData} />
            </div>
            <div style={style.nextBox}>
                <NextWeather weatherData={weatherData} />
                <NextWeather weatherData={weatherData} />
                <NextWeather weatherData={weatherData} />
                <NextWeather weatherData={weatherData} />
                <NextWeather weatherData={weatherData} />
            </div>
        </div >
    )
}

export default City