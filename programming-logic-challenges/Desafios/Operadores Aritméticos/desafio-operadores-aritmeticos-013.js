/*

13 - Cor aleatória

Elabore uma função que retorne uma cor RGB aleatória no formato:
--------------
"rgb(r, g, b)"
--------------

 */

function generateColor(){
  // Desenvolva seu código nessa função
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`
}

module.exports = generateColor;
