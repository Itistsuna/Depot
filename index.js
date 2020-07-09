const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.status(200).send('Simple text')
    res.end()
})

app.get('/teachersName',function(req, res){
    
    res.status(200).send({thomas: "Thomas Jamais", alban: "Alban Meurice"})
    res.end()
})

app.get("/all",function(req,res){
    res.status(200).render('/country')
    res.end()
})

app.listen(8080, '127.0.0.1',function(){
    console.log('Now listening to port 8080')
})