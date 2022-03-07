
import React, { useState, useEffect } from 'react'
import weatherService from './services/Weather.js'
import City from './components/City.js'
import './index.css'

const App = () => {
    const [weatherData, setWeatherData] = useState([])
    const [dropDownValue, setDropDownValue] = useState('Kaikki kaupungit')
    let shownCity = <div></div>

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
            height: '100%',
            fontFamily: 'Arial Regular, Helvetica, sans-serif',
            backgroundColor: '#F8F9FA',
            margin: '0',
            padding: '0'
        },
        topBar: {
            backgroundColor: '#00A5E5',
            color: '#00A5E5',
            margin: '0',
            height: '20px'
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
        },
        dropdown: {
            fontSize: '13pt',
            width: 'inherit',
            padding: '10px',
            margin: '20px 20px 0 20px'
        }
    }

    const handleChange = (event) => {
        setDropDownValue(event.target.value)
    }

    const citySelector = <form>
        <select style={styles.dropdown} name='cities' onChange={handleChange}>
            <option value={'Kaikki kaupungit'}>Kaikki kaupungit</option>
            <option value={'660129'}>Espoo</option>
            <option value={'655195'}>Jyväskylä</option>
            <option value={'650225'}>Kuopio</option>
            <option value={'634963'}>Tampere</option>
        </select>
    </form>

    if (dropDownValue === 'Kaikki kaupungit') {
        shownCity = <div>
            <City weatherData={weatherData[0]} />
            <City weatherData={weatherData[1]} />
            <City weatherData={weatherData[2]} />
            <City weatherData={weatherData[3]} />
        </div>
    } else {
        shownCity = <div>
            <City weatherData={weatherData.find(city => city[0].id.toString() === dropDownValue)} />
        </div>
    }

    return (
        <div style={styles.page}>
            <p style={styles.topBar}>Hello! :)</p>
            <p style={styles.title}>Säätutka</p>
            {citySelector}
            {shownCity}
        </div >
    )
}

export default App