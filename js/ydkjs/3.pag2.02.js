debugger;
function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    var greeting = "Hello, Im " + identify(context);
    console.log(greeting);
}

var me = {
    name: "Kyle"
};

var passh = {
    name: "passh"
};

console.log(identify(me));
console.log(identify(passh));

speak(me);
speak(passh);
