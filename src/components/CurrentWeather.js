import React from 'react'

const CurrentWeather = ({ weatherData }) => {
    const style = {
        box: {
            borderColor: '#E6E6E6'
        },
        next: {
            color: 'black'
        },
        title: {
            fontSize: '23pt'
        }
    }
    return (<div style={style.box}>
        <h1 style={style.title}>Espoo</h1>
        <p>Scattered clouds</p>
        <h5>May 2nd</h5>
        <p>11:53</p>
    </div >)
}

export default CurrentWeather