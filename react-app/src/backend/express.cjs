const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
})


app.get('/muslis',(req,res)=> {
    conn.query("SELECT id, name, price, FROM musli",(err,result,fields)=>{
        if(err) console.warn(err)
        if (result) {
            console.log(result)
            console.log(fields)
            res.sendStatus(200).json({err,result,fields})
        }
        else {
            res.sendStatus(403)
        }
    })
})

app.get((err, req,res) => {

    if(err){
        res.status(404).send("<h1>404 not found</h1>")

    }else {
        res.sendStatus(200)
    }
})

const port = 3333
app.listen(port, err=> console.log("http://localhost:3333/muslis",port,err));