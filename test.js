function human(){
    let s=(prompt("rock, paper, scissor, or stop?"));
    return s;
}


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

let humanscore=0, computerscore=0;


function rps(){
    let p=human();
    let q=computer();

    if(p=="stop"){
        console.log("human: "+humanscore+" computer: "+computerscore);
        return;
    }

    if(p=="rock"){
        if(q=="rock"){
            console.log("human: "+humanscore+" computer: "+computerscore);
        }
        else if(q=="paper"){
            computerscore++;
            console.log("human: "+humanscore+" computer: "+computerscore);
        }
        else if(q=="scissor"){
            humanscore++;
            console.log("human: "+humanscore+" computer: "+computerscore);
        }
    }
    else if(p=="paper"){
        if(q=="rock"){
            humanscore++;
            console.log("human: "+humanscore+" computer: "+computerscore);
        }
        else if(q=="paper"){
            console.log("human: "+humanscore+" computer: "+computerscore);
        }
        else if(q=="scissor"){
            computerscore++;
            console.log("human: "+humanscore+" computer: "+computerscore);
        }
    }
    else if(p=="scissor"){
        if(q=="rock"){
            computerscore++;
            console.log("human: "+humanscore+" computer: "+computerscore);
        }
        else if(q=="paper"){
            humanscore++;
            console.log("human: "+humanscore+" computer: "+computerscore);
        }
        else if(q=="scissor"){
            console.log("human: "+humanscore+" computer: "+computerscore);
        }
    }
    rps();
}

rps();