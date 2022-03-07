
import React, { useState, useEffect } from 'react'
import weatherService from './services/Weather.js'
import City from './components/City.js'
import './index.css'

const App = () => {
    const [weatherData, setWeatherData] = useState([]) //Storing all the fetched weather data here
    const [dropDownValue, setDropDownValue] = useState('Kaikki kaupungit') //Storing the value of the dropdown menu here

    useEffect(() => { //On page load, fetch all the current weather data and store it in 'weatherData'
        async function getData() {
            const data = await weatherService.getWeatherData()
            setWeatherData(data)
            console.log('Weatherdata', data)
        }
        getData()
    }, [])
    const styles = {
        page: {
            width: '100%',
            height: '100%',
            fontFamily: 'Arial Regular, Helvetica, sans-serif',
            margin: '0',
            padding: '0',
            display: 'grid',
            justifyItems: 'center',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        title: {
            width: '100vw',
            fontSize: '23pt',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            margin: '0',
            padding: '0.7em 0 0.7em 0',
            borderStyle: 'solid none solid none',
            borderTopWidth: '20px',
            borderTopColor: '#00A5E5',
            borderBottomWidth: '2px',
            borderBottomColor: '#E6E6E6',
        },
        dropdown: {
            width: '20vw',
            borderRadius: '7px',
            borderColor: '#E6E6E6',
            borderWidth: '2px',
            fontSize: '13pt',
            padding: '10px',
            margin: '20px 20px 0 20px'
        }
    }

    const handleChange = (event) => {
        setDropDownValue(event.target.value)
    }

    //creating the dropdown menu
    const citySelector =
        <select style={styles.dropdown} name='cities' onChange={handleChange}>
            <option value={'Kaikki kaupungit'}>Kaikki kaupungit</option>
            <option value={'660129'}>Espoo</option>
            <option value={'655195'}>Jyväskylä</option>
            <option value={'650225'}>Kuopio</option>
            <option value={'634963'}>Tampere</option>
        </select>

    //Variable for which city to show, based on the dropdown menu
    let shownCity = <div></div>

    if (dropDownValue === 'Kaikki kaupungit') { //All cities, default value
        shownCity = <div>
            <City weatherData={weatherData[0]} />
            <City weatherData={weatherData[1]} />
            <City weatherData={weatherData[2]} />
            <City weatherData={weatherData[3]} />
        </div>
    } else { //Single city
        shownCity = <div>
            <City weatherData={weatherData.find(city => city[0].id.toString() === dropDownValue)} />
        </div>
    }

    return (
        <div style={styles.page}>
            <p style={styles.title}>Säätutka</p>
            {citySelector}
            {shownCity}
        </div >
    )
}

export default App