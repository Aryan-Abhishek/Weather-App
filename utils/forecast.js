const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/38ca92b4206afef0c7003e2df3676fe3/' + latitude + ',' + longitude

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to Weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location! Please try again..', undefined)
        } else {
            callback(undefined, 'It\'s ' + response.body.daily.data[0].summary + 'currently ' + response.body.currently.temperature + ' degrees out. There is ' + response.body.currently.precipProbability*100 + '% chance of rain.')
        }
    })
}

module.exports = forecast