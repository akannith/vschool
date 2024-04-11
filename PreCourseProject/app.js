lightBulbisOn = false;

function clickme() {
    lightBulbisOn = true;
    console.log(lightBulbisOn)
    // let lightbulb = "off"
    if(lightBulbisOn === true) {
        alert ("Hey that light is on!")
    } else {alert("Its dark, can we please turn the light on?")}
}




function Next() {
    const Array = ['red', 'orange', 'yellow', 'green', 'blue']
    for(let i = 0; i < Array.length; i++){
        console.log(i)
        alert(Array[i])
    }
}

var Goods = {
    Dairy: ["Milk", "eggs", "cheese"], 
    Meats: ["chicken", "beef", "seafood"],
    Beverage: ["soda", "juice"]
}

console.log(Goods.Dairy)
console.log(Goods.Meats)
console.log(Goods.Beverage)