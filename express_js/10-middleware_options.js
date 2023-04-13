const express=require('express')
const app=express()
const morgan=require('morgan')
//const logger=require('./logger')
//const authorize=require('./authorize')

//app.use([logger,authorize])
app.use(morgan('tiny'))
//app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.send('Home')
})

//app.use(logger) ->order matters where you put logger
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})