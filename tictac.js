let winningpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let btns = document.querySelectorAll(".btn")
let chance = "x";
let click=0;
let scro=0;
let scrx=0;
let audio_click=document.querySelector(".clicksound");
let audio_win=document.querySelector(".winsound");

function disabled() {
    btns.forEach(element => {
        element.disabled=true;
    });
}



function win(){
   for (let pattern of winningpattern) {

        let p1 = btns[pattern[0]].innerText;
        let p2 = btns[pattern[1]].innerText;
        let p3 = btns[pattern[2]].innerText;

        if (p1 != "" && p2 != "" && p3 != "") {

            if (p1 === p2 && p2 === p3) {
                audio_win.play();

                document.querySelector(".winner").innerText = `Winner is ${p1}`;
                if(p1==="X"){

                    scrx++;
                    document.querySelector(".scorex").innerText =`SCORE OF X : ${scrx}`;
                }
                else{
                    scro++;
                    document.querySelector(".scoreo").innerText = `SCORE OF O : ${scro}`;
                }

                disabled();
            }
            else if(p1 !== p2 && p2 !== p3 && click===9){
                document.querySelector(".winner").innerText = `It's a draw`;
            }

        }

    }
    
}



btns.forEach(btn => {
    btn.addEventListener("click", () => {
        click++;
        if (chance === "x") {
            audio_click.play();
            btn.innerText = "X";
            chance = "o";
        }
        else {
            audio_click.play();
            btn.innerText = "O";
            chance = "x";
        }

        btn.disabled = true ;
        win();
    })
    
});


let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    chance="x";
    
    btns.forEach(element => {
         element.innerText="";
         element.disabled=false;
    });
    document.querySelector(".winner").innerText = ``;
    click = 0;
     

})

let neww = document.querySelector(".new");
neww.addEventListener("click", () => {
    chance="x";
    
    btns.forEach(element => {
         element.innerText="";
         element.disabled=false;
    });
    document.querySelector(".winner").innerText = ``;
    document.querySelector(".scoreo").innerText =`SCORE OF X :0`;
    document.querySelector(".scorex").innerText =`SCORE OF X :0`;
    click = 0;
    scro=0;
    scrx=0;

})

