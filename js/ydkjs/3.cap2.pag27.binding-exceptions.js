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

/**
 * BINDING EXCEPTIONS.
 * ---------------------
 *
 * Como suele pasar hay excepciones en las "reglas".
 *
 * El comportamiento del 'this-binding' puede ser en algunos escenarios sorprendente, hablamos
 * de cuando intentas hacer un 'binding' diferente y al final la cosa termina con un comportamiento
 * del 'binding' de la regla del default.
 *
 *
 * ignored this
 * ------------
 *
 * Si le pasas a la call o a la apply como parametro para bindear al 'this' , un undefined o un null
 * esos valores son , efectivamente ignorados y por supuesto el 'default-binding' se aplica a la invocación.
 */


