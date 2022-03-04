
const APIkey = '06c6c105b0c70ae431dc41c8de9cff77'

const getWeatherData = async () => {
    const cityIDs = [
        '634963', //Tampere
        '655195', //Jyväskylä
        '650225', //Kuopio
        '660129'  //Espoo
    ]
    try {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch('https://api.openweathermap.org/data/2.5/weather?id=660129&appid=06c6c105b0c70ae431dc41c8de9cff77', requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))// this will get the json . you can check out from the log , and happy birthday to you GT
            .catch(error => console.log('error', error));


        const endArray = []
        const promiseArray = cityIDs.map(id => {
            fetch('https://api.openweathermap.org/data/2.5/weather?id=' + id + '&appid=' + APIkey)
                .then(function (response) {
                    console.log(response);
                    return response.json();
                });
        })
        console.log("Promisearray", promiseArray)

        await Promise.all(promiseArray)
            .then(data => {
                data.forEach(cityData => endArray.push(cityData))
            })

        console.log('EndArray', endArray)
        return endArray
    } catch (error) {
        console.log(error)
    }



}

export default { getWeatherData }
