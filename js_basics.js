"use strict"
let str1="I am \"partahmesh\""
console.log(str1)

let str2=`<a href="http://www.abc.com" target="_blank">Link</a>`
console.log(str2)

/*
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\form feed
*/

let str3="first_line\n\t\\second_line\nthird_line"
console.log(str3)

//strings are immutable.
//you can change entire string but not single character

let arr1= ["john",1,2.0,2.5]
console.log(arr1)

let arr2=["a","b","c"]
arr2.push(["d","e"])
arr2.unshift("d","e")
console.log(arr2)
arr2.pop()
arr2.shift()
console.log(arr2)

let arr3=[["a","b"],["c","d"],["e","f"]]
arr3.push("g",["h","i"])
arr3.unshift("g",["h","i"])
console.log(arr3)
arr3.pop()
arr3.shift()
console.log(arr3)
arr3.pop()
console.log(arr3)

function func1(){
    let myglobal=5
}

function func2(){
    let output=""
    if(typeof myglobal!="undefined"){
        output+="myglobal: "+myglobal
    }
    console.log(output)
}
func1()
func2()

function func3(arr,item){
    arr.push(item)
    return arr.shift()
}

let arr4=[1,2,3,4,5]
console.log("Before: "+ JSON.stringify(arr4))
console.log(func3(arr4,6))
console.log("After: "+ JSON.stringify(arr4))

//== and === and also != and !==

let obj={
    "name":"prathamesh",
    20:"age",
    "tails":1
};

obj.name="patil"
obj[20]="current age"
obj.age=20
delete obj[20]
console.log(obj)
//kind of mapping from key to value

function check_prop(property){
    if(obj.hasOwnProperty(property)){
        return obj[property]
    }
    else {
        return "Not Found"
    }
}
console.log(check_prop("friends"))

let artist=[{
    "name":"arijit",
"title":"singer",
"debut":2002,
"formats":[
    "CD","8T","LP"
],
"award":true
},
//add record here
{
    "name":"darshan",
"title":"singer",
"debut":2013,
"formats":[
    "CD"
    ,"8T"
    ,"LP"
],
"award":false
}]
console.log(artist)
console.log(artist[1].formats[0])

let collection = {"1":{
    "name":"arijit",
"songs":["abc","def"],
"album":"debut"
},
"2":{
    "name":"darshan",
    "songs":["ghi","jkl"],
    "album":"debut_1"
}};

let collection_copy=JSON.parse(JSON.stringify(collection))

function func4(id, prop, val){
    if(val ===""){
        delete collection[id][prop]
    }
    else if(prop=="songs"){
        collection[id]["songs"]=collection[id]["songs"] || []
        collection[id]["songs"].push(val)

    }
    else{
        collection[id][prop]=val
    }
    console.log(collection)
}
func4("1","name","singh")
func4("2","songs","mno")
func4("2","album","")
console.log(collection)

console.log(Math.random())
console.log(Math.floor(Math.random()*20))
let ourmin=20
let ourmax=30
console.log(Math.floor(Math.random()*(ourmax-ourmin+1))+ourmin)

console.log(parseInt("56"))
console.log(parseInt("1000111",2))

function checksign(num){
    return num>0 ? "positive":num<0?"negative":0;
}
console.log(checksign(0))

function checkscope(){
    let i ="function"
    if(true){
        let i="block"
        console.log("scope is: ",i)
    }
    console.log("scope is: ",i)

}
checkscope()

const arr5=[5,7,2]
arr5[0]=2
arr5[1]=5
arr5[2]=7
arr5.push(7,8)
arr5.pop()
console.log(arr5)

const math_constants={"pi":3.14};
Object.freeze(math_constants)
try{
    math_constants.pi=10
}
catch(err){
    console.log(err)
}
console.log(math_constants.pi)
console.log(typeof(math_constants))

const magic=(num)=> num>0
console.log(magic(10))

const arr6=[4,5.6,-9,3.14,24,7,9.4,-2.5]
const squared=(arr)=>
    arr.filter((num)=>
    Number.isInteger(num) && num>0).map((x)=>
    x*x)
console.log(squared(arr6))

const [, , ...arr7]=arr6
console.log(arr7)

const stats={
    max: 56.78,
    std_dev:4.34,
    median:34.54,
    mode:23.87,
    min:-0.75,
    average:35.85
}
const func5=(function(){
    return function half({max,min}){
        return (max+min)/2
    }
})()
console.log(func5(stats))

const person=(name,age,gender)=>({name,age,gender})
console.log(person("prathamesh",21,"male"))

const cycle={
    gear:2,
    set_gear(new_gear){
        this.gear=new_gear
    }
}
cycle.set_gear(4)
console.log(cycle.gear)

class veg{
    constructor(name){
        this.name=name;
    }
}
const carrot=new veg('apple')
console.log(carrot.name)

class thermo{
    constructor (temp){
        this._temp=5/9*(temp-32)
    }
    get temperature(){
        return this._temp
    }
    set temperature(update){
        this._temp=update
    }
}
const obj1=new thermo(89)
let temp=thermo.temperature
thermo.temperature=30
temp=thermo.temperature
console.log(temp)