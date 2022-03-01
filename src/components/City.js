import React from 'react'
import CurrentWeather from './CurrentWeather'
import NextWeather from './NextWeather'

const City = ({ weatherData }) => {
    const style = {
        current: {
            color: 'black'
        },
        next: {
            color: 'black'
        }
    }
    return (<div>
        <CurrentWeather style={style.current} weatherData={weatherData} />
        <div>
            <NextWeather style={style.next} weatherData={weatherData} />
            <NextWeather style={style.next} weatherData={weatherData} />
            <NextWeather style={style.next} weatherData={weatherData} />
            <NextWeather style={style.next} weatherData={weatherData} />
            <NextWeather style={style.next} weatherData={weatherData} />
        </div>
    </div >)
}

export default City