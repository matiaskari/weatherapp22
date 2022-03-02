
const APIkey = '06c6c105b0c70ae431dc41c8de9cff77'

const getWeatherData = async () => {
    const cities = [
        {
            //Tampere
            id: '634963',
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
        const promiseArray = cities.map(city =>
            fetch('api.openweathermap.org/data/2.5/weather?id=' + city.id + '&appid=' + APIkey, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        )
        console.log("Promisearray", promiseArray)
        await Promise.all(promiseArray)
        /*.then(response => {
            console.log(response)
        })*/
        return cities[0].data
    } catch (error) {
        console.log(error)
    }
}

export default { getWeatherData }