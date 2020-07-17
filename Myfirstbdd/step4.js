const MongoClient = require('mongodb').MongoClient
const client = new MongoClient('mongodb://127.0.0.1:27017')
const region = ['Europe','Africa','Asia','Oceania','Polar','Northern America','South America','Central America','Caribbean']

async function main() {
    try {
        await client.connect()
        await collection()
        arrayPays = await client.db('mybdd').collection('country_full_data').find().toArray()
        await insert()
        
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

async function collection(){
    try {
        client.connect
        for(i = 0; i < region.length; i++ ){
            client.db('mybdd').createCollection(region[i],{strict:false})
        }

    } catch (error) {
        console.log(error)
    }
}

async function insert(){
    for (i=0; i < arrayPays.length; i++){
        if(arrayPays[i].region == 'Europe'){
            client.db('mybdd').collection('Europe').insertOne(arrayPays[i])
        }
        else if(arrayPays[i].region == 'Africa'){
            client.db('mybdd').collection('Africa').insertOne(arrayPays[i])
        }
        else if(arrayPays[i].region == 'Asia'){
            client.db('mybdd').collection('Asia').insertOne(arrayPays[i])
        }
        else if(arrayPays[i].region == 'Oceania'){
            client.db('mybdd').collection('Oceania').insertOne(arrayPays[i])
        }
        else if(arrayPays[i].region == 'Polar'){
            client.db('mybdd').collection('Polar').insertOne(arrayPays[i])
        }
        else if(arrayPays[i].subregion == 'Northern America'){
            client.db('mybdd').collection('Northern America').insertOne(arrayPays[i])
        }
        else if(arrayPays[i].subregion == 'South America'){
            client.db('mybdd').collection('South America').insertOne(arrayPays[i])
        }
        else if(arrayPays[i].subregion == 'Central America'){
            client.db('mybdd').collection('Central America').insertOne(arrayPays[i])
        }
        else if(arrayPays[i].subregion == 'Caribbean'){
            client.db('mybdd').collection('Caribbean').insertOne(arrayPays[i])
        }
    }
}
main().catch(console.error())