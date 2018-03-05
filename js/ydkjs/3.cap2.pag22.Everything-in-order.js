/*
 * Copyright (c) 2018 , a 4/03/18 20:35. GMU Gpl , la Licencia Murciana De codigo fuente Libre.
 *
 * Puedes hacer lo que te salga del pijo con este código, partiendo de eso :
 *
 * 1. Puedes copiarlo y publicarlo.
 *         Pero siempre con esta licencia también e indicando el autor original si es que lo tiene
 *         y de donde lo has sacao si se puede.
 * 2. Puedes Ñapearlo, ampliarlo y modificarlo a tu antojo.
 *        ¨Lo suyo sería¨ que entonces indicaras que lo has hecho y donde,
 *         añadiendote como autor si quieres.
 *
 * Ni el autor original , ni los posteriores son responsables de los daños que este código pueda ocasionar.
 * El autor también tiene derecho a ser totálmente anónimo y no ha de por que constar por ningún lao si le apetece.
 *
 *
 */


/**
 *  Traducción ydkjs de kyle sympson libro 3 , capitulo 2 , pag 22. Everything in order.
 *
 *  Así, ahora hemos dejado al descubierto  las 4 reglas para el 'bindeo del this' en función de
 *  quien hace la llamadas.
 *
 *  Sólo necesitas localizar el call-site e inspeccionarlo para ver qué regla se aplica.
 *  Pero qué pasa si el call-site tiene diferentes reglas de elección?
 *  Tiene que existir un orden de precedencia entre esas reglas. Así que lo siguiente deja ver
 *  como se aplica la prededencia de dichas reglas.
 *
 *  Debe quedar claro que el ´Default binding´ es la regla de prioridad más baja de las cuatro.
 *  Así que simplemente dejaremos eso a un lado.
 *
 *  Cual es la más más prededencia tiene? el 'implicit binding' o el 'explicit binding' ?
 *  Testeemoslo:
 */
// function foo() {
//     console.log('this.a', this.a);
// }
//
// var obj1 = {
//     a: 2,
//     foo: foo
// };
//
// var obj2 = {
//     a: 3,
//     foo: foo
// };
//
// obj1.foo();
// obj2.foo();
//
// obj1.foo.call(obj2);
// obj2.foo.call(obj1);

/**
 * Así que, el 'explicit binding' tiene precedencia frente al 'implicit binding',
 * lo cual significa que te debes preguntar primero si se ha aplicado algún 'explicit binding'
 * antes de mirar si hay 'implicit binding'
 *
 * Sólo nos queda descifrar ahora , donde encajaría la precedencia del 'new binding':
 */

// function foo(algo) {
//    this.a = algo;
// }
//
// var obj1 = {
//     foo: foo
// };
//
// var obj2 = {};
//
// obj1.foo(2);
// console.log('obj1.a', obj1.a);//2
//
// obj1.foo.call(obj2, 3);
// console.log('obj2.a', obj2.a);//3
//
// var bar = new obj1.foo(4);
// console.log('obj1.a', obj1.a);//2
// console.log('bar.a', bar.a);//4

/**
 * OK, el 'new binding' tiene mayor precedencia que el 'implicit binding', pero tu que piensas
 * que tiene más o menos precedencia que el 'explicit binding'?
 *
 * Pista: ni el new in el call/apply pueden ser usadas conjuntamente , por lo que algo como
 * foo.call(obj) no está permitido para testear el 'new binding' con el 'explicit binding' Pero aún así ,
 * podemos usar el 'hard binding' para testear la precedencia de ambas reglas.
 *
 * Antes de que podamos meternos a ver esto con código, tienes que pensar de nuevo como funciona
 * el 'hard binding' físicamente ,que al final es esa Function.prototype.bind(...) que crea
 * una nueva función que wrappea a la función que tiene el this harcodeado, ignorando por completo
 * su propio 'this binding' ,sea cual sea , usando el que le pasamos manualmente.
 *
 * Por ese mismo razonamiento , debería de parecer obvio asumir que ese 'hard binding'
 * (el cual es una forma de 'explicit binding' ) tiene más precedencia que el 'new binding'
 * y por lo tanto no puede ser sobreescrito con el new.
 *
 * Vamos a verlo:
 */


// function foo(algo) {
//     this.a = algo;
// }
//
// var obj1 = {};
//
// var bar = foo.bind(obj1);
// bar(2);
// console.log('obj1.a', obj1.a);//2
//
// var baz = new bar(3);
// console.log('obj1.a', obj1.a);//2
// console.log('baz.a', baz.a);//3


/**
 * Wooo! bar se ha 'hard-bindeado' contra el 'obj1' pero 'new bar(3)' no ha cambiado obj1.a a 3
 * como nosotros esperábamos. En puesto de eso , en la llamada que le hace el 'hard-binding' (con el obj1)
 * a bar(...) ES capaz de sobreescribirlo con el 'new'. Por que como se aplique un 'new' ya tenemos otra vez
 * un objeto totalmente nuevo que se ha creado , al cual hemos llamado baz, y vemos que de hecho baz.a vale 3.
 *
 * Deberías de estar sorprendido si miras nuevamente al anterior 'fake bind helper'
 */

// function bind(fn, obj) {
//     return function () {
//         fn.apply(obj);
//     }
// }


/**
 * Poniendonos a razonar como funciona el código del helper, nos damos cuenta que no habría manera alguna
 * de sobreescribir el 'hard-binding' al objeto con el operador 'new'.
 *
 * Pero claro , la prefabricada que viene en ES5 Function.prototype.bind(..) es algo más sofisticada,
 * aunque no mucho tampoco.
 *
 * Aquí el polyfill que hay en la página MDN para bind(...):
 */

if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            throw new TypeError('Function.protype.bind() no es callable');
        }
        var aArgs = Array.prototype.slice.call(arguments, 1);
        var fToBind = this;
        var fNOP = function () {
        };
        //la helper..
        var fBound = function () {
            return fToBind.apply(
                this instanceof fNOP && oThis ? this : oThis,
                aArgs.concat(Array.prototype.slice.call(arguments))
            )
        };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}
/**pista:
 * El polifyll bind(..) mostrado anteriormente difiere del bind
 * prefabricado de ES5 con respecto a las funciones de 'hard-bound' que se usan con el 'new'
 * (sigue leyendo para saber para que sirve)
 * Es por que el por que el polyfill no puede crear una función sin un '.prototype' de la misma
 * forma que lo hace la prefabricada.Hay algunas 'indirecciones matizadas' (literal) que hacen que
 * tenga el mismo comportamiento.
 * TEN CUIDADO si piensas usar el 'new' con una función 'hard-boundeada' y echas mano de este polifyll.
 */

/**
 * La parte que permite que se pueda sobreescribir con el new es esta:
 * this instanceof fNOP && oThis ? this : oThis,
 * y...
 * fNop.prototype = this.prototype;
 * fBound.prototype = new fNOP();
 *
 * No nos vamos a meter en profundidad a explicar como funciona esta ñapa
 * (Es complicado y va mucho más allá de lo que aquí se pretende explicar) (Gracias kyle)
 * Pero esencialmente la utilidad lo que hace es averiguar cuando sí y cuando no la función 'hard-boundeada' ha
 * sido llamada con el 'new'(Dando como resultado un nuevo objeto construido siendo su this)
 * Cuando es este caso , que sí lo está (hard-boundeada) , entonces usa ese nuevo 'this' que se ha creado en vez
 * de usar el que anteriormente se había especificado para el 'hard-binding' en el 'this'.
 *
 * Por qué va a resultar útil ser capaces de sobreescribir un 'hard-binding' ?
 *
 * La principal razón que nos lleva a usar esto , es crear una función
 * (que puede ser usada para construir nuevos objetos) que esencialmente ingnore el 'hard-binding'
 * y en puesto de ello  'presetea' algunos o todos los argumentos de la función. Una de las capacidades
 * de bind(..) es que cualquier argumento que le pases después del primero que es el objeto que se bindea
 * al 'this' , son por defecto, pasados a la función subyacente como argumentos.
 * (técnicamente se llama 'partial application' la cual es un subconjunto de 'currying' (zurra?))
 * Por ejemplo:
 */
function zoo(p1, p2) {
    this.val = p1 + p2;
}
//Usamos el null aquí porque nos la pela el hard-binding del 'this'
//en este ejemplo. y de todas formas va a ser sobreescrita por el binding
//de la llamada con el 'new'
var bar = zoo.bind(null, "p1");

var baz = new bar("p2");

console.log('baz.val', baz.val);//p1p2 (la cagaste bien si esto pasa).


/**
 * DETERMINING 'this'
 *
 * Ahora , podemos resumir las reglas que determinan el 'this' de un 'call-site' de una función
 * según su orden de precedencia. Haz estas preguntas in este orden y párate en la primera
 * regla que se aplique:
 */

// 1. Se ha llamado a la función con un new ('new-binding')? Si es así entonces el 'this'
//    es el objeto recién construido.
var bar = new foo();


// 2. Se ha llamado a la función con un call o apply ('explicit-binding'), incluso oculto
//  desde una bind ('hard-binding')? Si es así entonces el 'this' es ese objeto indicado
//  explíticamente.

var bar = foo.call(obj);

// 3. Se ha llamado a la función con un contexto ('explicit-binding')?
//    también conocido como un 'owning' o 'containing object'? Si es que sí , entonces el 'this' es
//    ese objeto de contexto.

var bar = obj1.foo();

// 4 De otra forma, por defecto el 'this' (default-binding) .
// Si está en modo estricto 'this' es undefined.
// En caso contrario, 'this' es el global-object.

var bar = foo();

/**
 * Y así es , Eso es todo lo que hace falta para entender las reglas del 'this-binding' para
 * las llamadas a función normales. bueno... casi ya que hay algunas excepciones.
 */

