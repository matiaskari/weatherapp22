
import React, { useState, useEffect } from 'react'
import weatherService from './services/Weather.js'

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
      fontFamily: 'Arial, Helvetica, sans-serif'
    }
  }

  return (
    <div style={styles.container}>
      Test

    </div >
  )
}

export default App