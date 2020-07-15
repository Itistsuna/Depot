const express = require('express')
const app = express()
const fs = require('fs')
var data = fs.readFileSync('country.json', 'utf-8')
data = JSON.parse(data)
const { isNullOrUndefined } = require('util')
const bodyParser = require('body-parser')
const { json } = require('body-parser')
const jsonfile = require('jsonfile')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// data = JSON.parse(data)

// console.log(data)
var pays = []
var capitals = []
var regionName = []
var subregionName = []
var currency = []
// data = JSON.parse(data)
// console.log(data)
currency = data.map( obj => {
    var monnaie = obj.currencies
    monnaie = monnaie[0].name
    return monnaie
})

subregionName = data.map( obj => {
    var subregion = obj.subregion
    return subregion
})

regionName = data.map( obj => {
    var region = obj.region
    return region
})

capitals = data.map( obj => {
    var capt = obj.capital
    return capt
})

pays = data.map(function(obj){
    var name = obj.name
    return name
})

app.get('/currencies/:currency', function(req, res){
    monnaie = []
    var id = req.params.currency
    currency.forEach((element,index) => {
        if (id == element){
            monnaie.push(pays[index])
        }
    })
    if(monnaie.length === 0){
        res.send('404 not found')
    }
    else if (monnaie.length !== 0){
        res.status(200).json(monnaie)
    }
})

app.get('/regions/:regionName', function(req, res){
    region = []
    var id = req.params.regionName
    regionName.forEach((element,index) => {
        if (id == element){
            region.push(pays[index])
        }
    })
    if(region.length === 0){
        res.send('404 not found')
    }
    else if (region.length !== 0){
        res.status(200).json(region)
    }
})

// Create a new one
/*
Etape 1 Verifier si le pays existe
Si non créer un nouveau pays 
Etape 2 
Creer le pays
*/

app.post('/country/:name', function(req, res){
    var id = req.params.name
    var name = req.body.name
    var alphacode2 = req.body.alpha2code
    var alphacode3 = req.body.alpha3code
    var capital = req.body.capital
    var region = req.body.region
    var subregion = req.body.subregion
    var population = req.body.population
    var denonym = req.body.denonym
    var nativeName = req.body.nativeName
    var flag = req.body.flag
    pays.forEach((element,index) => {
        if (id == element){
            console.log('Le pays est deja dans la base de données')
            res.status(200).json(data[index])
        }
    })
        if (name !== undefined && alphacode2 !== undefined && alphacode3 !== undefined && capital !== undefined
            && region !== undefined && subregion !== undefined && population !== undefined && denonym !== undefined && nativeName !== undefined && flag !== undefined) {
                var nouveauPays = { name, alphacode2, alphacode3, capital, region, subregion, population, denonym, nativeName}
                jsonfile.writeFileSync('./country.json',data + nouveauPays)
                console.log('all good')
                res.json(nouveauPays)
        }
        else {
            console.log('Il manque des parametres pour la création du pays')
            res.send('Erreur , parametre insuffisant')
        }
    })

// DELETE 

app.delete('/country/:name',function(req, res){
    var indexName = null
    var country = []
    var id = req.params.name
    pays.forEach((element,index) => {
        if (id == element){
            country.push(data[index])
            indexName = index
        }
    })
    data.splice(indexName, 1)
    jsonfile.writeFileSync('./country.json', JSON.stringify(data))
    if(country.length === 0){
        res.send('Paix à son âme')
    }
    else if (country.length !== 0){
        res.status(200).json(country)
    }
})


// PUT

app.put('/country/:name', function(req, res){
    var indexName = null
    var country = []
    var id = req.params.name
    pays.forEach((element,index) => {
        if (id == element){ 
            country.push(data[index])
            indexName = index
        }
    })
    fileobj = data[indexName].region = req.body.region
    fileobj1 = data[indexName].subregion = req.body.subregion
    fileobj = fileobj.toString()
    fileobj1 = fileobj1.toString()
    jsonfile.writeFileSync('./country.json',JSON.stringify(data))

    if(country.length === 0){
        res.send('404 not found')
    }
    else if (country.length !== 0){
        res.status(200).json(country)
    }
})


app.get('/country/:name', function(req, res){
        var country = []
        var id = req.params.name
        pays.forEach((element,index) => {
            if (id == element){ 
                country.push(data[index])
            }
        })
        if(country.length === 0){
            res.send('404 not found')
        }
        else if (country.length !== 0){
            res.status(200).json(country)
        }
})
 

// for ( i=0; i < data.length; i++){
//     pays.push(data[i].name)
// }

app.get('/subregion/:subregionName', function(req, res){
    sub = []
    var id = req.params.subregionName
    subregionName.forEach((element,index) => {
        if (id == element){
            sub.push(pays[index])
        }
    })
    res.status(200).json(sub)
    res.status(404).json('404 not found')

})

app.get('/capitals/all', function(req, res){
    res.status(200).json(capitals)
})

app.get('/names/all', function(req, res){
    res.status(200).json(pays)
    res.end()
})


app.get('/', function(req, res){
    res.status(200).send('Simple text')
    res.end()
})

app.get('/teachersName',function(req, res){
    
    res.status(200).send({thomas: "Thomas Jamais", alban: "Alban Meurice"})
    res.end()
})

app.get("/all",function(req,res){
    res.status(200).json(data)
    res.end()
})

app.listen(8080, '127.0.0.1',function(){
    console.log('Now listening to port 8080')
})


app.post('country/:name', (req, res) => {
    const data = req.body;
    // users.push(data);
    // res.json({
    //     index: users.lenghth,
    //     data: users[users.length-1]
    // })
})

