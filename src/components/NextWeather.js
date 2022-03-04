import React from 'react'

const NextWeather = ({ weatherData }) => {
    const style = {
        box: {
            textAlign: 'center'
        },
        topBox: {
            borderStyle: 'solid',
            borderBottomStyle: 'none',
            borderWidth: '2px',
            borderColor: '#E6E6E6',
            borderRadius: '10px 10px 0 0',
            padding: '15px',
            backgroundColor: '#FFFFFF'
        },
        bottomBox: {
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: '#E6E6E6',
            backgroundColor: '#E5F6FD',
            borderRadius: '0 0 10px 10px',
            padding: '10px',
        },
        time: {
            fontSize: '13pt',
            color: '#70757A',
            margin: '0'
        },
        temp: {
            fontSize: '15pt',
            color: '#70757A',
            margin: '0'
        },
        tinyText: {
            fontSize: '10pt',
            color: '#70757A',
            margin: '3px'
        }
    }
    return (
        <div style={style.box}>
            <div style={style.topBox}>
                <p style={style.time}>15:00</p>
                <p>[Icon]</p>
                <p style={style.temp}>-1 &deg;C</p>
            </div>
            <div style={style.bottomBox}>
                <p style={style.tinyText}>2.1 m/s</p>
                <p style={style.tinyText}>5 %</p>
                <p style={style.tinyText}>1 mm</p>
            </div>
        </div>
    )
}

export default NextWeather