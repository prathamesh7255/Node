/* const {createReadStream}=require('fs')

const stream=createReadStream('./content/big.txt')

stream.on('data',(result)=>{
    console.log(result)
}) */
const {createReadStream}=require('fs')

const stream=createReadStream('./content/big.txt',{
    highWaterMark: 90000,
})

stream.on('data',(result)=>{
    console.log(result)
})
stream.on('data',(result)=>{
    console.log(result)
})