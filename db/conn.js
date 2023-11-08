const { MongoClient } = require('mongodb')
require('dotenv').config()

const uri = "mongodb://0.0.0.0:27017/firstbanco"

const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect()
        console.log('Connecting to MongoDb!')
    } catch (err) {
        console.log(err)
    }
}

run()

module.exports = client