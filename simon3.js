// Simson Game online version..
// Developed by Umar Gujjar..
// umar4128015@gmail.com
// 03182465854
// 21-August-2024  


// Declaration of all the variables..
let heading = document.querySelector('#instruc');
let control = true;
let first = document.querySelector('#o1');
let second = document.querySelector('#o2');
let third = document.querySelector('#o3');
let fourth = document.querySelector('#o4');
let all = document.querySelectorAll('.clrs');
let backG = document.querySelector('.all');
let randArray = [];
let userArray = [];
let body = document.querySelector('body');
let level = 1;
let levelNo = document.querySelector("#levelNo");
let startBtn = document.querySelector('.btnStart');
let GameOverText = document.querySelector('.gameOver');



//Button to start when press..
startBtn.addEventListener('click',function(){
    if (control){
        //Now Game cannot restart..
        control = false;

        // Function run for restarting the Game..
        overEnd();

        // Call splash function when enter press..
        setTimeout(splash,1000);

    }
})

// Function start when enter key press
document.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        if (control){
            //Now Game cannot restart..
            control = false;

            // Function run for restarting the Game..
            overEnd();

            // Call splash function when enter press..
            setTimeout(splash,1000);

        }
    }
});



function splash() {

    // Generation of Random Number..
    let randNumb = Math.ceil(Math.random() * 4);

    // Random Number push in the array..
    randArray.push(randNumb);
  
    switch (randNumb) {
      case 1:
        btnSplash(first);
        break;
        
        case 2:
        btnSplash(second);  
        break;
        
        case 3:
        btnSplash(third);
        break;
        
        case 4:
        btnSplash(fourth);
        break;
    }


  
    
  
};

// Fucntion to splash that button which passed as an argument..
function btnSplash(btn) {
    btn.classList.add('splash');

    // Use set time out function to clearly show flash of colors..
    setTimeout(() => {
    btn.classList.remove('splash');
    }, 500);
}


// Function for leveling up when User passed a level..
function levelUp() {
    userArray = [];
    level++;
    levelNo.innerText = `Level ${level}`;
    console.log(level);

    // Use set time out because half second taken in previous flash and half second for a pause..
    setTimeout(splash,1000);

    // Print Random Array for Myself Bcz I always wanna be the winner of my game..
    setTimeout(()=>{
        console.log(randArray)
    },1000);
  

};

// Function to check that button clicked by user is right or wrong..
function btnCheck(ind){
    if(userArray[ind]==randArray[ind]){
        if(userArray.length === randArray.length){
            //When one level complete successfully..
            levelUp();
        }
    }
    else{

        // When Game is over..
        backG.classList.add('gameEnd');
        setTimeout(()=>{
            backG.classList.add('redClr');
            GameOverText.classList.remove('overDisplay');
            startBtn.textContent = "Restart";

         },1000);
        console.log("Game Over");
        heading.innerText = "Game Over !! Press Enter to Restart";
        levelNo.innerHTML =`Your Score is <b>${level}</b>` ;
        levelNo.classList.add('whiteClr');
        restart();
    }
}

// Function trigger when user press a button..
function btnPress(){

    // Press button can identify by this..
    let btn = this;
    btnSplash(btn);
    
    if(btn==first)
            userArray.push(1);
    else if(btn ==second)    
            userArray.push(2);
    else if(btn == third)
            userArray.push(3);      
    else if(btn == fourth)  
            userArray.push(4);
    else 
    console.log("can't match");


    btnCheck(userArray.length-1);
}


// When any button from HTML list all click..
for(btn of all){
    btn.addEventListener('click',btnPress);
}

// Function to restart the Game..
function restart(){
    control = true;
    level =1;
    userArray =[];
    randArray = [];
}

// Function to end all the changes which take place due to ending the game..
function overEnd(){
    backG.classList.remove('gameEnd');
    backG.classList.remove('redClr');
    GameOverText.classList.add('overDisplay');
    heading.innerText = "Be Focus ! You are in the Game";
    levelNo.innerText = `Level ${level}`;
    levelNo.classList.remove('whiteClr');
    startBtn.textContent = "Started";
}














































































