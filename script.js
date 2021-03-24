//Pulling from HTML
const startGameButton = document.querySelector(".button-start-game");
const fireblastButton = document.querySelector("#fireblast");
const whirlWindButton = document.querySelector("#whirl-wind");
const tsunamiButton = document.querySelector("#tsunami");
const villainHealthNumber = document.querySelector(".villain-health-strength")
const heroHealthNumber = document.querySelector(".hero-health-strength");
const fireball = document.querySelector(".fireball");
const whirlWindGif = document.querySelector(".wind-gif");
const waterGif = document.querySelector(".water-gif");
const modalStartGame = document.querySelector(".start-game-modal");
const modalStartGameButton = document.querySelector(".start-game-modal button");


// Building Classes
class Villain {
    constructor(name, h, i) {
        this.name = name;
        this.health = villainHealth[h];
        this.attack = villainAttacks[i]; 
    }
    attack1 (hero) {
       return hero.health -= this.attack;
    }
}

class Hero {
    constructor (name, i) {
        this.name = name;
        this.health = 50;
        this.attack = heroAttacks[i]; 
    }
}

// Villian Character Attacks
const villainAttacks = [];


const level_1_boss_attack = () => {
    const attack = [3.5];
    let randomAttackStrength = attack[Math.floor(Math.random())]
    return randomAttackStrength;
};
villainAttacks.push(level_1_boss_attack);

const level_2_boss_attack = () => {
    const attack = [3, 3.5, 4];
    let randomAttackStrength = attack[Math.floor(Math.random()* 3)];
    return randomAttackStrength;
};
villainAttacks.push(level_2_boss_attack);

const level_3_boss_attack = () => {
    const attack = [4,5,6];
    let randomAttackStrength = attack[Math.floor(Math.random()* 3)]
    return randomAttackStrength;
};
villainAttacks.push(level_3_boss_attack);


// Villian Health Levels
const villainHealth = [40,50,60];

//Creating new Villains
const easterBunny = new Villain("Easter Bunny", 0, 0);
const leprechaun = new Villain("Mr. Leprechaun", 1, 1);
const santa = new Villain("Santa", 2, 2);

const villainsArr = [easterBunny, leprechaun, santa];

console.log(easterBunny);
console.log(leprechaun);
console.log(santa);

// Hero Character Attacks
const heroAttacks = [];

const hero_option_1_attack = () => {
    const attack = [3];
    let randomAttackStrength = attack[Math.floor(Math.random())]
    return randomAttackStrength;
};
heroAttacks.push(hero_option_1_attack);

const hero_option_2_attack = () => {
    const attack = [5];
    let randomAttackStrength = attack[Math.floor(Math.random())];
    let accuracy = Math.random();
        if(accuracy < .7) {
            return randomAttackStrength
        } else {
            alert("you missed!")
            return 0;
        }
};
heroAttacks.push(hero_option_2_attack);

const hero_option_3_attack = () => {
    const attack = [0,1,2,3,4,5,6,7];
    let randomAttackStrength = attack[Math.floor(Math.random()* 8)];
    return randomAttackStrength;
};
heroAttacks.push(hero_option_3_attack);


//Creating Heros
const hero1 = new Hero("Drew");



//GAME PLAY LOGIC

//ROUND 1

//Click "Start Game" button and stuff like Easter Bunny, Your Charcter, health bars and attack buttons all go from hidden to beinng shown. Just the background and top bars will be visable from the beginning. maybe a model too that explains the game slightly. Pressing the start button will get rid of the model and bring everything else onto screen. 

// const gameActive = true;


//MODAL FUNCTIONS
const startGameModal = () => {
    modalStartGame.classList.add("open");
};
const closeStartGameModel = () => {
    modalStartGame.classList.remove("open");
};

window.onload = () => {
    startGameModal();
  };


// GAME FUNCTIONS
const startGame = () => {
    villainHealthNumber.innerHTML = villainsArr[0].health;
heroHealthNumber.innerHTML = hero1.health;
}

const fireBlast = () => {
    fireball.style.display = "block";
    if (villainsArr[0].health > 0){
        villainHealthNumber.innerHTML = villainsArr[0].health -= heroAttacks[0]();
          if (hero1.health > 3) {
              heroHealthNumber.innerHTML = hero1.health -= villainsArr[0].attack();
          }
    }else{
        alert("You killed the " + villainsArr[0].name + "! Looks like that fireball blazed through them!")
        return villainHealthNumber.innerHTML = 0;
    }
};

const whirlWind = () => {
    whirlWindGif.style.display = "block";
    if (villainsArr[0].health > 0){
        villainHealthNumber.innerHTML = villainsArr[0].health -= heroAttacks[1]();
            if (hero1.health > 3) {
              heroHealthNumber.innerHTML = hero1.health -= villainsArr[0].attack();
          }
    }else{
        alert("You killed the " + villainsArr[0].name + "! You blew away the cometition!")
        return villainHealthNumber.innerHTML = 0;
    }
};

const tsunami = () => {
    waterGif.style.display = "block";
    if (villainsArr[0].health > 0){
        villainHealthNumber.innerHTML = villainsArr[0].health -= heroAttacks[2]();
            if (hero1.health > 3) {
              heroHealthNumber.innerHTML = hero1.health -= villainsArr[0].attack();
          }
    }else{
        alert("You killed the " + villainsArr[0].name + "! You washed away the competition!")
        return villainHealthNumber.innerHTML = 0;
    }
};



// EVENT LISTENERS
startGameButton.addEventListener("click", startGame);
fireblastButton.addEventListener("click",fireBlast);
whirlWindButton.addEventListener("click", whirlWind);
tsunamiButton.addEventListener("click", tsunami);
modalStartGameButton.addEventListener("click", closeStartGameModel);