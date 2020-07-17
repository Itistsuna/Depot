const { Db } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const fs = require('fs').promises
const client = new MongoClient('mongodb://127.0.0.1:27017')
const element = []

async function main(){
    const data = await fs.readFile('./country_names.json')
    const dataParsed = await JSON.parse(data)
    console.log(dataParsed.length)
    async function boucle(){
        for (let i = 0; i < dataParsed.length; i++) {
            element.push({'name' : dataParsed[i]})
    }}
    await boucle()
    try {
    await client.connect()
    const col = client.db('mybdd').collection('country_names')
    col.insertMany(element)
    } catch (e) {
        console.log(e)
    } finally {
        await client.close()
    }

}

main().catch(console.error)
