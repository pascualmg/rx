for (var i = 1; i <= 5; i++) {
    (function () {
        var a = i;
        setTimeout(function () {
            console.log('i =', i);//TODO: borrame.
            console.log('a =', a);//TODO: borrame.
        }, 100 * i);
    })()
}