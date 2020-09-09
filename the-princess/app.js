
let currentPlayer;


class Player {
    constructor(name, totalCoins, status, hasStar ){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = true;
    }

    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit() {
        if (this.status === "Small") {
            this.status = "Dead";
            console.log("You Died. Game Over!")
            this.gameActive = false;
            clearInterval(intervalId);
        } else if ( this.status === "Big" ) {
            this.status = "Small";
        } else if ( this.status === "Powered Up" ) {
            this.status = "Big";
        }
    }

    gotPowerup() {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            console.log(`Congrats! You just recieved a star!`)
            this.hasStar = true;
        }
    }

    

    addCoin() {
        this.totalCoins += 1;
    }



    print() {
        console.log( `   
         Name: ${this.name}
         totalCoins: ${this.totalCoins}
         Status: ${this.status}
         Star Properties: ${this.hasStar}
    `)
    } 
    
}




function randomRange() {
    let randoNum = Math.floor(Math.random() * 3);
    switch (randoNum) {
        case 0:
          currentPlayer.gotHit();
          currentPlayer.print();
          break;
        case 1:
            currentPlayer.gotPowerup();
            currentPlayer.print();
          break;
        case 2:
            currentPlayer.addCoin();
            currentPlayer.print();
          break;
    }  
    
 } 



const firstPlayer = new Player( "Mario", 0, "Small", false);
const secondPlayer = new Player( "Luigi", 0, "Small", false);

currentPlayer = firstPlayer;


const intervalId = setInterval( randomRange, 500);
