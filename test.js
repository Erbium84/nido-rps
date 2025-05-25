
let rock=document.querySelector('.rock');
let scissor=document.querySelector('.scissor');
let paper=document.querySelector('.paper');
let computer_played=document.querySelector('.computer-played');
let human_played=document.querySelector('.human-played');

let x=document.querySelector('.human-score');
let y=document.querySelector('.computer-score');

x.textContent=0;
y.textContent=0;

function computer(){
    let n=Math.random();
    n*=3;

    let s;
    if(n<1){
        s="rock";
    }
    else if(n<2){
        s="paper";
    }
    else{
        s="scissor";
    }

    return s;
}

function rps(human_input){
    let comp_input=computer();

    //showing most recent plays (rock, paper, scissor) on the div
    computer_played.textContent=comp_input;
    human_played.textContent=human_input;



    if(human_input=="rock"){
        
        if(comp_input=="paper"){
            let yy=parseInt(y.textContent);
            yy++;
            y.textContent=yy;
        }
        else if(comp_input=="scissor"){
            let xx=parseInt(x.textContent);
            xx++;
            x.textContent=xx;
        }
        
    }
    else if(human_input=="paper"){
        if(comp_input=="rock"){
            let xx=parseInt(x.textContent);
            xx++;
            x.textContent=xx;
        }
        else if(comp_input=="scissor"){
            let yy=parseInt(y.textContent);
            yy++;
            y.textContent=yy;
        }
    }
    else if(human_input=="scissor"){
        if(comp_input=="rock"){
            let yy=parseInt(y.textContent);
            yy++;
            y.textContent=yy;
        }
        else if(comp_input=="paper"){
            let xx=parseInt(x.textContent);
            xx++;
            x.textContent=xx;
        }
    }

}

rock.addEventListener('click',() => {
    rps("rock");
});

paper.addEventListener('click',() => {
    rps("paper");
});
scissor.addEventListener('click',() => {
    rps("scissor");
});
