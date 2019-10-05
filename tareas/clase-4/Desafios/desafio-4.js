/*
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81

*/


for (let x=1;x<=9;x++){
  for (let y=0;y<=9;y++)
  console.log(x+'*'+y +'=' + x*y)
}