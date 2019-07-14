'use strict';

const express = require('express');

const app = express();

const routes = require('./routes.js');

const PORT = process.env.PORT || 8080;

const requestTime = (req, res, next)=>{
  req.requestTime = new Date().toUTCString();
  // console.log(req.requestTime);
  next();
}

const consoleLog = (req, res, next)=>{
  console.log(`🌟method ${req.method} for endpoint ${req.path} at ${req.requestTime}`);
  next();
}

const justForD = (req, res, next)=>{
  if(req.path==='/d'){
    next('d');
  }
  next();
}

const justForB = (num)=>{
  //takes a number as a parameter, squares it, and and sets that value on the request object in a property called number
  return (req,res,next)=>{
    req.number = num*num;
    // res.send = req.number;
    next();
  }
}

app.use(requestTime);
app.use(consoleLog);
app.use(justForD);
// app.use(justForB);
app.use(routes);

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

//Alter the /b route to .send() that number from the request object to the browser
app.get('/b', justForB(2),(req,res) => {
  res.status(200).send(`Route B ${req.number}`);
});

// app.get('/c', (req,res) => {
//   res.status(200).send('Route C');
// });

// app.get('/d', (req,res) => {
//   res.status(200).send('Route D');
// });

app.use('*',(req, resp)=>{
  resp.status(404).send('not found');
})

app.use((err,req, resp, next)=>{
  resp.status(500).send(err);
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

