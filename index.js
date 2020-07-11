const express = require('express')
const app = express()
const fs = require('fs')
const { isNullOrUndefined } = require('util')
var data = fs.readFileSync('country.json')
data = JSON.parse(data)
var pays = []
var capitals = []
var regionName = []
var subregionName = []
var currency = []

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

app.get('/country/:name', function(req, res){
        var id = req.params.name
        pays.forEach((element,index) => {
            if (id == element){ 
                res.status(200).json(data[index])
            }
        })
        res.status(404).send("404 not found")
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

    console.log(data)
    // users.push(data);
    // res.json({
    //     index: users.lenghth,
    //     data: users[users.length-1]
    // })
})