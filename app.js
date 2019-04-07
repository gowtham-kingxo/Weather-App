const request = require('request')

const url = 'https://api.darksky.net/forecast/baa1fab91b9163c363d85b3234334f50/37.8267,-122.4233?units=si'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location!');
//     } else {
//         console.log("The current temperature is "+response.body.currently.temperature
//         + " and the chance of rain is "+response.body.currently.precipProbability );
//     }
   
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ293dGhhbWdlbnVwdXIiLCJhIjoiY2p1MzRxdjk1MGprdjQzbnlrM3hpNGU2aiJ9.p0mqB09eXa38cdRa27nfBg'

// request({url: geocodeURL, json: true}, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to location service!');
//     } else if (response.body.features.length === 0) {
//         console.log('Sorry no matching location found!');
//     } else {
//         console.log("long: "+response.body.features[0].center[0]+" lat: "+response.body.features[0].center[1]);
//     }
   

// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZ293dGhhbWdlbnVwdXIiLCJhIjoiY2p1MzRxdjk1MGprdjQzbnlrM3hpNGU2aiJ9.p0mqB09eXa38cdRa27nfBg';

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        }
    })
}

geocode('12what', (error, data) => {

    console.log('Error', error)
    console.log('Data', data)
})