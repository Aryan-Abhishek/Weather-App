const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXJ5YS1hYmhpc2hlayIsImEiOiJjazZmb2NjMzYxd2lhM2ttZzVvb3k1cHFsIn0.AyZmSOcNANp5ZIwe1-aW3g&limit=1'

    request({url: url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find match for given place! Try another search..', undefined)
        } else {
            callback(undefined, {
                //since we have to return three values hence return an object of the same
                location: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
            })
        }
    })

}

module.exports = geocode