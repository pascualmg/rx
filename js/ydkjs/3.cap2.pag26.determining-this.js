/*
 * Copyright (c) 2018 , a 5/03/18 18:27. GMU Gpl , la Licencia Murciana De codigo fuente Libre.
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
//Incluidas solo para que no peten los ejemplos de las reglas.
var obj = {};
function foo(){};

/**
 * DETERMINING 'this'
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
