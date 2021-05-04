import { userModel, userSchema } from './repositories/userRepositories';
// @ts-ignore
import express from 'express'
import { routing } from './routing';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
require('dotenv').config()
import fs = require('fs')



// Creation du serveur
const app = express()
// config du serveur


const swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8');
export const customCss: any = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');
export const swaggerDocument = JSON.parse(swaggerData)

// definiton des routes
routing(app)

// init mongoose
// definie une connexion avec la base de donnée
// const pass = 'oK9xLnFfpRk&pK19v%*BO@99y7Uk'
// const user = 'outilMy'
const USER = process.env.DB_USER
const PASS = process.env.DB_PASS
const uri = 'mongodb+srv://' + USER + ':' + PASS + '@cluster0.6d8ty.mongodb.net/outilMy?retryWrites=true&w=majority'
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  // 'mongodb+srv://'+user+':'+pass+'@cluster0.6d8ty.mongodb.net/outilMy?retryWrites=true&w=majority'
  .then(() => {
    console.log('connexion à Mongo réussi')
  })
  .catch(() => {
    console.log(uri)
    console.log('connexion à Mongo échoué')
  })




// app.use(bodyParser.json())


app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS")
  next()
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// Lance le serveur
app.listen(8080, () => {
  console.log("Le serveur est lancé")
})