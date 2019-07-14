# LAB - 07

## Express Server Middleware

### Author: Ai with help from my friends: AJ, Liz, Austin, Adriana

### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-aimurphy/lab-07-middleware/pull/4)
* [![Build Status](https://travis-ci.com/401-advanced-javascript-aimurphy/lab-07-middleware.svg?branch=master)](https://travis-ci.com/401-advanced-javascript-aimurphy/lab-07-middleware)
* [server.js]

#### Documentation
* [express](https://www.npmjs.com/package/express)

### Modules
#### `routes.js`
##### router

###### `app.get(req,res) -> string`
returns endpoints

###### `app.use(req,res) -> next()`
Runs a function that can be applied globally

### Setup
#### `.env` requirements
* `PORT` - 8080

#### Running the app
* `nodemon`
* Endpoint: `/a/`
  * Returns path A with date/time, method, route.
* Endpoint: `/b/`
  * Returns path B with date/time, method, route as well as a squared number.
* Endpoint: `/c/`
  * Returns path C with date/time, method, route.
* Endpoint: `/d/`
  * Returns an error.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
![written by Austin and Aileen, collaborated with Adriana and Adrienne](https://github.com/401-advanced-javascript-aimurphy/lab-07-middleware/blob/master/IMG_7642.jpg?raw=true)
