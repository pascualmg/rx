"use strict"
var ejercicios = {
    ejer01: function ejer01() {
        // Crea una variable "result" que contenga la suma
        // de todos los números en "ource". Ua un for loop tradicional
        // para este ejercicio
        console.clear();
        const source = ['1', '10', 'foo', '2', '3', '5', 'bar', '8', '13'];
        var result = 0;

        for (let i = 0; i < source.length; result += Number(source[i]) ? Number(source[i]) : 0, i++) {
        }
        ;

        console.log(result);
        /* output 42 */
    },
    ejer02: function ejer02() {
        // Crea una variable "result" que contenga la suma
        // de todos los números en "source". Usa las funciones puras
        // para arrays como map, filter, reduce o reduceRight.
        console.clear();
        const source = ['1', '10', 'foo', '2', '3', '5', 'bar', '8', '13'];

        var result = source
            .filter(function predicate_number(item) {
                return Number(item);
            })
            .map(function proyection_number(item) {
                return Number(item);
            })
            .reduce(function combiner_summation(acc, curr) {
                return acc + curr;
            }, 0)
        ;
        console.log(result);
        /* output 42 */
    },
    ejer03: function ejer03() {
        // Create un Observable `result` que emite la suma
        // de todos los números que emite source. Usando operadores
        console.clear();
        const source$ = Rx.Observable
            .interval(400)
            .take(9)
            .map(i => ['1', '10', 'foo', '2', '3', '5', 'bar', '8', '13'][i]
    )
        ;


        result$
            .subscribe(value = > console.log(value)
    )
        ;

        /* output
        33
        */
    }

};