const readline = require("readline-sync")

const name = readline.question('what is your name?');

const enemies = ['dragon', 'beast', 'zombies' ]
const treasure = ['coins']
var prize = [];
let userHp= 30;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = treasure [Math.floor(Math.random()*treasure.length)];

const begin = readline.keyInPause('Hello ' + name + ' welcome to RPG game ...');
game()


function game(){

    const attackPower=Math.floor(Math.random()* (8-1) + 1);
    const enemy = enemies[Math.floor(Math.random()* enemies.length)];
    let enemyHp = 30;
    const enemyPower = Math.floor(Math.random()* (8-3) + 3);

    
    while (userHp > 0){

        const index = readline.keyInSelect(options, 'what would like to do?');
        if(options[index] === 'Exit') {
        return userHp = 0;

    } else if (options[index] === 'Print'){

        console.log(name + ':\n' +userHp + '\nTreasure: ' + pickUp);
    
    } else if (options[index] === 'Walk'){
        walk()
    } 

    function walk(){
            let key = Math.random();
            if (key <= .3) {
                console.log('walking.... path is clear.');
            } else if (key >= .3) {
                console.log(enemy + ' has arrived.');
                fight()
            }
        }

    function fight(){
            while(enemyHp> 0 && userHp > 0) {
                // console.log('in while loop')
                  const user = readline.question('what would you like to do? enter "r" to run. Enter "a" to attack.');
  
                  switch (user) {
                      case 'r':
                          const walk = Math.random();
                          if(walk < .5) {
                              console.log('you have been attacked by ' + enemy + ' with: ' + enemyPower);
                          } else {
                              console.log('You are safe now.');
                              return;
                          }
                      case 'a':
                          enemyHp -= attackPower;
                          console.log('you attacked ' + enemy + ' with ' + attackPower +' attack power.');
                          
                          userHp -= enemyPower;
                          console.log('Enemy just attacked you with ' + enemyPower + ' attack power.');
  
                          if (enemyHp <= 0) {
                              console.log('you killed ' + enemy + '.\n' + ' left ' + pickUp)
                              let loot = Math.random();
                              userHp += 5
                              console.log('user gains 5HP')
                              if (loot <= .3) {
                                  prize.push(pickUp);
                              }
                          }else if (userHp <= 0) {
                              console.log('you are dead ' + enemy + ' has defeated you');
                          }
                          
                  }
              }
        }
            
        
    }
    
    

}









// let name = 'name'
// let gameOver = false
// let hp= 100

// console.log("hello player, happy to see you")

// name = readline.question('What is your name?')

// if (name === 'apple') { 
//     console.log('name not allowed')
// } else { 
//     console.log('name allowed', name)
// }
// //readline.question('line of text')
// function walk (){
//     const willfight= prompt()
// }
// // While the game is running (gameOver = false), prompt the user to do action
// while (gameOver === false) {
//     const w = prompt walk (w)
//     walk = readline.question('w')
//     console.log = walk
    
//     // Prompt user to walk with 'w'
//         // define walk variable
//         // 
//         // check if walk = 'w'
//             // if walk = 'w' then do stuff
    
// }