var newHeader = document.createElement("h1");
var header = document.getElementById("header");
const mgs1 = document.getElementById("mgs1")
const mgs2 = document.getElementById("mgs2")
const mgs3 = document.getElementById("mgs3")
const mgs4 = document.getElementById("mgs4")
const clear = document.getElementById("clear-button")
const DropDown = document.getElementById("theme-drop-down")
const opt1 = document.getElementById("opt1")
const opt2 = document.getElementById("opt2")
header.prepend(newHeader);
newHeader.textContent = "JavaScript Made This!!";
newHeader.style.textAlign = "center"
newHeader.style.fontSize = "60px"

var headerName = document.createElement("h3");
header.append(headerName)
headerName.innerHTML = "<span class= 'name'> [Aroma] </span> wrote the javascript."
headerName.style.textAlign = "center"
headerName.style.fontSize = "30px"
mgs1.textContent= "I love to play"
mgs2.textContent= "Which game do you like to play?"
mgs3.textContent="I am good at golf"
mgs4.textContent="Great, I love it too."

 function clearData (){
    mgs1.textContent= ""
    mgs2.textContent= ""
    mgs3.textContent= ""
    mgs4.textContent= ""
 }

 clear.addEventListener("click", clearData)

 function changecolor (){
    console.log(DropDown.value)
if (DropDown.value === "theme-one"){
    mgs1.style.background= "brown"
    mgs3.style.background= "brown"
    mgs2.style.background= "blue"
    mgs4.style.background= "blue"
    mgs2.style.color= "black"
    mgs4.style.color="black"

}
else if (DropDown.value === "theme-two"){
    mgs1.style.backgroundColor= "red"
    mgs3.style.backgroundColor= "red"
    mgs2.style.backgroundColor= "black"
    mgs4.style.backgroundColor= "black"
    mgs2.style.color= "white"
    mgs4.style.color="white"
} 

 }
 DropDown.addEventListener("change", changecolor)




