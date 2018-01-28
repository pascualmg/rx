// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
interface User {
   name: string
}

function helloWorld(user: User) {
    console.log('Hellow World , my name is', user.name);
}

let passh = {name: 'passh'};

helloWorld(passh);

