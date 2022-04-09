const prompt = require('prompt-sync')();
const userName = prompt('Hello player, what is your name? ');
console.log("hello " + userName);


const user = {
  name: "USS Schwarzenegger",
  hull: 20,// is the same as hitpoints
  firepower: 5,
  accuracy: Math.random(),
  attack:function(enemy){
    if (enemy.hull > 0 && user.hull > 0){
      enemy.hull =  enemy.hull - user.firepower
      console.log(`Very effective attack! ${user.name} has delt  ${user.firepower} to ${enemy.name}`)
      if(enemy.hull > 0 ){
        return console.log(`The ${enemy.name} has ${enemy.hull} hitpoints left`)
      }else {
        return console.log(`The ${enemy.name} is dead!`)
      }
    }
  }
}


const alienShip = []
const numOfAliens = 6;

function alineMaker (num ){
  for (let i = 0; i < numOfAliens; i++){
    alienShip.push({
        name: `Alien Ship ${i + 1}`,
        hull: anyRandomStats(3,6),// is the same as hitpoints
        firepower: anyRandomStats(2,6),
        accuracy: Math.abs(Math.random()) * 1,
    })
  }
  return "6 Alien Ships"
}
alineMaker(alienShip)


function attackAlien (ship){
    if (user.hull > 0 && ship.hull > 0 &&( ship.accuracy <= Math.random())){
        user.hull =  user.hull - ship.firepower;
        if(user.hull > 0 ){
            console.log(`Very effective attack! ${ship.name} has delt  ${ship.firepower} to ${user.name}. The ${user.name} has ${user.hull} hitpoints left`)
        }else if (user.hull <= 0){
          console.log("YOU DIED")
          user.hull = 0;
          console.log(`Loser ${userName}`)
          stopGame()
        }
    }else if (user.hull > 0 && ship.hull > 0){
        console.log(`The ${ship.name} missed the attack!!!`)
      }
}    


function anyRandomStats(min, max) {
    return Math.floor((Math.random() * (max - min) + min));
};




function stopGame (){
  const stopMessage = "Game OVER " + userName;
  if(user.hull > 0){
    console.log(`You have killed all the  ${numOfAliens} AlienShips!`)
      console.log("Congratulations You Win!!!");
      return stopMessage
  }else{
      console.log("Better luck Next Time!");
      console.log(`Aliens won This Time!`)
      return stopMessage
  }
};


function gameBattle (){
  for (let i = 0; i < alienShip.length; i++){
  console.log(`Your current Health is ${user.hull}`)
    const wantToAttack = prompt('Do You Want To Attack? \n [Y]es [N]o \n');
    if (wantToAttack === "Y" && user.hull > 1){
      console.log('The Alines Attack Frist!')
      attackAlien(alienShip[i])
      user.attack(alienShip[i]);
      if (alienShip[i].hull > 0 && user.hull > 0){
        const wantToAttackAgain = prompt('Do You Want To Attack?\n [Y]es [N]o \n');
        if (wantToAttackAgain === "Y" && user.hull > 0){
          console.log('The Alines Attack Frist!')
          attackAlien(alienShip[i]);
          user.attack(alienShip[i]);
        }else if (user.hull <= 0){
          console.log("Better luck Next Time!");
          return stopGame()
        }
      }else if (wantToAttack === "N" || user.hull <= 0){
          return stopGame();
      }
    }else if(user.hull <= 0){
        user.hull = 0;
        console.log(`the ${alienShip[i]} killed You`)
        return stopGame()
    }
    
  }
  return stopGame ()
};
gameBattle();