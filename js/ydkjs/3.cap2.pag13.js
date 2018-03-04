function foo() {
    console.log(this.a);
}

var obj = {
 a: 2,
 foo: foo
};

obj.foo();

var persona = {
 nombre: '',
    edad: null,
    setEdad: function setEdad(edad) {
       this.edad = edad;
    }
};

persona.nombre = 'pepe';
persona.setEdad(20);
console.log('persona', persona);//TODO: borrame.

