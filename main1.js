const Promise1=Promise.resolve("sonu")
const Promise2=10;
const Promise3=new Promise((resolve,reject)=>
setTimeout(resolve,200,"goodby"))

const Promise4=fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json())

Promise.all([Promise1,Promise2,Promise3,Promise4]).then(values=>console.log(values))




const users=[
    {username:"sonu",lastactitvitytime:"25 aug 2022"},
    {username:"monu",lastactitvitytime:"26 aug 2022"}
]



function getpost(){
    setTimeout(()=>{
        let output=""
       // for(let i=0;i<posts.length;i++){
           // output+=posts[i].title + "\n" 
        //}
        users.forEach((user,index)=>{
            output+='<li>${user.username}</li>'
        })
        document.body.innerHTML=output


    },1000)
}

function creatpost(post){
    return new Promise((resolve,reject)=>{
        updatelastactivitytime()
        setTimeout(()=>{
            users.push(post)
            const error=false;
            if(!error){
                resolve()
            }else{
                reject()
            }
        },2000)
    })
}

function updatelastactivitytime(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            updatelastactivitytime=new Date.getTime()
            resolve(updatelastactivitytime)
        },1000)
    })
}

Promise.all([creatpost,updatelastactivitytime])