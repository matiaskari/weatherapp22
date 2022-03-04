
import React, { useState, useEffect } from 'react'
import weatherService from './services/Weather.js'
import City from './components/City.js'

const App = () => {
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        weatherService.getWeatherData()
            .then(response => {
                setWeatherData(response)
                console.log('Weatherdata', weatherData)
            })

    }, [])
    const styles = {
        page: {
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%',
            fontFamily: 'Arial Regular, Helvetica, sans-serif',
            backgroundColor: '#F8F9FA'
        }
    }

    return (
        <div style={styles.page}>
            <City weatherData={weatherData} />

        </div >
    )
}

export default App