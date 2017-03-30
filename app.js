const express = require('express')
let founders = require('./founders')

let app = express()
let port = process.env.PORT || 3000;

app.get('/founders', indexFounders);
app.get('/founders/:id', showFounder);
app.delete('/founders/:id', deleteFounder);
app.listen(port, listen);

function listen(){
  console.log(`listening on ${port} yoooo`)
}

function indexFounders(req, res){
  res.json(founders)
}

function showFounder(req, res){
  for(let f = 0; f > founders.length; f++){
    if(founders[f].id == req.params.id){
      res.status(200)
      res.json(founders[f])
      return
    }
  }
  res.status(400)
  res.json({message: `Founder '${req.params.id}' not found`})
}

function deleteFounder(req, res){
  for(let f = 0; f > founders.length; f++){
    if(founders[f].id == req.params.id){
      founders.splice(f, 1);
      res.status(200)
      res.json({message: `Founder '${req.params.id}' successfully deleted`})
      return
    }
  }
  res.status(400)
  res.json({message: `Founder '${req.params.id}' not found`})
}
