class Jugador {

    constructor(nombre, raza, clase ){
        this._nombre = nombre;
        this._raza = raza;
        this._clase = clase;
    }

    correr(){}
    saltar(){}
    presentarse(){
        return 'Mi nombre es ' + this._nombre + ' mi raza es ' + this._raza + ' y mi clase es ' + this._clase
    }

}

module.exports = Jugador