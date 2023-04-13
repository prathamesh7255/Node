const express=require('express')
const router=express.Router()

router.post('/',(req,res)=>{
    const {name}=req.body
    if(name){
        return res.status(200).json(`Welcome ${name}`)
    }

    res.status(401).json('Please provide valid credentials')
})

module.exports=router