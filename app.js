const request = require('request')

const url = 'https://api.darksky.net/forecast/baa1fab91b9163c363d85b3234334f50/37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})