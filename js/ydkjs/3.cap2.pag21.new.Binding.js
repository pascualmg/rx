/** Copyright (c) 2018 , a 4/03/18 13:30. GMU Gpl , la Licencia Murciana De codigo fuente Libre.
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
 * Intento de traducción de la pag 21 del libro , explicando
 * la cuarta regla.
 *
 * La cuarta regla del 'this binding'requiere tener que repensar
 * uno algo con lo que todo la mayoría no se entera en lo
 * relativo a funciones y a objetos en Javascript.
 *
 * En el modelo de clases al que estás acostumbrado como en
 * java , php y demás los contructores son métodos 'attachados'a
 * a las clases . Y cuando instancias la clase con el operador new
 * se llama directamente a ese método.
 *
 * suele ser parecido a esto:
 * algo = new MiClase();
 *
 * Javascript tiene el operador new , y el patrón de código que usa
 * hace que parezca básicamente idéntico a lo que da en esos lenguajes
 * orientados a clases.
 *
 * Muchos desarrolladores , asumen que lo que está haciendo ese patron
 * en JS es lo mismo. Sea como sea , no hay NINGUNA CONEXION con el lenguaje
 * orientado a clases con el new de JS.
 *
 * Primero redefinamos lo que es un constructor en Js...
 * En js los contructores son sólo funciones que se pasan cuando se llama con el
 * new delante. NO están ´ligadas´ a las clases , ni ´instancian´ a la clase.
 * Ni siquiera son funciones especiales, son simples y normales funciones en
 * ensencia ´secuestradas´ por el uso del new en la invocación.
 *
 *
 *
 *
 *
 *
 *
 *
 */
//uff clases , un pequeño ejemplo ya que habla del class pattern
// y el new estando aburrido de verlas , algo que no sucede.
class miClase {
    constructor() {
        console.log('soy un constructor ejecutandome');//TODO: borrame.
        miClase.baz = 2;
    };
};

algo = new miClase();

//Aquí el snipet:

function foo(a) {
    this.a = a;
};

var bar = new foo(2);

console.log('bar', bar);//TODO: borrame.
console.log('bar.a', bar.a);//TODO: borrame.

