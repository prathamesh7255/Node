// const hobbies=['sports','cooking'];
// console.log(hobbies.map(hobby=> 'hobby is: '+ hobby));
// console.log(hobbies);
//  const copy=[...hobbies];
//  console.log(copy);
//  const array=(...args)=>{
//     return args;
//  }
// console.log(array(1,2,3,4));



const fetchdata=()=>
{
    const promise= new Promise((resolve, reject)=>
    {
    setTimeout(() => {
        resolve('done!');
        
    }, 1500);
});
return promise;
};

setTimeout(()=>
{
console.log('timer is done');
fetchdata().then(text=>
    {
        console.log(text);
        return fetchdata()
    })
    .then(text=>
        {
            console.log(text);
            return fetchdata()
        });

},2000);

console.log('hello');
console.log('hi there');