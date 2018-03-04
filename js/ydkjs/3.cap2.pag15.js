function foo() {
    console.log('this.a', this.a);
};

var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
   a: 2,
   obj2: obj2
};

obj1.obj2.foo.call(obj1);

var bar = obj1.obj2;

console.log('bar', bar.a);//TODO: borrame.

