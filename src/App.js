
import React, { useState, useEffect } from 'react'
import weatherService from './services/Weather.js'
import City from './components/City.js'

const App = () => {
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        async function getData() {
            const data = await weatherService.getWeatherData()
            setWeatherData(data)
            console.log('Weatherdata', data)
        }
        getData()
    }, [])
    const styles = {
        page: {
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%',
            fontFamily: 'Arial Regular, Helvetica, sans-serif',
            backgroundColor: '#F8F9FA'
        },
        title: {
            fontSize: '23pt',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            margin: '0',
            padding: '0.7em',
            borderStyle: 'none',
            borderBottomStyle: 'solid',
            borderWidth: '2px',
            borderColor: '#E6E6E6',
        }
    }

    const citySelector = <form>
        <select name='cities'>
            <option value={'Kaikki kaupungit'}>Kaikki kaupungit</option>
            <option value={'Espoo'}>Espoo</option>
            <option value={'Jyväskylä'}>Jyväskylä</option>
            <option value={'Kuopio'}>Kuopio</option>
            <option value={'Tampere'}>Tampere</option>
        </select>
    </form>

    return (
        <div style={styles.page}>
            <p style={styles.title}>Säätutka</p>
            {citySelector}
            <City weatherData={weatherData[0]} />
            <City weatherData={weatherData[1]} />
            <City weatherData={weatherData[2]} />
            <City weatherData={weatherData[3]} />
        </div >
    )
}

export default App