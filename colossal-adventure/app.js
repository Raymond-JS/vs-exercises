const readlineSync = require("readline-sync");


// store user name
const userName = readlineSync.question(`What is your name brave warrior?  `);

// user object
const user = { 
    isAlive: true,
    playerHP: 10,
    items: [],
    kills: 0
}


// Array hold specialties items you can win
let specialItems = [ "Axe", " Sword", "Medieval Flail"];

// Enemies objects held in array
let enemies = [ 
    {
        name: "Ogre",
        hp: 10
    },
    {
        name: "Ghastly Ghoul",
        hp: 10
    },
    {
        name: "Cannibal",
        hp: 10
    }
];



// Start with funny message - To Win Game You Need 3  Kills.
console.log(`Welcome to the 🔪🩸The Hunt 🔪🩸 ${userName}!
Only the strong survive!
Will you become prey or predator?
`);

// Function that generates random number between 0 and 2
let random = () =>  Math.floor(Math.random() * 3);

// While loop to continue game if user is still alive
while(user.isAlive) {
    let questionAns = readlineSync.keyIn(`Press [h] to hunt, [p] to check inventory, or [q] to quit game.  `, {limit: 'hpq'});
    if (questionAns === "h") {
        hunt();
       
    } else if (questionAns === "p") {
        console.log( `${userName}:
         Inventory: ${user.items} 
         Current hit points: ${user.playerHP} 
         Kills:  ${user.kills}`)

    } else if (questionAns === "q") {
        user.isAlive = false;
        console.log(`Don't have the stomach for it 'eh? Maybe next time.`);
        
    }
}





// Function that randomly generates damage between max 4 and min 1 
function damageGenerator() {
    let damage = Math.floor(Math.random() * (5 - 1) + 1);
    return damage;
}



// Hunting ( aka walking)  function
function hunt() {
    if ( user.kills >= 3 ) {
        console.log(`Yippee Ki Yay!! You WIN!
        You are a 🔪🩸Slaying Superstar!
         ` )
        user.isAlive = false;
    } else { 
     let num = random();
     if ( num === 2 ) {
        enemyAppears();
     } else {
         console.log("Hunting..keep your eyes peeled for enemies!")
     }
    }
}


// function to handle enemies random appearance
function enemyAppears() {
    let currentAttacker = enemies[random()];
    console.log( `You have just been confronted by an evil ${currentAttacker.name}`) 
    let fightOrRun = readlineSync.keyIn(`Press [f] to fight or [r] to run! `, {limit: 'fr'});
    if ( fightOrRun === "f" ) {
        fight(currentAttacker);
    } else if ( fightOrRun === "r" ) {
        run(currentAttacker)
    }
    
}

// function to handle the fight sequence
function fight(attacker) { 
    let battleWinner;
    let currentAttacker = attacker;
    console.log("The battle with " + currentAttacker.name + " has begun!");
    console.log("Fight!!!!") 
    while ( currentAttacker.hp > 0 && user.playerHP > 0 )  {
        let enemyDamage = damageGenerator();
        console.log(`You strike and land ${enemyDamage} point of damage on  ${currentAttacker.name}
        ` );
        currentAttacker.hp = currentAttacker.hp - enemyDamage;
    if ( currentAttacker.hp > 0 ) {
                console.log(`${currentAttacker.name} is not giving up the fight! They attack!
                ` )
                let yourDamage =  damageGenerator();;
                console.log(`${currentAttacker.name} lands ${yourDamage} points worth of damage!
                `)
                user.playerHP = user.playerHP - yourDamage;
                console.log(`You now have ${user.playerHP} points remaining to continue the fight!
                `)
    }
    }  
    if ( currentAttacker.hp > 0 ) {
        battleWinner = currentAttacker.name;
        user.isAlive = false;
        console.log(`You came, you saw, you WERE DECAPITATED 🤮~GAME OVER~ 🤮
        `)
    } else if ( user.playerHP > 0 ) {
        battleWinner = userName;
        console.log(`Win: You beat ${currentAttacker.name}
        `)
        
         user.items.push( specialItems[random()] );
         user.playerHP += 4;
         user.kills += 1;
    }
    currentAttacker.hp = 10   
}


// Function to handle running
function run(attacker) {
     if ( Math.random() >= 0.5 ) {
        return console.log(` Your new nickname is Usain Bolt!
        You escaped.
        
        `)
      }  else {
          console.log(` Oh no, your two left feet have let you down and ${attacker.name} has caught you!
          
          `)
        fight(attacker);        
     }
}







