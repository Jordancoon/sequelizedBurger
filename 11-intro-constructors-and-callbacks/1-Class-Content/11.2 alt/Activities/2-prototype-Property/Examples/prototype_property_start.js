// 'use strict';

// TODO: Extract instructions into new Activity README.md format.

/******************************************************************************
 *
 * This exercise will introduce you to one of the most powerful contexts
 *   for prototypes in JavaScripts: object-oriented programming (OOP) With
 *   constructor functions.
 *
 *   There's a lot of text in this file, but don't let that intimidate you.
 *   It's all there to help--you won't be doing as much work as it looks.
 *
 *****************************************************************************/


/*****************************************************************************
 *
 * BACKGROUND/INSTRUCTIONS:: The Prototype of Instance Objects
 *
 ******************************************************************************

 * A function's length property stores how many arguments
 *   the author defined the function with. The point you need to remember,
 *   though, is this: In JavaScript, any entity with properties is an Object.
 *
 *   Yes...Even functions. Try this:
 *
 *   1. Explain to your partner what the 'call' function does.
 *
 *   2. Explain to your partner what the arguments to call mean.
 *
 *   3. Use call to create a new user, named Mary Wollstonecraft,
 *        with any email. What do you have to create before usinpu =" " call?
 *
 *   4. Log your user's first name.

 *****************************************************************************/

function User(first_name, last_name, email) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;

    return 'This is a user function...';
}

var mary = new User("Mary", "Wollstonecraft", "mwollstone@example.com");

console.log(mary.first_name);

var mary2 = {};
mary2.prototype = Object.getPrototypeOf(mary);
User.call(mary2, "Mary", "Wollstonecraft", "mwollstone@example.com");

// var mary2 = new User("Someone Else", "Wollstonecraft", "mwollstone@example.com");


var mwollstonecraft = new User("Mary", "Wollstonecraft", "mwollstone@example.com");

// console.log("mwollstonecraft's prototype:", Object.getPrototypeOf(mwollstonecraft))

var rheinlein = new User("Robert", "Heinlein", "heinlein@navy.gov");

var rheinleinPrototype = Object.getPrototypeOf(rheinlein);

console.log(rheinleinPrototype);


function isAdmin() {
    if (this.admin) {
        return this.admin;
    } else {
        return false;
    }
}

User.prototype.isAdmin = isAdmin;
mary2.prototype = User.prototype;
mwollstonecraft.admin = true;
mwollstonecraft.address = "Some Address";

// console.log("Is mwollstonecraft an admin?", mwollstonecraft.isAdmin());
// console.log("Is rheinlein an admin?", rheinlein.isAdmin());

// console.log('rheinlein prototype', Object.getPrototypeOf(rheinlein));
var testUser = {};
// console.log(Object.getPrototypeOf(mwollstonecraft));
console.log("mwollstonecraft", mwollstonecraft);
console.log("rheinlein", rheinlein);


console.log("Mary 2: ", Object.getPrototypeOf(mary2));

// console.log('testUser prototype', Object.getPrototypeOf(testUser));
// console.log('Does TestUser.isAdmin exist?', testUser.isAdmin());
// Write your code here.

/******************************************************************************
 *
 * INSTRUCTIONS
 *
 ******************************************************************************
 *
 * ...Well, that was the last mandatry task, anyway. If you finish early, try
 *   to solve this one, inspired by an exercise in Stoyan Stefanov's book on
 *   OOP.
 *
 * 1. Create a Shape constructor. It should have a property called type. Attach
 *    a function, called get_type, such that any Shape will be able to call it.
 *    Just fill it in with a return statement for now.
 *
 * 2. Create Triangle and Square constructors. The triangles should set the
 *    properties side1, side2, and side3 for its side lengths.
 *    Do the same for Square.
 *
 * 3. Set the prototype of both of these objects equal to a new Shape().
 *    Try to explain to your prtner why we have to use an instance, rather than
 *    Shape directly, If it doesn't make sense, move on--we'll cover this in
 *    detail later.
 *
 * 4. Turn your attention to Shape.get_type. This function should return
 *    the type of the shape that it's called on--but only be defined on Shape.
 *
 *    To do this, read about the Object.prototype.constructor property on MDN:
 *
 *     http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
 *
 *    JavaScript sets a constructor property for you automatically. But, when
 *    you muck with the prototype chain, this default won't accurately
 *    represent which function created which object.
 *
 *
 *    We learned about a new property of functions early in this activity,
 *    which should be helpful in solving this exercise. Return it from
 *    get_type.
 *
 *    Now, console.log the result of calling get_type. What do you get? What
 *    should you have gotten? Try to explain to your partner why this happened.
 *
 *    There is no "secret" to fixing this, actually. You really do just reset
 *    the .constructor property of the triangles you create. But, there's a
 *    nuance to it.
 *
 *      1. If you want all triangles ever created to report Triangle as their
 *         .constructor, where do you put that property?
 *      2. If your code still doesn't work, take a close look at where you're
 *         modifying your shape prototypes. Does the order in which you change
 *         the prototype and constructor properties matter?
 *
 * 5. Create a Pentagon object, analogous to your other shapes. Your getType
 *    method should work out of the box.
 *
 *****************************************************************************/

// Write your code here.