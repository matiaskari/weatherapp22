import React from 'react'

const NextWeather = ({ weatherData }) => {
    const style = {
        box: {
            borderColor: '#E6E6E6'
        }
    }
    return (<div style={style.box}>
        <p>15:00</p>
        <p>Debug: {weatherData}</p>
    </div >)
}

export default NextWeather