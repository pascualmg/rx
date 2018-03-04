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
 *  Sólo necesitas es encontrar el call-site e inspeccionarlo para ver qué regla se aplica.
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

function foo(algo) {
   this.a = algo;
}

var obj1 = {
    foo: foo
};

var obj2 = {};

obj1.foo(2);
console.log('obj1.a', obj1.a);//2

obj1.foo.call(obj2, 3);
console.log('obj2.a', obj2.a);//3

var bar = new obj1.foo(4);
console.log('obj1.a', obj1.a);//2
console.log('bar.a', bar.a);//4

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





