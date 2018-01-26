
function foo(num) {
    console.log("foo: " + num );
    //contamos las veces que se llama.
    // this.count++;
    this.count = (typeof(this.count) === "undefined") ? 1:this.count + 1; //parche

    foo.count++; //parche
}

foo.count = 0;


var i;

for (i = 0; i<10 ; i++) {
   if (i > 5) {
      foo(i) ;
   }
}

console.log('global count', global.count);
console.log('foo.count', foo.count);



