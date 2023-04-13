const logger =(req,res,next)=>{
    const method=req.methodconst 
    const url=req.urlconst 
    const time=new Date().getFullYear()
    console.log(method,url,time)
    next()
}

module.exports=logger