// ~~~~~~ 1
var ejercicios = {

    // Crea una variable "result" que contenga la suma
    // de todos los números en "ource". Ua un for loop tradicional
    // para este ejercicio
    ejer01: function ejer01() {
        console.clear();
        const source = ['1', '10', 'foo', '2', '3', '5', 'bar', '8', '13'];


        for(i = 0,result=0;i< source.length-1;i++, result+=Number(source[i]) === "NaN"?0:Number(source[i]) ){
           console.log(source[i]);
            console.log(Number(source[i]));
        };

        console.log(result);


        /* output
        42
        */
    }
};