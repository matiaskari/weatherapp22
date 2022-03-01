import axios from 'axios'

const APIkey = '06c6c105b0c70ae431dc41c8de9cff77'

const getWeatherData = async () => {
    const cities = [
        {
            //Tampere
            id: '634963'.toString(),
            data: ''
        },
        {
            //Jyväskylä
            id: '655195',
            data: ''
        },
        {
            //Kuopio
            id: '650225',
            data: ''
        },
        {
            //Espoo
            id: '660129',
            data: ''
        }
    ]
    try {
        const promiseArray = cities.map(city => city.data =
            axios.get('api.openweathermap.org/data/2.5/weather?id=' + city.id + '&appid=' + APIkey), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("Promisearray", promiseArray)
        const request = await Promise.all(promiseArray)
        console.log("Cities", cities)
        return request.then(response => response.data)
    } catch (error) {
        console.log(error)
    }
}

export default { getWeatherData }