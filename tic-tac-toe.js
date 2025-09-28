let Boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame =document.querySelector(".newgame");
let msg = document.querySelector(".msg");
let win = document.querySelector(".win");

let turnx = true;
let noOfTurns = 1;
const winingPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

Boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnx){
        box.innerText = "X";
        turnx=false;
        box.style.color ="#D4E09B";
    }
    else{
        box.innerText = "O";
        turnx=true;
        box.style.color ="#A44A3F";
    }
    noOfTurns++;
    box.disabled=true;
    winner();
    });
});
const winner =()=>{
    for(let pattern of winingPatterns){
        let val1 = Boxes[pattern[0]].innerText;
        let val2 = Boxes[pattern[1]].innerText;
        let val3 = Boxes[pattern[2]].innerText;

        if( val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                winCase(val1);
            }
        }
        if(noOfTurns>9){
            drawCase();
        }
    }
}
const drawCase = ()=>{
    msg.innerText = "The match is DRAW.";
    win.classList.remove("hide");
}
const winCase =(val)=>{
    win.classList.remove("hide");
    msg.innerText = `Congragulations, Winner is ${val}`;
    disabelBoxes();
}
const disabelBoxes =()=>{
    for(let box of Boxes){
        box.disabled = true;
    }
}
const enableBoxes =()=>{
    for(let box of Boxes){
        box.disabled = false;
        box.innerText = "";
        win.classList.add("hide");
    }
    turnx = true;
    noOfTurns = 1;
}
reset.addEventListener("click",enableBoxes);
newgame.addEventListener("click",enableBoxes);