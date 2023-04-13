const express=require('express')
const app=express()
const {products}=require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts= products.map((product)=>{
        const {id,name,image}=product
        return {id, name, image}
    })
    
})

app.get('/api/products/:ID',(req,res)=>{
    const{ID}=req.params
    const singleProduct=products.find((product)=>product.id===Number(ID))

    if(!singleProduct){
        return res.status(404).send('Product does not exists')
    }
    return res.json(newProducts)

    /* console.log(singleProduct)
    res.json(singleProduct) */
})

app.get('/api/products/:prodID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('Hello world')
})

app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query)
    const {search,limit}=req.query
    let sortedProducts=[...products]

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        //res.status(200).send('no products matched your search')
        return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts)
    res.send('Hello world')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})