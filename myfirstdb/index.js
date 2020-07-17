const MongoClient = require('mongodb').MongoClient
const fs = require('fs').promises
const client = new MongoClient('mongodb://127.0.0.1:27017')
const element = []

async function main(){
    try {
        const data = await fs.readFile('./country_names.json')
        const dataParsed = await JSON.parse(data)
        console.log(dataParsed.length)
        async function boucle(){
            for (let i = 0; i < dataParsed.length; i++) {
                element.push({'name' : dataParsed[i]})
            }
        }
        await boucle()
        await client.connect()
        await client.db('mybdd').createCollection('country_names',{strict:false})
        await client.db('mybdd').collection('country_names').insertMany(element)
    } catch (e) {
        console.log(e)
    } finally {
        await client.close()
    }

}

main().catch(console.error)
