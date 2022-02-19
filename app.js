const updateBtn = document.querySelector('.updateBtn')
const submitUser = document.querySelector('.submitUser')

// Submit USer
submitUser.addEventListener('click',(event)=>{
    event.preventDefault()
    const username = document.querySelector('.username').value
    async function postUsername(username){
        try{
            const result = await fetch("http://127.0.0.1:3000/api/users",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    username
                })
            })
            if(result){
                console.log("User added")
                
            }
            // console.log(result)
        }catch(error){
            console.error(error.message)
        }
    }
    postUsername(username)
})

updateBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    const id = document.querySelector('.id').value
    const description = document.querySelector('.description').value
    const duration = document.querySelector('.duration').value
    const date = document.querySelector('.date').value

    
    async function postData(id,description,duration,date){
        try {
            const result = await fetch(`http://127.0.0.1:3000/api/users/${id}/exercises`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    _id:id,
                    description:description,
                    duration:Number(duration),
                    date:date
                })
            })
            if(result){
                console.log("Exercise added")
            }else{
                console.log("Error adding exercise")
            }
        } catch (error) {
            console.error(error)
        }
    }
    postData(id,description,duration,date)
})

// GET ALL USERS
const getAll = document.querySelector('.getAll');
let box="";
const boxContainer=document.querySelector('.box')
getAll.addEventListener('click',(event)=>{
    async function getAll(){
        try{
            const result = await fetch("http://127.0.0.1:3000/api/users");
            const data = await result.json()
            box=''
            data.forEach(item=>{
                box+=`<p class="bg-info p-1 m-2 rounded">${item.username}</p>`
            })
            boxContainer.innerHTML=box
        }catch(error){
            console.log(error.message)
        }

    }
    getAll()
})