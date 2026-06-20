let cells=document.querySelectorAll(".cell");


let board=[

"","","",
"","","",
"","",""

];


let game=true;


let xs=0;

let os=0;

let draws=0;



cells.forEach((cell,index)=>{


cell.onclick=function(){


if(!game)
return;


if(board[index]!="")
return;



board[index]="X";


cell.innerHTML="X";


cell.classList.add("x");


turn.innerHTML="SYSTEM";

status.innerHTML="System Playing";



if(check())
return;


setTimeout(systemMove,500);



}


});







function systemMove(){


let empty=[];


board.forEach((v,i)=>{


if(v=="")
empty.push(i);


});


if(empty.length==0)
return;


let move=

empty[Math.floor(Math.random()*empty.length)];



board[move]="O";


cells[move].innerHTML="O";


cells[move].classList.add("o");


turn.innerHTML="YOU";


status.innerHTML="Playing";


check();


}






function check(){


let win=[


[0,1,2],
[3,4,5],
[6,7,8],


[0,3,6],
[1,4,7],
[2,5,8],


[0,4,8],
[2,4,6]

];



for(let w of win){


let a=w[0];

let b=w[1];

let c=w[2];



if(board[a] && board[a]==board[b] && board[a]==board[c]){


w.forEach(i=>cells[i].classList.add("win"));



if(board[a]=="X"){


xs++;

xScore.innerHTML=xs;


message.innerHTML="🎉 YOU WIN";


}

else{


os++;

oScore.innerHTML=os;


message.innerHTML="🤖 SYSTEM WIN";


}


game=false;


status.innerHTML="Game Over";


return true;


}



}




if(!board.includes("")){


draws++;

draw.innerHTML=draws;


message.innerHTML="DRAW";


status.innerHTML="Draw";


game=false;


}


}






function restart(){


board=[

"","","",
"","","",
"","",""

];


cells.forEach(c=>{


c.innerHTML="";


c.className="cell";


});


game=true;


message.innerHTML="Your Turn";


turn.innerHTML="YOU";


status.innerHTML="Playing";


}