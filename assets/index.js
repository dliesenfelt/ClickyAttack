//Player Character
class Player {
    constructor(lvl, exp) {
        this.lvl = lvl;
        this.exp = exp;
    }
}

let user = new Player(10, 0);


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

//Settings
// -User Damage Function
function attackPower() {
    return Math.round((user.lvl * (Math.random() * 10)));
 }
 
 // -Final Damage Function
 function finalDamage() {
     return Math.round((attackPower() / goblin.def));
 }

 // Enemy Health
document.getElementById('enemyHp').innerHTML = goblin.hp

// -Attack Function
document.getElementById("attackButton").addEventListener("click",
function battleCalc() {
    goblin.hp = goblin.hp -= finalDamage();
    document.getElementById('enemyHp').innerHTML = goblin.hp;
    console.log('enemy health:' + goblin.hp);
    if (goblin.hp <= 0) {
        expGain();
    }
}
)

// -Exp Gain Function
function expGain() {
    document.getElementById("playerExp").innerHTML = user.exp;
    user.exp += goblin.exp;
}



