import React from 'react'

const CurrentWeather = ({ weatherData }) => {
    const style = {
        box: {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            gridTemplateRows: '2',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: '#E6E6E6',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#FFFFFF'
        },
        title: {
            fontSize: '23pt',
            color: '#262626',
            margin: '0',
            gridColumn: '1'
        },
        subTitle: {
            fontSize: '15pt',
            color: '#70757A',
            margin: '0',
            gridColumn: '1'
        },
        smallText: {
            fontSize: '13pt',
            color: '#70757A',
            margin: '0'
        },
        smallTextRight: {
            fontSize: '13pt',
            color: '#70757A',
            margin: '0',
            gridColumn: '2',
            textAlign: 'right',
            verticalAlign: 'bottom'
        },
        temp: {
            fontSize: '26pt',
            color: '#262626',
            margin: '0',
            gridColumn: '2',
            textAlign: 'right',
            verticalAlign: 'top'
        },
        bottomLeftBox: {
            verticalAlign: 'bottom'
        }
    }
    return (
        <div style={style.box}>
            <div>
                <p style={style.title}>Espoo</p>
                <p style={style.smallText}>Scattered clouds</p>
            </div>
            <div>
                <p style={style.temp}>0 &deg;C</p>
            </div>
            <div>
                <p style={style.subTitle}>May 2nd</p>
                <p style={style.smallText}>11:53</p>
            </div>
            <div>
                <p style={style.smallTextRight}>Wind: 5.1 m/s</p>
                <p style={style.smallTextRight}>Humidity: 86 %</p>
                <p style={style.smallTextRight}>Precipitation (3 h): 5 mm</p>
            </div>
        </div>
    )
}

export default CurrentWeather