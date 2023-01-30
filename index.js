var Jugador = require('./clases')

let jugador1 = new Jugador("daniel27", "elfo", "arquero")
let jugador2 = new Jugador("noobmaster69", "no muerto", "guerrero")
let jugador3 = new Jugador("dawei", "enano", "mago")

let basejugadores = [
    { jugador1 },
    { jugador2 },
    { jugador3 }]


console.log("__________________________________________")
console.log("jugadores actualmente conectados:")


for (let i = 0; i < basejugadores.length; i++) {
    let jugadorActual = basejugadores[i];
    let jugador = 'jugador' + (i + 1);
    console.log(jugadorActual[jugador]._nombre);
}


console.log("__________________________________________")

console.log("chat de los jugadores: ")
console.log("__________________________________________")


console.log(jugador1.presentarse())
console.log(jugador2.presentarse())
console.log(jugador3.presentarse()) 