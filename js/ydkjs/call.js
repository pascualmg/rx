/**
 * Suma los 3 parametros , y si el this es un objeto que tiene
 * la propiedad nombre y esta no es undefined , saluda. Ahi va eso .
 *
 * @param a
 * @param b
 * @param c
 * @returns {*}
 */
function foo(a, b, c) {
    if (!isUndefined(this.nombre)) {
        console.log('me llamo ', this.nombre);
    }
    return a + b + c;
}

function isUndefined(wtf) {
    return typeof(wtf) === 'undefined';
}

var a;
var b;
var c;

a = 10;
b = 20;
c = 12;
debugger;
console.log(foo(a, b, c));  //42
console.log(foo.call({nombre: 'passh'}, 20, 20, 2)); //me llamo passh 42

//Creo objeto persona, y le meto la funcion foo como la propiedad presentarse.
var persona = {
    nombre: 'passh',
};

//Esta propiedad hay que ponerla fuera , por que como se va a `call-ear` consigo misma usando el this
//tiene que existir antes.
persona['presentarse'] = function () {
    console.log(foo.call(this, 1, 2, 3));
};

persona.presentarse();
