function foo() {
   console.log('this.a es : ', this.a);
}

var obj = {
 a: 42,
 foo: foo
};

var bar = obj.foo;

function conscope() {
    var a = 2;
    bar();
}

conscope();
