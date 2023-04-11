const {readFile}=require('fs')

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

    /* getText('./content/first.txt')
    .then((result)=> console.log(result))
    .catch((err)=>console.log(err)) */

const start=async()=>{
    try{
    const first=await getText('./content/first.txt')
    const second=await getText('./content/first.txt')
    console.log(first,second)
    }
    catch(error){
        console.log(error)
    }
}

start()

/* const {readFile,writeFile}=require('fs').promises

const start=async()=>{
    try{
    const first=await readFile('./content/first.txt','utf8')
    const second=await readFile('./content/second.txt','utf8')
    await writeFile('./content/result_mind_grenade.txt',
    `This is awesome: ${first} ${second}`)
    console.log(first,second)
    }
    catch(error){
        console.log(error)
    }
}

start() */
