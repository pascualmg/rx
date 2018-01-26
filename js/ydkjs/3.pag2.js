debugger;
function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, Im " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Kyle"
};

var passh = {
    name: "passh"
};

console.log(identify.call(me));
console.log(identify.call(passh));

speak.call(me);
speak.call(passh);
