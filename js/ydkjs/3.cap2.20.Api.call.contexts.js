/*
 * Copyright (c) 2018 , a 4/03/18 11:53. GMU Gpl , la Licencia Murciana De codigo fuente Libre.
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
function foo(el) {
    console.log('el', el);
    console.log('this.id', this.id);


}
var obj = {id:'maravillozo'};

[1,2,3].forEach(foo, obj);



