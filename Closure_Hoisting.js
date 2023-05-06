//Function Hoisting

// Function can be used before it is initialized

add(1, 2)

function add(a, b) {
    return a + b
}

//Arrow function => this doesn't allow function Hoisting

const add1 = (a, b) => {
    return a + b
}

add1(3, 4)

// Closures

// Function is JS has access to variables outside of their scope

const c = 10;

function fun(a, b) {
    console.log(a + b + c)
}

fun(1, 2)

function createAdder(a) {
    function f(b) {
        return sum_3 = a + b
    }
    return f;
}

const f = createAdder(3);
console.log(f(4)); // 7


// Spread Operator

let a = [1,2]
let b = [3,4]

//u can combine them together like this
console.log([...a,...b])

function sub(...args) {
    console.log(args[0] - args[1]);
}

sub(8,2)


// https://leetcode.com/problems/create-hello-world-function/description/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=QPDw0kJR
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};

const ans = createHelloWorld();



