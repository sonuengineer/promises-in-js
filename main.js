const posts=[
    {title:"post one",body:"this is post one"},
    {title:"post two",body:"this is post two"}
]

function getpost(){
    setTimeout(()=>{
        let output=""
       // for(let i=0;i<posts.length;i++){
           // output+=posts[i].title + "\n" 
        //}
        posts.forEach((post,index)=>{
            output+='<li>${post.title}</li>'
        })
        document.body.innerHTML=output


    },1000)
}

function creatpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error=false;
            if(!error){
                resolve()
            }else{
                reject()
            }
        },2000)
    })
}



function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           while(posts.length>0){
            if(posts.value!==0){
                resolve(posts.pop())
            }else{
                reject("array is empty now")
            }
            posts.length--
           }
            
        },1000)
    })
}

//creatpost({title:"post three",body:"this is post three"}).then(getpost).catch(err=>console.log(err)).then(deletepost)
creatpost({title:"post three",body:"this is post three"}).then(()=>{
    getpost()
    deletepost().then(()=>{
        getpost().catch(err=>console.log(err)) 
    })
}).catch(err=>console.log(err)).then(()=>{deletepost()}).catch(err=>console.log(err)) 