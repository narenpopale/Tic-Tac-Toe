// 0 means player 1
// 1 means player 2
var player = -1;


// -1 means None
// 0 means player 1 wins
// 1 means player 2 wins
// 2 means Draw
var matchDecision = -1;
var arr = [2,3,4,5,6,7,8,9,10];
var nums = [2,3,4,5,6,7,8,9,10];
var turn = document.querySelector("#turn");


// Start Game Logic 
var btn = document.querySelector("button");
btn.addEventListener('click', ()=>{
    turn.textContent = "Player 1 Turn";
    player = 0;
    matchDecision = -1;
    btn.disabled = true;
    arr = nums;
    console.log(arr);
})


// Box Check Logic
var box = document.querySelectorAll(".box");


for (let index = 0; index < box.length; index++) {
    const element = box[index];
    element.addEventListener('click', ()=>{
        // console.log();
        
        if(btn.disabled == false) {
            window.alert("Please Start the Game!");
        }
        
        if(player == 0){
            element.innerHTML = "<h1 class='p1'>X</h1>"
            turn.textContent = "Player 2 Turn";
            player = 1;
            arr[index] = 0;
        }
        else if(player == 1){
            element.innerHTML = "<h1 class='p2'>O</h1>"
            turn.textContent = "Player 1 Turn";
            player = 0;            
            arr[index] = 1;
        }

        check();
        if(matchDecision != 1 || matchDecision != 0) isDraw();

        console.log(matchDecision);
    })
}


// Function for checking match draw
function isDraw() {
    let flag = true;
    
    arr.forEach((num)=>{
        if(num != 0 && num != 1) {
            flag = false;
        }
    }) 

    if(flag == true) {
        matchDecision = 2;
    }
}


// Function for checking who wins
function check() {
    // Horizontal Check
    if(arr[0] == arr[1] && arr[1] == arr[2]) {
        matchDecision = arr[0];
    }
    
    if(arr[3] == arr[4] && arr[4] == arr[5]) {
        matchDecision = arr[3];
    }

    if(arr[6] == arr[7] && arr[7] == arr[8]) {
        matchDecision = arr[6];
    }

    // Vertical Check
    if(arr[0] == arr[3] && arr[3] == arr[6]) {
        matchDecision = arr[0];
    }
    
    if(arr[1] == arr[4] && arr[4] == arr[7]) {
        matchDecision = arr[1];
    }

    if(arr[2] == arr[5] && arr[5] == arr[8]) {
        matchDecision = arr[2];
    }

    // Diagonal Check
    if(arr[0] == arr[4] && arr[4] == arr[8]) {
        matchDecision = arr[0];
    }
    
    if(arr[2] == arr[4] && arr[4] == arr[6]) {
        matchDecision = arr[2];
    }
}


// Displaying Match Decision Logic
setInterval(()=>{

    if(matchDecision != -1) {
        btn.disabled = false;
        removeContent();
    }

    if(matchDecision == 0) {
        turn.textContent = "!! Player 1 Wins !!";
    }
    
    if(matchDecision == 1) {
        turn.textContent = "!! Player 2 Wins !!";
    }
    
    if(matchDecision == 2) {
        turn.textContent = "!! Match Draw !!";
    }

    
}, 100);


// Clearing content in Box
function removeContent() {
    box.forEach((e)=>{
        e.textContent = "";
    })
}