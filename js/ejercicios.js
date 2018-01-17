"use strict"
var ejercicios = {
    // Crea una variable "result" que contenga la suma
    // de todos los números en "ource". Ua un for loop tradicional
    // para este ejercicio
    ejer01: function ejer01() {
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
            .filter(function predicateonlyNumbers(item){return Number(item);})
            .reduce(function combinerSummation(acc, curr){return acc + curr;},0)
        ;
        console.log(result);

        /* output
        33
        */
    }
};