/*
 * Copyright (c) 2018 , a 4/03/18 10:47. GMU Gpl , la Licencia Murciana De codigo fuente Libre.
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
 * El autor también tiene derecho a ser totálmente anónimo y no ha de por que constar por ningún sitio si le apetece.
 *
 *
 */

/**
 *Hard binding pattern , hay 2 formas de implementarla.
 */

//1
function foo(algo) {
    console.log('this.a y algo', this.a, algo);
    return this.a + algo;
}

var obj = {
    a: 2
};

var bar = function () {
    return foo.apply(obj, arguments)
};

var resultado = bar(33);
console.log('obj', obj);//TODO: borrame.


console.log('resultado', resultado);//TODO: borrame.


//2  con un helper.
function bind(fn, obj) {
    return function () {
        return fn.apply(obj, arguments);
    }
}

var baz = bind(foo, obj);
console.log('baz(42)', baz(42));//TODO: borrame.

/**
 * Como este patrón es tan usado , viene ya en ES5 en la Function.prototype.bind y se usa asín...
 *viene de casa! bind devuelve una nueva función que está harcodeada a la funcion original
 *con el contexto que tu le digas.
 */
var bazbaz = foo.bind(obj);
var bazbazbaz = foo.bind({a:10});

console.log('bazbaz(11)', bazbaz(11));//TODO: borrame.
console.log('bazbazbaz(11) bindeada a un objeto anonimo en el que a vale 10', bazbazbaz(11));//TODO: borrame.

