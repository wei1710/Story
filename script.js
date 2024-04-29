"use strict";
window.addEventListener("load", start);

function start() {
  console.log("JavaScript is running");
}

const scene = {
  title: "Historien begynder",
  text: /*html*/ `<p>Du er ude at gå en tur i junglen, og tager massevis 
                  af billeder af de mange farvestrålende dyr med din mobil.</p>
                  <p>Pludselig kommer du til en forgrening på stien, 
                  hvor den venstre del går opad og er lys og varm, mens de højre del går nedaf og virker mørk og sumpet.</p>
                  <p>Du kigger på din mobil, men der er ingen dækning, 
                  så du kan ikke se på kortet hvor du er, eller hvor stierne leder hen.</p>
                  <p>Du beslutter dig for at vælge en tilfældig af de to - hvilken tager du?</p>`,
    choices: [
      "Den opadgående, lyse varme sti",
      "Den nedafgående, mørke, sumpede sti"
    ]
}