const express = require("express")
const app = express()
const port = 3004

app.get("/",(req,res)=>{
    res.json({data:"Hello World, testing"})
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})