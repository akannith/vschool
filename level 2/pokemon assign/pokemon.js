axios.get("https://api.vschool.io/pokemon")
      .then(response =>{
          for(let i = 0; i < response.data.objects[0].pokemon.length; i++){
                  const h1 = document.createElement('h1')
                  h1.textContent = response.data.objects[0].pokemon[i].name
                  document.body.appendChild(h1)
            }
      }) 
     
      .catch(error => console.log(error))

      


