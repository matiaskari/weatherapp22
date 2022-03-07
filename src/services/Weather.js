
const APIkey = '06c6c105b0c70ae431dc41c8de9cff77'

const getWeatherData = async () => {
    const cityIDs = [
        '660129', //Espoo
        '655195', //Jyväskylä
        '650225', //Kuopio
        '634963' //Tampere
    ]
    try {
        const endArray = []
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        for (let i = 0; i < cityIDs.length; i++) {
            await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityIDs[i] + '&appid=' + APIkey, requestOptions)
                .then(response => response.json())
                .then(result => endArray.push(result))
                .catch(error => console.log('error', error))
        }
        console.log('EndArray', endArray)
        return endArray
    } catch (error) {
        console.log(error)
    }
}

export default { getWeatherData }