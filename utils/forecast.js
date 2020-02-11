const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/38ca92b4206afef0c7003e2df3676fe3/' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location! Please try again..', undefined)
        } else {
            callback(undefined, 'It\'s ' + body.daily.data[0].summary + 'currently ' + body.currently.temperature + ' degrees out. There is ' + body.currently.precipProbability*100 + '% chance of rain.')
        }
    })
}

module.exports = forecast