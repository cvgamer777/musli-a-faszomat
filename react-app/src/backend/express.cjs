const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get((err, req,res) => {
    if(err){
        res.status(404).send("<h1>404 not found</h1>")

    }else {
        res.sendStatus(200)
    }
})

const port = 3333
app.listen(port, err=> console.log("http://localhost:3333",port,err));