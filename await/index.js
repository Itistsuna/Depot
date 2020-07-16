const fs = require('fs').promises
const fetch = require('node-fetch')
const util = require('util')
const { parse } = require('path')
async function test(){
    let réponse = []
    const rf = await fs.readFile('./data.json')
    let Parsedrf = await JSON.parse(rf)
    const response = await fetch('https://restcountries.eu/rest/v2/all') 
    données = await response.json();
    pays = données.map(function(obj){
        var name = obj.name
        return name
    })    
    async function boucle(){
        for (i = -1 ;  i < Parsedrf.country.length; i++){
            pays.forEach((element, index) => {
                if (element == Parsedrf.country[i]){
                    console.log('All it’s ok, there is no error.')
                    réponse.push(données[index])
                }
        });
    }}
    x = await boucle()
    const préponse = x = JSON.stringify(réponse)
    fs.writeFile('res.json',préponse ,function(err){
        if(err){
            throw err
        }
    })
    
}
test()


 




