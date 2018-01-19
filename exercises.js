Ejercicios del Cuenca . 
// ~~~~~~ 1
console.clear = () => {};

console.clear();
const source = ['1', '10', 'foo', '2', '3', '5', 'bar', '8', '13'];

// -->
// Crea una variable "result" que contenga la suma
// de todos los números en "source". Ua un for loop tradicional
// para este ejercicio
// <--

console.log(result);

/* output
42
*/

// ~~~~~~ 2

console.clear();
const source = ['1', '10', 'foo', '2', '3', '5', 'bar', '8', '13'];

// -->
// Crea una variable "result" que contenga la suma
// de todos los números en "source". Usa las funciones puras
// para arrays como map, filter, reduce o reduceRight.
// <--
console.log(result);

/* output
33
*/

// ~~~~~~ 3

console.clear();
const source$ = Rx.Observable
  .interval(400)
  .take(9)
  .map(i => ['1', '10', 'foo', '2', '3', '5', 'bar', '8', '13'][i]);

// -->
// Create un Observable `result` que emite la suma
// de todos los números que emite source. Usando operadores
// <--

result$
  .subscribe(value => console.log(value));

/* output
33
*/

// ~~~~~~ 4

console.clear();

const promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('timeout');
    resolve(123);
  }, 1000);
  console.log('promise started');
});

promise
  .then(x => console.log(`resolved: ${x}`));

// -->
// Crea un observable que se comporte como la promesa
// anterior, sin usar operadores, es decir, usando
// Observable.create(subscribe: (subscriber: Observer) => Subscription)
// <--

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

// ~~~~~~ 5

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

// ~~~~~~ 6

/*
<div class="row">
  Weight:
  <span id="weight-text"></span>kg
  <input id="weight-slider" type="range" min="40" max="120" step="1" value="70">
</div>
*/

console.clear();

const weightSliderElem = document.getElementById('weight-slider');
const weightTextElem   = document.getElementById('weight-text');

// -->
// Crea un observable "weight$" que emita
// el valor (actual y siguientes) de weightSliderElem
// Del evento cogeremos evt.target.value
// <--

// -->
// Subscribete a "weight$" para ir actualizando
// el valor of weightTextElem usando .innerHTML
// <--

// ~~~~~~ 7

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
const weightTextElem     = document.getElementById('weight-text');
const weightSliderElem   = document.getElementById('weight-slider');

const heightTextElem     = document.getElementById('height-text');
const heightSliderElem   = document.getElementById('height-slider');

const heightEditTextElem = document.getElementById('height-edit-text');
const bmiTextElem        = document.getElementById('bmi-text');

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

// Subscriptions
weightSlider$
  .subscribe(x => weightTextElem.innerHTML = x);

heightSlider$
  .subscribe(x => heightTextElem.innerHTML = x);

bmi$
  .subscribe(x => bmiTextElem.innerHTML = x);

// ~~~~~~ 8

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

messages$
  .subscribe(x => console.log(x));

/* output
"System failed because of Render failed: 309 after the user Clicked"
"System failed because of Connection pooped after the user Scrolled"
"System failed because of Render failed: 17 after the user Clicked"
"System failed because of Refresh Epic Fail after the user Typed"
"System failed because of Nothing rendered after the user Zoomed in"
*/

// ~~~~~~ 9

// publish y refCount

// Publish crea un nuevo Observable que actúa como proxy
// del original. Lo hace subscribiendose él mismo al original
// y pusheando los valores a los subscriber

// Un observable published, es de hecho un ConnectableObservable,
// que tiene un método extra llamado connect, al que llamamos para
// empezar a recibir valores.

const source$ = Rx.Observable.interval(1000);
const publisher$ = source$.publish();

publisher$.subscribe(x => console.log(`Subscription 1: ${x}`));
publisher$.connect();

setTimeout(() => {
  publisher$
    .subscribe(x => console.log(`Subscription 2: ${x}`));
}, 5000);

// RefCount sirve para automatizar el proceso de conectar
// un Observable conectable. Lo más importante, mantiene
// la cuenta de los subscriptiores que tiene el observable
// y no se desconecta de él hasta que el último observer
// ha terminado

console.clear();

const clock$ = Rx.Observable
  .interval(1000)
  .take(10)
  .map(x => x + 1);
// -->
// Arregla el código para que ambos subscribers
// logueen los mismos eventos al mismo tiempo
// <--

setTimeout(() => {
  clock$
    .subscribe(x => console.log(`b: ${x}`))
}, 4500);

clock$
  .subscribe(x => console.log(`a: ${x}`));

// ~~~~~~ 10

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
}

delayEach(clock$, 2000)
  .subscribe(x => console.log(x));

