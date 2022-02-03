//Characters
// [ User ]
// - Level Up 
let userLvl = 1;
let userExp = 0;
for (userExp; userExp >= (((300 * userLvl) * userLvl) * (1/2)); userLvl++) {
    userLvl;
}

// [ Enemies]
// - Enemy Class
class Enemy {
    constructor(name, lvl, hp, def, exp, sprite) {
        this.name = name;
        this.lvl = lvl;
        this.hp = hp;
        this.def = def;
        this.exp = exp;
        this.sprite = sprite;
    }
}
// - Enemy Pool
let rat = new Enemy('Rat', 1, 50, 1, 10, "./assets/images/rat.png",);
let goblin = new Enemy('Goblin', 3, 100, 5, 25, './assets/images/goblin.png');
let wolf = new Enemy('Wolf', 5, 150, 7, 50, './assets/images/wolf.png');
let enemyPool = [rat, goblin, wolf,];

// - Spawn Enemy Function
function spawnEnemy() {
    document.getElementById('enemyName').innerHTML = rat.name;
    document.getElementById('npcLvl').innerHTML = ('LVL: ' + rat.lvl);
    document.getElementById('enemyHp').innerHTML = ('HP: ' + rat.hp);
    return document.getElementById("npcSpawnArea").src = rat.sprite;
}
spawnEnemy()

//Combat
// - Attack Power Function
function attackPower() {
    return Math.round((userLvl * (Math.random() * 10)));
 }
// - Damage Function
function finalDamage() {
    return Math.round((attackPower() / this.def));
}
// - Expirenece Reward Function
function expGain() {
    return userExp += this.exp;
}
// -Attack Button
document.getElementById("attackButton").addEventListener("click", function battleCalc() {
    this.hp = this.hp -= finalDamage();
    console.log('enemy health:' + this.hp);
        if (this.hp <= 0) {
            return expGain();
        }
    }
)

// User Interface
// [ User Settings ]
// -User Name Info
document.getElementById('userName').innerHTML = 'Name';
// -User Level Info
document.getElementById('playerLvl').innerHTML = ('Lvl: ' + userLvl);
// -User Experience Info
document.getElementById('userExp').innerHTML = ('EXP: ' + userExp);





