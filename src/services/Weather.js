
const APIkey = ''

const getWeatherData = async () => {
    const cityIDs = [
        '660129', //Espoo
        '655195', //Jyväskylä
        '650225', //Kuopio
        '634963' //Tampere
    ]
    try {
        const endArray = [[], [], [], []] //Sorting all the data by city, with each array element containing an array that has first the current weather and then the forecast of the city
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        for (let i = 0; i < cityIDs.length; i++) { //Fetching current weather for all cities
            await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityIDs[i] + '&appid=' + APIkey, requestOptions)
                .then(response => response.json())
                .then(result => endArray[i].push(result))
                .catch(error => console.log('error', error))
        }
        for (let i = 0; i < cityIDs.length; i++) { //Fetching 5-day weather forecast for all cities
            await fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + cityIDs[i] + '&appid=' + APIkey, requestOptions)
                .then(response => response.json())
                .then(result => endArray[i].push(result))
                .catch(error => console.log('error', error))
        }
        return endArray
    } catch (error) {
        console.log(error)
    }
}

export default { getWeatherData }