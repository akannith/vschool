let todoInput = {
    //...todoData
}

let currentEdit = {}

function clearList(){
    const el = document.getElementById("todo-list")
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}



function getData(){
    axios.get("https://api.vschool.io/aroma/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))

}

function listData(data){
   clearList()
        for(let i = 0; i < data.length; i++){
            console.log('get call',data[i]._id)
            const card = document.createElement('div')
            card.id = data[i]._id
            const check = document.createElement('input')
            check.setAttribute('type', 'checkbox')
            check.addEventListener("click", function() {
                console.log("checkbox test")
                if (check.checked === true) {
                    h1.style.textDecoration = "line-through"
                    completedTextElement.textContent= 'completed'
                    axios.put("https://api.vschool.io/aroma/todo/" + data[i]._id , { completed: true})
                } else if (check.checked === false){
                    h1.style.textDecoration = "none"
                    completedTextElement.textContent= 'incomplete'
                    axios.put("https://api.vschool.io/aroma/todo/" + data[i]._id , { completed: false})
                }
                
            })

            const completedTextElement = document.createElement('label')
            completedTextElement.textContent = data[i].completed === true ? 'completed' : 'incomplete'
            
            const h1 = document.createElement('h1')
            h1.textContent = data[i].title
            document.getElementById("todo-list").appendChild(card)
            if ( data[i].completed === true) {
                h1.style.textDecoration = "line-through"
                check.checked = true
            }
            const image = document.createElement("img")
            image.src= data[i].imgUrl
            console.log(image)
            const del = document.createElement('button')
            del.textContent = "Delete"
            del.addEventListener("click", function(){
                axios.delete("https://api.vschool.io/aroma/todo/" + data[i]._id)
                card.remove()
            })
                    
                    card.appendChild(h1)
                    card.appendChild(image)
                    card.appendChild(check)
                    card.appendChild(completedTextElement)
                    card.appendChild(del)
                    
        }
            }
            
    
                    
                
                    const todoForm = document.todoform
                    
    todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    const createTodo = {
    title: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value,
    imgUrl: todoForm.imgUrl.value,
}



axios.post("https://api.vschool.io/aroma/todo", createTodo)
. then (res => getData(res.data))
 .catch(err => console.log(err))
})

getData()
