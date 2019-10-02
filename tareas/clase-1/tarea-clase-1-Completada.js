// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDay();
const userBirth = prompt("Ingresa tu fecha de nacimiento", "DD/MM/AAAA");
let userBirthDay = userBirth.slice(0, 2);
let userBirthMonth = userBirth.slice(3, 5);
let userBirthYear = userBirth.slice(6);
let userAge = (currentYear - userBirthYear)


function calculateAge(){
    if(userBirthMonth > currentMonth){
        if(userBirthDay > currentDay){
            userAge = userAge - 1
            console.log(`Tenes ${userAge} años!`)
        }
        else{
            console.log(`Tenes ${userAge} años!`)
            }
        }
    else{
        console.log(`Tenes ${userAge} años!`)
    }
}

calculateAge()


// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.


const monthsInYear = 12;
const weeksInMonth = 4;

let monthlySalary = Number(prompt('Cual es tu sueldo?'));
let workWeek = Number(prompt('Cuantos dias trabajas por semana?'));
let workHours = Number(prompt('Y cuantas horas?'));
let workMonth = workWeek * weeksInMonth;

function hourlyCalc(monthlySalary){
    return  ((monthlySalary / workMonth) / workHours).toFixed(2);
}

function dailyCalc(monthlySalary){
    return (monthlySalary / workMonth).toFixed(2);
}

function weeklyCalc(monthlySalary){
    return (monthlySalary / workWeek);
}

function annualCalc(monthlySalary){
    return (monthlySalary * monthsInYear);
}

console.log(
    `Tu sueldo anual es de $${annualCalc(monthlySalary)}` +
    '\n' +
    `Tu sueldo mensual es de $${monthlySalary}` +
    '\n' +
    `Tu sueldo semanal es de $${weeklyCalc(monthlySalary)}` +
    '\n' +
    `Tu sueldo diario es de $${dailyCalc(monthlySalary)}` +
    '\n' +
    `Tu sueldo por hora es de $${hourlyCalc(monthlySalary)}`
);


/// SCOPE

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
//pruebaHoisting();
*/

/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
}

prueba(3);

console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
*/
