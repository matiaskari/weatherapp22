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
            margin: '0 20px 20px 20px'
        }
    }
    if (weatherData) {
        return (
            <div>
                <div style={style.current}>
                    <CurrentWeather weatherData={weatherData[0]} />
                </div>
                <div style={style.nextBox}>
                    <NextWeather weatherData={weatherData[1].list[0]} />
                    <NextWeather weatherData={weatherData[1].list[1]} />
                    <NextWeather weatherData={weatherData[1].list[2]} />
                    <NextWeather weatherData={weatherData[1].list[3]} />
                    <NextWeather weatherData={weatherData[1].list[4]} />
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading Data...</div>
        )
    }
}

export default City