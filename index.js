function receivesAFunction(displayName){
    return displayName()
}

function displayName(){
    return 'You are a student!'
}

function returnsANamedFunction(){
    return displayName
}

const returnsAnAnonymousFunction = yourName => {
    return () => 'Welcome, ' + yourName;
}