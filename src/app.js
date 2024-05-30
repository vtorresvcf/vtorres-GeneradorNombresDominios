/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const generateNameDomain = () => {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let ext = [".com", ".es", ".net", ".io", ".us"];

    const numRandom = element => {
      let numRandom = Math.floor(Math.random() * element.length);
      return numRandom;
    };

    let arrGeneral = [];
    let arrFrase = [];

    arrGeneral.push(pronoun, adj, noun, ext);
    for (let item in arrGeneral) {
      arrFrase.push(arrGeneral[item][numRandom(arrGeneral[item])]);
    }
    return arrFrase;
  };

  // Inserta el texto al parrafo del index.HTML
  document.getElementById("insert-text").innerHTML = `
    <b>Frase Creada --></b> ${generateNameDomain().join("")}`;

  // Imprime por consola la frase
  console.log(generateNameDomain().join(""));
};
