"use strict"
var ejercicios = {
    // Crea una variable "result" que contenga la suma
    // de todos los números en "ource". Ua un for loop tradicional
    // para este ejercicio
    ejer01: function ejer01() {
        console.clear();
        const source = ['1', '10', 'foo', '2', '3', '5', 'bar', '8', '13'];
        var result = 0;

        for(let i = 0;i< source.length;result += Number(source[i])?Number(source[i]):0,i++ ){ };

        console.log(result);
        /* output
        42
        */
    },
    ejer02: function ejer02() {

    }
};