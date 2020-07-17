const MongoClient = require('mongodb').MongoClient
const client = new MongoClient('mongodb://127.0.0.1:27017')
const fetch = require('node-fetch')
let arrayPays = undefined

async function main(){
    try {
        await client.connect()
        arrayPays = await client.db('mybdd').collection('country_names').find().toArray()
        for(let i = 0 ; i < arrayPays.length; i++){
            let my_fetch = await fetch(`https://restcountries.eu/rest/v2/name/${arrayPays[i].name}`)
            let my_res_fetch = await my_fetch.json()
            client.db('mybdd').collection('country_full_data').insertMany(my_res_fetch)
        }
    } catch(error) {
        console.log(error)
    } 
    finally {
        await client.close()
    }
}

main().catch(console.error) 