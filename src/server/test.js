var evens = [2, 4, 6, 8];
console.log(evens);
// Expression bodies
var odds = evens.map(v => v + 1);
console.log(odds);
var nums = evens.map((v, i) => v + i);
console.log(nums);
var pairs = evens.map(v => ({even: v, odd: v + 1}));
console.log(pairs);
var fives=[];
// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});
console.log(fives);

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}
bob._friends.push("me", "you");
bob.printFriends();
/////////////////////////////////////////////
class Person {
    constructor(name, age) {
        

        this._name = name;
        this._age = age;
        //...
    }
    update() {
        //...
        console.log(`update called for ${this._name}`);
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        this._age = newAge;
    }
    static defaultPerson() {
        return new Person();
    }
}
class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this._salary = salary;
        this.key = Symbol("employee identity");
        this[this.key] = name;
    }
    update(camara) {
        super.update();
        console.log(`key: ${this[this.key].name}`);
    }
}
var joe = new Employee("joe", "50", "30000");
joe.update(10);
console.log(joe);
/////////////////////////////////////////////////////
var getASTNode = () => { return { lhs: 1, rhs: 2,op: 3}; }
// list matching
var [a, , b] = [1, 2, 3];

// object matching
var { op: a, lhs: { op: b }, rhs: c } = getASTNode()
console.log(a);
// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var { op, lhs, rhs } = getASTNode()
console.log(op);

// Can be used in parameter position
function g({ name: x }) {
    console.log(x);
}
g({ name: 5 })

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;

///////////////////////////
function f(x, y = 12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
}
console.log(f(3) == 15);

function g(x, ...y) {
    // y is an Array
    return x * y.length;
}
console.log(g(3, "hello", true) == 6);

function h(x, y, z) {
    return x + y + z;
}
// Pass each elem of array as argument
console.log(h(...[1, 2, 3]) == 6);

/////////////////////////////////////
function i() {
    {
        let x;
        {
            // okay, block scoped name
            const x = "sneaky";
            // error, const
            //x = "foo";
        }
        // error, already declared in block
        //let x = "inner";
    }
}
console.log(i());