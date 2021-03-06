//Pulling from HTML
const startGameButton = document.querySelector(".button-start-game");
const fireblastButton = document.querySelector("#fireblast");
const whirlWindButton = document.querySelector("#whirl-wind");
const tsunamiButton = document.querySelector("#tsunami");
const villainAttackNumber = document.querySelector(".villain-health-strength")
const heroAttackNumber = document.querySelector(".hero-health-strength");
const fireball = document.querySelector(".fireball");
const whirlWindGif = document.querySelector(".wind-gif");
const waterGif = document.querySelector(".water-gif");
const modalStartGame = document.querySelector(".start-game-modal");
const modalStartGameButton = document.querySelector(".start-game-modal button");
const villainName = document.querySelector(".villain-name");
const yourName = document.querySelector(".your-name");
const insertPlayerName = document.querySelector(".player-name");
const gameZone = document.querySelector(".game-zone");
const healthDesplay = document.querySelector(".health-display");
const villainImage = document.querySelector(".villain-image");
const playerImage = document.querySelector(".your-fighter");
const villainHealthGroup = document.querySelector(".villain-health");
const heroHealthGroup = document.querySelector(".hero-health");
const buttonGroup = document.querySelector(".attack-button-container");
const letsBeginText = document.querySelector(".save-the-world");
const secondRoundModal =document.querySelector(".second-round-modal");
const secondRoundButton = document.querySelector(".second-round-modal button");
const secondRoundModalText = document.querySelector(".second-round-modal p");
const youLostModal = document.querySelector(".you-lost-modal");
const youLostModalButton = document.querySelector(".you-lost-modal button");
const youLostModalButtonQuit = document.querySelector(".quit");
const villainHealthBar = document.getElementById("villain-health");
const heroHealthBar = document.getElementById("hero-health");
const villainAttackGif = document.querySelector(".villain-attack-gif");
const infoModalImgage = document.querySelector(".info");
const infoModal = document.querySelector(".attack-stats-modal");
const wonGameModal = document.querySelector(".won-game-modal");
const buttonFireblast = document.querySelector("#fireblast");
const buttonWhirlWind = document.querySelector("#whirl-wind");
const buttonTsunami = document.querySelector("#tsunami");

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
        this.health = 40;
        this.attack = heroAttacks[i]; 
    }
}

// Villian Character Attacks
const villainAttacks = [];


const level_1_boss_attack = () => {
    const attack = [3];
    let randomAttackStrength = attack[Math.floor(Math.random())];
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
    const attack = [4,4.5,5];
    let randomAttackStrength = attack[Math.floor(Math.random()* 3)]
    return randomAttackStrength;
};
villainAttacks.push(level_3_boss_attack);

console.log(level_1_boss_attack);
console.log(level_2_boss_attack);
console.log(level_3_boss_attack);
// Villian Health Levels
const villainHealth = [40,40,40];

//Creating new Villains
const easterBunny = new Villain("Easter Bunny", 0, 0);
const leprechaun = new Villain("Mr. Leprechaun", 1, 1);
const santa = new Villain("Santa", 2, 2);

const villainsArr = [easterBunny, leprechaun, santa];

console.log(easterBunny);
console.log(leprechaun);
console.log(santa);

// villain Image Array, will shift() array when new round starts;
const villainGifs = ["https://media.giphy.com/media/TEd7HIkFK2cnWQxVTk/giphy.gif", "https://media.giphy.com/media/dCOtc4zJW2MOfiAp5Q/giphy.gif","https://media.giphy.com/media/9Z1GUKJ1Q5mlfIJb9Z/giphy.gif"]


// Background Images Array
const backgroundImages = ["png/Battleground3.png", "png/City1.png", "png/BG_03.png"];

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
        if(accuracy <= .75) {
            return randomAttackStrength
        } else {
            alert("you missed!")
            return 0;
        }
};
heroAttacks.push(hero_option_2_attack);

const hero_option_3_attack = () => {
    const attack = [1,2,3,4,5,6,7];
    let randomAttackStrength = attack[Math.floor(Math.random()* 7)];
    return randomAttackStrength;
};
heroAttacks.push(hero_option_3_attack);

//Creating Heros
const hero1 = new Hero("Drew");
const hero2 = new Hero("Cool Dan");
const hero3 = new Hero("Pickles");

const heroArray = [hero1, hero2, hero3];
//GAME PLAY LOGIC

//ROUND 1

//Click "Start Game" button and stuff like Easter Bunny, Your Charcter, health bars and attack buttons all go from hidden to beinng shown. Just the background and top bars will be visable from the beginning. maybe a model too that explains the game slightly. Pressing the start button will get rid of the model and bring everything else onto screen. 


//MODAL FUNCTIONS
const startGameModal = () => {
    modalStartGame.classList.add("open");
};
const closeStartGameModel = () => {
    modalStartGame.classList.remove("open");
    return yourName.value;
};
const startSecondRoundModal = () => {
    secondRoundModal.classList.add("open");
    secondRoundModalText.innerHTML = "You killed " + villainsArr[0].name + "! Now thats how you save the world!"
};
const closeSecondRoundModal = () => {
    secondRoundGame();
    secondRoundModal.classList.remove("open");
};

const startLevelOverModal = () => {
    youLostModal.classList.add("open");
};

const startLevelOverCloseModal = () => {
    youLostModal.classList.remove("open");
    villainsArr.unshift();
    heroArray.unshift();
    startGame();
    // for restarting the level over
};
const quitGameModal = () => {
    youLostModal.classList.remove("open");
    //to end the game and reset to home screen
};
//info modal
const openInfoModal = () => {
    infoModal.classList.toggle("open");
};

//Won Game Modal Reset
const openWonGameModal = () => {
    wonGameModal.classList.add("open");
};

window.onload = () => {
    startGameModal();
  };

// Multiple Rounds
  const secondRoundGame = () => {
    backgroundImages.shift();
    villainsArr.shift();
    villainGifs .shift();
    heroArray.shift();
    villainHealthBar.value = villainsArr[0].health;
    heroHealthBar.value = heroArray[0].health;
    gameZone.style.backgroundImage = `url('${backgroundImages[0]}')`;
    startGame();
};
// function switch to round 2
// background must be change. Shift()
// villain image, name, and health must be change. shift()
// Health must update to new round


// heroArray[0];
//Win Responses
// const winConditionFIre = () => {
//     startSecondRoundModal();
//     // return villainHealthNumber.innerHTML = 0;
// };

// const winConditionWind = () => {
//     startSecondRoundModal();
//     // return villainHealthNumber.innerHTML = 0;
// };

// const winConditionTsunami = () => {
//     startSecondRoundModal();
//     // return villainHealthNumber.innerHTML = 0;
// };

// GAME FUNCTIONS

const startGame = () => {
    villainAttackNumber.innerHTML = 0;
    heroAttackNumber.innerHTML = 0;
    villainName.innerHTML = villainsArr[0].name;
    villainImage.src = villainGifs[0];
    playerImage.style.display = "block";
    villainImage.style.display = "block";
    buttonFireblast.style.display = "flex";
    buttonWhirlWind.style.display = "flex";
    buttonTsunami.style.display = "flex";
    insertPlayerName.innerHTML = yourName.value;
    letsBeginText.style.display = "none";
    villainHealthBar.value = villainsArr[0].health;
    heroHealthBar.value = heroArray[0].health;
}

const fireBlast = () => {
    fireball.style.display = "block";
    if (villainsArr[0].health > 0){
        villainHealthBar.value = villainsArr[0].health -= heroAttacks[0]();
        heroAttackNumber.innerHTML = heroAttacks[0]();
        if (villainsArr[0].health <= 0 && villainsArr[0].name === "Santa"){
            openWonGameModal();
        }
        if (villainsArr[0].health <= 0) {
            startSecondRoundModal();
        }
          if (heroArray[0].health > 0) {
            setTimeout(()=> {
                villainAttackGif.style.display = "block";
                heroHealthBar.value = heroArray[0].health -= 
                        villainsArr[0].attack();
             }, 1200);
             setTimeout(()=> {
                villainAttackGif.style.display = "none";
             }, 2200);
              villainAttackNumber.innerHTML = villainsArr[0].attack();
          } else {
            startLevelOverModal();
          }
    }else{
        startSecondRoundModal();
    }
    setTimeout(()=> {
        fireball.style.display = "none";
     }, 1000);
};

const whirlWind = () => {
    whirlWindGif.style.display = "block";
    if (villainsArr[0].health > 0){
        villainHealthBar.value = villainsArr[0].health -= heroAttacks[1]();
        heroAttackNumber.innerHTML = heroAttacks[1]();
        if (villainsArr[0].health <= 0 && villainsArr[0].name === "Santa"){
            openWonGameModal();
        }
        if (villainsArr[0].health <= 0) {
            startSecondRoundModal();
        }
            if (heroArray[0].health > 0) {
                setTimeout(()=> {
                    villainAttackGif.style.display = "block";
                    heroHealthBar.value = heroArray[0].health -= 
                            villainsArr[0].attack();
                 }, 1200);
                villainAttackNumber.innerHTML = villainsArr[0].attack();
                setTimeout(()=> {
                    villainAttackGif.style.display = "none";
                 }, 2200);
            } else{
            startLevelOverModal();
          }
    }else{
        startSecondRoundModal();
    }
    setTimeout(()=> {
        whirlWindGif.style.display = "none";
     }, 1000);
};

const tsunami = () => {
    waterGif.style.display = "block";
    if (villainsArr[0].health > 0){
        let tsumaniDamage = heroAttacks[2]();
        villainHealthBar.value = villainsArr[0].health -= tsumaniDamage;
        heroAttackNumber.innerHTML = tsumaniDamage;
        console.log(heroAttacks[2]());
        console.log(heroAttacks[2]());
        if (villainsArr[0].health <= 0 && villainsArr[0].name === "Santa"){
            openWonGameModal();
        }
            if (villainsArr[0].health <= 0) {
            startSecondRoundModal();
            }
                if (heroArray[0].health > 0) {
                    setTimeout(()=> {
                        villainAttackGif.style.display = "block";
                         heroHealthBar.value = heroArray[0].health -= 
                            villainsArr[0].attack();
                    }, 1200);
                    villainAttackNumber.innerHTML = villainsArr[0].attack();
                    setTimeout(()=> {
                        villainAttackGif.style.display = "none";
                    }, 2200);
                 } else {
                   startLevelOverModal();
                }
    }else{
        startSecondRoundModal();
    }
    setTimeout(()=> {
        waterGif.style.display = "none";
     }, 1000);
};

// EVENT LISTENERS
startGameButton.addEventListener("click", startGame);
fireblastButton.addEventListener("click",fireBlast);
whirlWindButton.addEventListener("click", whirlWind);
tsunamiButton.addEventListener("click", tsunami);
modalStartGameButton.addEventListener("click", closeStartGameModel);
secondRoundButton.addEventListener("click", closeSecondRoundModal);
// secondRoundButton.addEventListener("click", need to make/ roundTwoStart)
youLostModalButton.addEventListener("click", startLevelOverCloseModal);
youLostModalButtonQuit.addEventListener("click", quitGameModal);
infoModalImgage.addEventListener("click", openInfoModal);

// STILL TO DO
//Create a modal for beating santa and winner the game
//create a modal with toggle saying your attack button strengths
//make each round replayable with the modal "continue?" button
//make they game resart from begging with "restart" button