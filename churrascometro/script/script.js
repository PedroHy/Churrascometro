//inputs:
let input_adults = document.getElementById("adults");
let input_children = document.getElementById("childrens");
let input_time = document.getElementById("time");



let btn_calcular = document.getElementById("btn")

//outputs:

let output_meet = document.getElementById("meet");
let output_beer = document.getElementById("beer");
let output_soda = document.getElementById("soda");

//methods:

btn_calcular.addEventListener("click", () =>{
    
    let adults = parseInt(input_adults.value);
    let childrens = parseInt(input_children.value);
    let time = parseInt(input_time.value);

    let qtdMeet = adults * calcQtdMeetPP(time) + 
    (calcQtdMeetPP(time)/2) * childrens;

    let qtdBeer = adults * calcQtdBeerPP(time);

    let qtdSoda = adults * calcQtdSodaPP(time) + 
    (calcQtdSodaPP(time)/2) * childrens;

    output_meet.innerHTML = qtdMeet/1000 + " Kg de carne";
    output_beer.innerHTML = Math.floor(qtdBeer/350) + " Latas de cerveja";
    output_soda.innerHTML = qtdSoda/2000 + " Garrafas de refrigerante"
   
});


function calcQtdMeetPP(time){
    if(this.time >= 6){
        return 650;
    }else{
        return 400;
    }
}

function calcQtdBeerPP(time){
    if(this.time >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function calcQtdSodaPP(time){
    if(this.time >= 6){
        return 1500;
    }else{
        return 1000;
    }
}



