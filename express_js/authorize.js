const authorize=(req,res,next)=>{
    const {user}=req.query
    if(user==='prathamesh'){
        req.user={name:'prathamesh',id:7}
        console.log('Authorized!')
    next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
    
}

module.exports=authorize