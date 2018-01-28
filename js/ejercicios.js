var ejercicios;
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
            promise.then((x) => observer.next(x));
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
        observable$ = new Rx.Observable.create(function subscribe(observer) {
            setTimeout(
                () => {
                    try {
                        observer.next(42);
                        observer.complete();
                    } catch (err) {
                        observer.error(err);
                    }
                },
                1000
            );

            const subscription = {
                unsubscribe: function unsubscribe() {
                    console.log('me desuscribo gracias!!');//todo:borrame
                }
            };
            return subscription;
        });

        observable$
            .subscribe(x => console.log('siguiente: ' + x));

// -->
// Después de 500ms desubscríbete del stream
// <--
        setTimeout(
            (observable$) => {
                observable$.unsubscribe();
            },
            500
        );


    },
    ejer06: function ejer06() {
        /*
        <div class="row">
          Weight:
          <span id="weight-text"></span>kg
          <input id="weight-slider" type="range" min="40" max="120" step="1" value="70">
        </div>
        */
        console.clear();
// Crea un observable "weight$" que emita
// el valor (actual y siguientes) de weightSliderElem
// Del evento cogeremos evt.target.value
// <--
        weight$ = Rx.Observable.create(
            function (observable) {
                const weightSliderElem = document.getElementById('weight-slider');
                console.log('dentro', weightSliderElem);
                weightSliderElem.onchange = function sliderOnChangeHandler(ev) {
                    observable.next(ev.target.value);
                };

                return { //subscription
                    unsubscribe: function unsubscribe() {
                        weightSliderElem.onchange = undefined;
                    }
                };
            }
        );
// -->
// Subscribete a "weight$" para ir actualizando
// el valor of weightTextElem usando .innerHTML
// <--
        weight$.subscribe(
            (next) => {
                const weightTextElem = document.getElementById('weight-text');
                weightTextElem.innerHTML = next;
            },
            (error) => {
                console.log(error);
            },
            function complete() {
                console.log('complete')
            },
        );
    },
    ejer07: function ejer07() {
        /*
          <div class="row">
            Weight: <span id="weight-text"></span>kg
            <input id="weight-slider" type="range" min="40" max="120" step="1" value="70">
          </div>
          <div class="row">
            Height: <span id="height-text"></span>cm
            <input id="height-slider" type="range" min="140" max="210" value="170">
          </div>
          <div class="row">
            Height (cm): <input id="height-edit-text" type="text" value="170">
          </div>
          <h2>BMI is <span id="bmi-text"></h2>
        */
        console.clear();

// Get elements
        const weightTextElem = document.getElementById('weight-text');
        const weightSliderElem = document.getElementById('weight-slider');

        const heightTextElem = document.getElementById('height-text');
        const heightSliderElem = document.getElementById('height-slider');

        const heightEditTextElem = document.getElementById('height-edit-text');
        const bmiTextElem = document.getElementById('bmi-text');

// Observables
        const weightSlider$ = Rx.Observable
            .fromEvent(weightSliderElem, 'input')
            .map(evt => evt.target.value)
            .startWith(weightSliderElem.value);

        const heightSlider$ = Rx.Observable
            .fromEvent(heightSliderElem, 'input')
            .map(evt => evt.target.value)
            .startWith(heightSliderElem.value);

        const heightEdit$ = Rx.Observable
            .fromEvent(heightEditTextElem, 'input')
            .map(evt => evt.target.value)
            .startWith(heightEditTextElem.value);

// -->
// Crea un Observable "bmi" que depende de los
// Observables "weightSlider$" y ["heightSlider$" o "heightEdit$"]
// bmi: weight / (height * height * 0.01)
// <--
        bodyMassIndex$ = Rx.Observable.create(
            function subscribe(observer) {
                function calculateBodyMassIndex(height, weight) {
                    return weight / (height * height * 0.01);
                }

                weightSlider$
                    .subscribe(
                        (nextWeight) => {
                            const height = Number(weightTextElem.innerHTML);
                            observer.next(calculateBodyMassIndex(height, nextWeight));
                        });
                heightSlider$
                    .subscribe(
                        (nextHeight) => {
                            const weight = Number(heightTextElem.innerHTML);
                            observer.next(calculateBodyMassIndex(nextHeight, weight))
                        });
                heightEdit$
                    .subscribe(
                        (nextHeightEdited) => {
                            const weight = Number(weightTextElem.innerHTML);
                            observer.next(calculateBodyMassIndex(nextHeightEdited, weight))
                        });

                const subscription = {
                    unsubscribe: function () {
                    }
                };

                return subscription;
            }
        );

// Subscriptions
        weightSlider$
            .subscribe(x => weightTextElem.innerHTML = x);

        heightSlider$
            .subscribe(x => heightTextElem.innerHTML = x);
        var bmi$ = bodyMassIndex$;

        bmi$
            .subscribe(x => bmiTextElem.innerHTML = x);

    },
    ejer08: function ejer08() {
        console.clear();

        const connectionFailures$ = Rx.Observable
            .interval(800)
            .take(2)
            .map(i => ['Connection pooped', 'Refresh Epic Fail'][i]);

        const renderFailures$ = Rx.Observable
            .interval(700)
            .take(3)
            .map(i => ['Render failed: 309', 'Render failed: 17', 'Nothing rendered'][i]);

        const userActions$ = Rx.Observable
            .interval(300)
            .take(6)
            .map(i => ['Clicked', 'Scrolled', 'Clicked', 'Typed', 'Zoomed in', 'Scrolled'][i]);

// -->
// Crea un Observable "messages$" que emita la cadena
// "System failed because of ${failure} after the user ${action}"
// <--

        const messages$ = Rx.Observable.create(function subscribe(observer) {
            userActions$
                .zip(renderFailures$.concat(connectionFailures$))
                .filter((arr) => {
                    return (arr.length == 2);
                })
                .map(x => 'System failed becouse of ' + x[1] + ' after the user ' + x[0])
                .subscribe(
                    x => observer.next(x),
                    err => observer.error(err)
                );
            const subscription = {
                unsubscribe: function unsubscribe() {
                }
            };
            return subscription;
        });


        messages$
            .subscribe(
                x => console.log(x),
                err => console.error(err)
            );

        /* output
        "System failed because of Render failed: 309 after the user Clicked"
        "System failed because of Connection pooped after the user Scrolled"
        "System failed because of Render failed: 17 after the user Clicked"
        "System failed because of Refresh Epic Fail after the user Typed"
        "System failed because of Nothing rendered after the user Zoomed in"
        */
    },
    ejer09: function ejer09() {

// publish y refCount

// El método `Publish` crea un nuevo Observable que actúa como proxy
// del original. Lo hace subscribiendose él mismo al original
// y pusheando los valores a los subscriber

// Un observable published, es de hecho un ConnectableObservable,
// que tiene un método extra llamado connect, al que llamamos para
// empezar a recibir valores.

        const source$ = Rx.Observable.interval(500);
        const publisher$ = source$.publish();

        function testThePublisher() {
            let subscription1 = publisher$
                .subscribe(
                    x => console.log(`Subscription 1: ${x}`)
                );
            publisher$.connect();

            var subscription2;

            setTimeout(function unsubscribeFrom1AndSubscribeTo2() {
                subscription1.unsubscribe();
                subscription2 = publisher$
                    .subscribe(x => console.log(`Subscription 2: ${x}`));
            }, 5000);


            setTimeout(function desuscribirseHandler() {
                subscription2.unsubscribe();
                console.log('desuscribiendose de la 2  ahora es cuando empieza el ejercicio... ');//TODO: borrame.
            }, 10000);
        }

        // testThePublisher();

// RefCount sirve para automatizar el proceso de conectar
// un Observable conectable. Lo más importante, mantiene
// la cuenta de los subscriptiores que tiene el observable
// y no se desconecta de él hasta que el último observer
// ha terminado

        // publisher$
        //     .refCount()
        //     .subscribe(
        //         (x)=>{console.log('refcountado', x);}
        //     );


        console.clear();

        const clock$ = Rx.Observable
            .interval(3000)
            .take(10)
            .map(x => x + 1)
        ;

// -->
// Arregla el código para que ambos subscribers
// logueen los mismos eventos al mismo tiempo
// <--

        const refCountedPublishedClock$ = clock$.publish().refCount();

        setTimeout(() => {
            refCountedPublishedClock$
                .subscribe(x => console.log(`b: ${x}`))
        }, 4500);

        refCountedPublishedClock$
            .subscribe(x => console.log(`a: ${x}`));
    },
    ejer10: function ejer10() {
        console.clear();
        var clock$ = Rx.Observable
            .interval(100)
            .take(10);

        function delayEach(source$, interval) {
            // -->
            // Debes transformar cada elemento en
            // un observable con delay
            // Debes devolver un observable
            // <--
            return source$
                .zip(Rx.Observable.interval(1000))
                .map(x => x[0])
                ;
        }

        delayEach(clock$, 2000)
            .subscribe(x => console.log(x));

    },
};

