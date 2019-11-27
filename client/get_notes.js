const client = require('./client-grpc')
client.list({}, (error, notes) => {
    if (!error) {
        console.log('successfully fetch List notes')
        console.log(notes)
    } else {
        console.error(error)
    }
})