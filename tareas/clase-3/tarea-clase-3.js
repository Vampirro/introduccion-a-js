// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


const miNombre = 'Vampirro'
const nombreAmigo = 'Lucas'
let preguntaUsuario = prompt('Ingresa tu nombre')
let usuarioMayus = preguntaUsuario.charAt(0).toUpperCase() + preguntaUsuario.slice(1)


if (usuarioMayus === miNombre) {
    console.log(`Hola, Tocayo! Yo tambien me llamo ${miNombre}`)
}
else if (usuarioMayus === nombreAmigo) {
    console.log(`Hola, ${nombreAmigo}, te llamas igual que mi amigo!`)
}
else if (preguntaUsuario.trim().length === 0){
    console.log('No ingresaste ningun nombre');
}
else (console.log(`Hola ${usuarioMayus}`))


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const miEdad = 29;
let edadUsuario = Number(prompt('Cual es tu edad?'));
function restaEdad(edad1,edad2){
    return edad1 - edad2
}
if (edadUsuario === miEdad) {
    console.log(`Tenes la misma edad que yo!`)
}
else if (edadUsuario < miEdad) {
    console.log(`Sos ${restaEdad(miEdad,edadUsuario)} años mas chico que yo!`)
}
else (console.log(`Sos ${restaEdad(edadUsuario,miEdad)} años mas grande que yo!`))


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


function controlDni() {
    let documento = prompt('Tenes documento?')
    let documentoLowerCase = documento.toLowerCase()
    if (documentoLowerCase === 'no') {
        console.log('No podes pasar sin documento, volve cuando lo tengas.')
    }
    else if (documentoLowerCase === 'si') {
        controlEdad()
    }
    else {
        console.log(`No se que es ${documento}. Tenes documento o no?`)
        controlDni()
    }
}

function controlEdad() {
    let edad = Number(prompt('Cuantos años tenes?'))
    if (edad < 18) {
        console.log('No podes pasar, sos menor de edad.')
    }
    else if (edad >= 18) {
        console.log('Bienvenido, que la pases bien.')
    }
    else {
        console.log(`Cuantos años? Repetimelo por favor.`)
        controlEdad()
    }
}

controlDni()