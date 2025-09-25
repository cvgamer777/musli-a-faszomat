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

app.post('/muslis', (req,res)=>{
    const {name,price} = req.body
    if  (!name || price<1 ) res.sendStatus(300)
    conn.query("INSERT INTO muslis (name,price) VALUES (?,?)", [name,price], (err,result,fields) => {
        const insertId = result?.insertId

        console.log('insertId' , result?.insertId)
        const responseBody  = {id: insertId,...req.body}
        res.status(201).json(responseBody)

    }) 
})

app.patch('/muslis', (req,res)=>{
    const {id} = req.body
    const newName = 'name' in req.body.name? req.body.name : null
    const newPrice = req.body.price?req.body.price : NaN
    let queryStr = "UPDATE muslis SET"
    const updates = []
    const values = []
    if (newName) {
        updates.push("name=;")
        values.push(newName)
    }
    if (newPrice>0) {
        updates.push("push=?")
        values.push(newPrice)
    }
    values.push(+id)
    conn.query(`UPDATE muslis SET ${updates.join(",")} WHERE id =?`,values, [newName,newPrice,id], (err,result,fields)=>(res.status(200).json({updateId: id,newName,newPrice, ...result})))

})

app.get('/muslis',(req,res)=> {
    conn.query('SELECT id, name, price FROM muslis',(err,result,fields)=>{
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