
let ejercicios;
ejercicios = {
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
        const source = ["1", "10", "foo", '2', '3', '5', 'bar', '8', '13'];

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

        const source$ = Rx.Observable
            .interval(400)
            .take(9)
            .map(i => ['1', '10', 'foo', '2', '3', '5', 'bar', '8', '13'][i]
            )
        ;


        var result = source$
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
        return result;
    },
    ejer04: function ejer04() {
        console.clear();
// -->
// Crea un observable que se comporte como la promesa
// anterior, sin usar operadores, es decir, usando
// Observable.create(subscribe: (subscriber: Observer) => Subscription)
// <--

        observable$ = Rx.Observable.create(function (observer) {
            console.log('observable started');
            const promise = new Promise(resolve => {
                console.log('promise started');
                    setTimeout(() => {
                        console.log('timeout');
                        resolve(123);
                    }, 1000);
                }
            );
            promise.then((x)=>observer.next(x));
        });


        observable$
            .subscribe(x => console.log(`next: ${x}`));

        /* output
        "promise started"
        "observable started"
        "timeout in promise"
        "resolved: 123"
        "timeout in observable"
        "next: 123"
        */

    },
    ejer05: function ejer05() {
        console.clear();
        const promise = new Promise(resolve => {
            setTimeout(() => {
                console.log('timeout in promise');
                resolve(123);
            }, 1000);
            console.log('promise started');
        });

        promise
            .then(x => console.log(`resolved: ${x}`));

// -->
// Crea un observable que se comporte como la promesa
// que además limpie el timeout al desubscribirse, usando
// Observable.create
// <--

        observable$
            .subscribe(x => console.log('next: ' + x));

// -->
// Después de 500ms desubscríbete del stream
// <--
    },
};

(function IIFE() {
    ejercicios.ejer03().subscribe((a) => {
        console.log(a)
    });
}());