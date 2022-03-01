
import React, { useState, useEffect } from 'react'
import weatherService from './services/Weather.js'
import City from './components/City.js'

const App = () => {
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        weatherService.getWeatherData()
    }, [])
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'Arial Regular, Helvetica, sans-serif'
        }
    }

    return (
        <div style={styles.container}>
            <City weatherData={weatherData} />

        </div >
    )
}

export default App