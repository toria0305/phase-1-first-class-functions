function receivesAFunction(banana) {
    return banana();
}

const returnsANamedFunction = function() {
    return function straw() {
        console.log('Hello')
    }
}

const returnsAnAnonymousFunction = function() {
    return function() {
        console.log('Hey Vic')
    }
}




