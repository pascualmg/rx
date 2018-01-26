function foo(num) {
    console.log('foo: ' + num);
    this.count++;
}

foo.count = 0; //como no lo inicialices , toma NaN.

var i;

for (i = 0;i<10;i++) {
   if (i > 5) {
       //Aquí usamos la call para asegurarnos de que `this`
       //apunta a la función objego (`foo`) a si misma.
       foo.call(foo, i); //que hijopuuto.
   }
}

console.log(foo.count);
