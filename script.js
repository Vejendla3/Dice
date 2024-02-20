'use strict';
const roll= document.querySelector('.btn--roll');
const btnnew = document.querySelector('.btn--new');
const hold= document.querySelector('.btn--hold');
const dice= document.querySelector('.dice');
const player0= document.querySelector('.player--0');
const player1= document.querySelector('.player--1');
const score0= document.querySelector('#score--0');
const score1= document.querySelector('#score--1');
const cs0= document.querySelector('#current--0');

score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden');
let currentscore=0;
let activeplayer=0;
let scores=[0,0];
let playing=true;



//new game reset function
let x= function(){
    score0.textContent=0;
    score1.textContent=0;
    dice.classList.add('hidden');
    scores=[0,0];
    currentscore=0;
    activeplayer=0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    playing=true;
}
//switching player

let switching=function(){
    currentscore=0;
    document.querySelector(`#current--${activeplayer}`).textContent=0;
    activeplayer=activeplayer===0?1:0;
    document.querySelector(`#current--${activeplayer}`).textContent=0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

//dice rolling function

let y=function(){
        if(playing){
    const newNum= Math.trunc(Math.random()*6)+1;
    console.log(newNum);
    dice.classList.remove('hidden');
    dice.src=`dice-${newNum}.png`;
    if(newNum===1)
    {
        switching();

    }
    else{
        currentscore=currentscore+newNum;
        console.log(currentscore);
        document.querySelector(`#current--${activeplayer}`).textContent=currentscore;
       
    }
}
}

//hold button
let z=function(){
    scores[activeplayer]=currentscore+scores[activeplayer];
    document.querySelector(`#score--${activeplayer}`).textContent=scores[activeplayer];
   if( scores[activeplayer]>=100){
    playing=false;
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
   }
   
    switching();
   
}

btnnew.addEventListener('click',x);
roll.addEventListener('click',y);
hold.addEventListener('click',z);









