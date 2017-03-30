const express = require('express')
let founders = require('./founders')
let houses = require('./houses')

let app = express()
let port = process.env.PORT || 3000;
app.listen(port, listen);

app.get('/founders', indexFounders);
app.get('/founders/:id', showFounder);
app.delete('/founders/:id', deleteFounder);

app.get('/houses', indexHouses);
app.get('/houses/:id', showHouse);
app.delete('/houses/:id', deleteHouse);

function listen(){
  console.log(`listening on ${port} yoooo`)
}

function indexFounders(req, res){
  res.json(founders)
}

function showFounder(req, res){
  for(let f = 0; f < founders.length; f++){
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
  for(let f = 0; f < founders.length; f++){
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

function indexHouses(req, res){
  res.json(houses)
}

function showHouse(req, res){
  console.log(houses.length);
  for (let h = 0; h < houses.length; h++) {
    console.log(`YO! ${houses[h].id} ${req.params.id} ${houses[h].id == req.params.id}`);
    if(houses[h].id == req.params.id){
      res.status(200)
      res.json(houses[h])
      return
    }
  }
  res.status(400)
  res.json({message: `House '${req.params.id}' not found`})
}

function deleteHouse(req, res){
  for(let h = 0; h < founders.length; h++){
    if(founders[h].id == req.params.id){
      founders.splice(h, 1);
      res.status(200)
      res.json({message: `House '${req.params.id}' successfully deleted`})
      return
    }
  }
  res.status(400)
  res.json({message: `House '${req.params.id}' not found`})
}
