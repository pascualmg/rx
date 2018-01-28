"use strict";

function User(user , pass) {
    let publicAPI;

    let username = user;
    let password = pass;

    function doLogin(user, pass) {
        username = user;
        password = pass;
        //do the rest of the login work.
    }

    function showData() {
       console.log('me llamo ', userName());
       console.log('tengo el pass ', passWord());
    }

    function userName() {
        return username;
    }
    //fluent setter.
    function setUserName(user) {
        username = user;
        return publicAPI;
    }

    function passWord() {
        return password;
    }
    //fluent setter.
    function setPassword(pass) {
       password = pass;
       return publicAPI;
    }

    publicAPI = {
        login: doLogin,
        userName: userName,
        passWord: passWord,
        setPassword: setPassword,
        setUserName: setUserName,
        showData: showData,
    };

    return publicAPI; 
}

//create a user module instance different ways ...

//constructor al crear...
 let passh = User('passh', 'cebollo100');
 passh.showData();

//constructor desde func...
 passh.login('passh', 'cebollo100');
 passh.showData();

 //fluentSetters Constructor.
let otherUser = User()
    .setUserName('passh')
    .setPassword('pass')
;
otherUser.showData();

passh.setUserName('Pascual Munioz');
console.log('me cambie el nombre', passh.userName());//TODO: borrame.


