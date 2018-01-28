"use strict";

function User(){
    let publicAPI;
    let username, password;

    function doLogin(user, pass) {
        username = user;
        password = pass;
        //do the rest of the login work.
    }

    function showData() {
       console.log('me llamo ', username);
       console.log('tengo el pass ', password);
    }

    publicAPI = {
        login: doLogin,
        showData: showData,
    };

    return publicAPI; 
}

//create a user module instance.
debugger;
var passh = User();

passh.login('passh', 'cebollo100');

passh.showData();


