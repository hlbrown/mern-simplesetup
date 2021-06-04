import express from 'express'
import path from 'path'
import template from './../template'
import { MongoClient } from 'mongodb'

//comment this out in production
//import devBundle from './devBundle'

const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-simplesetup' 
MongoClient.connect(url, (err, db) =>{
    console.log("connected Successfully to mongodb server")
    db.close()
})

app.get('/', (req, res) => {
    res.status(200).send(template())
})
let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err){
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})



const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

const app = express()
//comment out for production
//devBundle.compile(app)