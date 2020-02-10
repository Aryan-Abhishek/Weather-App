const request = require('request')

const url = 'https://api.darksky.net/forecast/38ca92b4206afef0c7003e2df3676fe3/37.8267,-122.4233'

request({ url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.currently)

    //console.log(response.body.currently.precipProbability)
    if (error) {
        console.log('Unable to connect to weather services!')
    } else if (response.body.error) {
        console.log('Unable to find the location!')
    } else {
        console.log('It\'s currently ' + response.body.currently.temperature + ' degrees out. There is a chance ' + response.body.currently.precipProbability*100 + '% of rain.')
    }

})


const weatherURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJ5YS1hYmhpc2hlayIsImEiOiJjazZmb2NjMzYxd2lhM2ttZzVvb3k1cHFsIn0.AyZmSOcNANp5ZIwe1-aW3g&limit=1'

request({url: weatherURL, json: true}, (error, response) => {

    if (error) {
        console.log('Unable to connect to weather services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find match for given place!')
    } else { 
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
    }
})