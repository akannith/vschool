
let statuses =["Powered_up", "Big", "Small", "Dead",]

class Player{
    constructor(selfname, totalCoins, status, hasStar){
        this.selfname = selfname
        this.totalCoins= totalCoins
        this.status = status
        this.hasStar = hasStar
    }
     setName(namePicked) {
        this.selfname= namePicked
        
    }
    gotHit (){
        console.log (" you got hit by an enemy")
        if (this.hasStar === true) {
            console.log ("your star protected you")
            this.hasStar = false
        } else if (this.hasStar === false & this.status === statuses[0]){
            this.status = statuses[1]
        }else if (this.hasStar === false & this.status === statuses[1]){
            this.status = statuses[2]
        } else if (this.hasStar === false & this.status === statuses[2]){
            this.status =statuses[3]
            console.log("you are dead")
            clearInterval(intervalId)
        }
        
    }
    gotPoweredUp (){
        console.log("you got powered up")
        if (this.status === statuses[0]){
            console.log ("hurray! you got star")
            this.hasStar = true 
        } else if (this.status === statuses[1]){
            this.status = statuses[0] 
        } else if ( this.status === statuses[2]){
            this.status = statuses[1]
        }
    }
    addCoin (){
        console.log ("you got a coin")
        this.totalCoins += 1
    }
    print (){
        console.log (`name: ${this.selfname}
        total coins : ${this.totalCoins}
        status: ${this.status}`)
    }
}


let newPlayer = new Player("name", 0, statuses[1], true)
newPlayer.setName("Mario")
const randomRange = () => {
 let num = Math.floor(Math.random()*3)
 if (num === 0){
    newPlayer.gotHit()
 }else if (num === 1){
    newPlayer.gotPoweredUp()
 }else if (num === 2){
    newPlayer.addCoin()
 }
 newPlayer.print()
}

 const intervalId = setInterval(randomRange,1000)



// console.log(newPlayer.selfname)









// player.prototype.set_name= function(value){
//     name = value
// }
// player.prototype.get_name = function{
//     return name
// }


// thisPlayer = Player()
// thisPlayer.set_name("")
// print(thisPlayer.get_name())