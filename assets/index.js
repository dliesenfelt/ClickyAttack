//Player Character
class Player {
    constructor(lvl) {
        this.lvl = lvl;
    }
}

let user = new Player(5);


//Enemies
class Enemy {
    constructor(lvl, hp, def, exp) {
        this.lvl = lvl;
        this.hp = hp;
        this.def = def;
        this.exp = exp;
    }
}

let rat = new Enemy(1,50, 1, 10);
let wolf = new Enemy(7, 150, 10, 50);
let goblin = new Enemy(5, 100, 5, 25);
let skeleton = new Enemy(10, 200, 3, 70);
let dragon = new Enemy(75, 50000, 100, 1000); 

//Calculations

// -User Damage function
function attackPower() {
   return Math.round((user.lvl * (Math.random(5) * 10)));
}

// -Final Damage Function
function finalDamage() {
    return Math.round((attackPower() / goblin.def));
}

// -Attack Function
document.getElementById("attackButton").addEventListener("click",
function battleCalc() {
    console.log('Damage: ' + finalDamage());
    console.log('Attack: ' + attackPower());
    console.log('Defended: ' + (attackPower() - finalDamage()));
    console.log('Enemy Health: ' + (goblin.hp -= finalDamage()));
    if (goblin.hp <= 0) {
        return console.log('exp gained ' + goblin.exp)
    }
}
)

//Console Table
console.log()