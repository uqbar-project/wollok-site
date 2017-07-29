---
layout: en/hyde
title: 'Documentation'
weight: 30
lang: 'en'
---

<h1>
<img src="/images/documentation.ico" align="left" height="64" width="64"/>
&nbsp;&nbsp;Wollok official documentation
</h1>
<br>
<p>This set of chapters introduce you to the main concepts of Wollok programming language (they are all written in spanish):
</p>

* <a href="https://docs.google.com/document/d/1RBfNmKZFKZ90XvfQsN7zhtuUPV2Mvj7t-iyZiL2bClQ/edit?usp=drive_web" target="_blank">Objects. Messages. Methods.</a>
* <a href="https://docs.google.com/document/d/14092iRsXDXih8-q_0UEXIGRSQmGtxL9pay1VXX4ceJg/edit?usp=drive_web" target="_blank">References. Internal state. Sharing objects. Identity.</a>
* <a href="https://docs.google.com/document/d/1HiYxLswd4O0MBqnT3jGo2K9e_4FE73RXF_lf8NWVOSE/edit?usp=drive_web" target="_blank">Polymorphism. Introducing Collections.</a>
* <a href="https://docs.google.com/document/d/1Dgq_PfCbJHO1M7dXe-vGXtj4mbEUWlYhfvQ2i0RWOsk/edit#" target="_blank">Classes. Method lookup & polymorphism with classes.</a>
* <a href="https://docs.google.com/document/d/1KdG7NrKPgPh4bAcyLuDG2G1iWP7Ze2GFs91qzlvDKqI/edit?usp=drive_web" target="_blank">Inheritance. Self, super. Overriding.</a>
* <a href="https://docs.google.com/document/d/1MLbx1Fxt7I_uVg6Yv9hYfIu2IIbUQqqICbOM3s969D8/edit?usp=drive_web" target="_blank">Collections. Closures.</a>
* <a href="https://docs.google.com/document/d/1T87tmdXv_39RoE_zR7alVFK8TUl-KJYOhdoIsoVTRb4/edit?usp=drive_web" target="_blank">Error handling.</a>
* <a href="https://docs.google.com/document/d/156PsLi7v5LPFJ5oVy6SPwH8cQRZaBqJh-aosZjUbE4s/edit#" target="_blank">Constructors. Mutability. Equality & Identity. Design principles.</a>
* <a href="https://docs.google.com/document/d/1caDE_mlP1QMfzyVpyvh-tKshjAeYLXBkXDYrTX5zFUI/edit#" target="_blank">Testing</a>
* <a href="https://docs.google.com/document/d/1uisxrnkFdC2uBexBChSKpxYohjd90-tejALOSAVZodo/edit?usp=sharing" target="_blank">SVN + Wollok Tutorial</a> 

<hr>

<h1>
<img src="/images/langref.png" align="left" height="64" width="64"/>
&nbsp;&nbsp;Wollok Language Reference
</h1>
<br>

This is the Wollok programming language reference guide.

# Table of Contents
1. [Wollok Files](#wollok-files)
1. [Wollok Programs](#wollok-programs)
1. [References: Variables and Constants](#references-variables-and-constants)
1. [Comments](#comments)
1. [Basic Objects](#basic-objects)  
    1. [Numbers](#numbers)
    1. [Booleans](#booleans)
    1. [Strings](#strings)
    1. [Equality](#equality-expressions)
    1. [Comparissons](#comparing-expressions)
1. [User Objects](#user-objects)  
    1. [Named Objects (WKO: Well-Known Objects)](#named-objects-aka-well-known-objects-or-just-wkos)
    1. [Object Literals](#object-literals)
    1. [Methods](#methods) 
    1. [Instance Variables](#instance-variables)  
1. [Messages](#messages)  
    1. [Self](#self)
1. [Polymorphism - Part I: Just Objects](#polymorphism---part-i-just-objects)
1. [If](#if-expression)
1. [Collections](#collections)  
    1. [Sets](#sets)
    1. [Closures](#closures)
    1. [Closures and Collections](#closures-and-collections) 
1. [Classes](#classes)  
    1. [Inheritance](#inheritance)
    1. [Abstract Methods and Classes](#abstract-methods-and-classes)  
    1. [Overriding and Super](#overriding-and-super)
    1. [Constructors](#constructors)  
        1. [Simple Constructor](#simple-constructor) 
        1. [Default Constructor](#default-constructor) 
        1. [Multiple Constructor](#multiple-constructor) 
        1. [Constructor Delegation](#constructor-delegation) 
        1. [No Constructor Inheritance](#no-constructor-inheritance) 
        1. [Constants Initialisation in Constructors](#constants-initialisation-in-constructors) 
    1. [Object Inheritance](#objects-inheritance)  
1. [Polymorphism - Part II: now with Classes](#polymorphism---part-ii)
1. [Modularization](#modularization)  
    1. [Packages](#packages)  
    1. [Imports and Namespaces](#imports-and-namespaces)  
1. [Advanced Features](#advanced-features)
    1. [Mixins](#mixins)
    1. [WollokDocs](#wollokdocs)  
    1. [Exception Handling Mechanism](#exception-handling-mechanism)  
        1. [Throw](#throw)
        1. [Try-Catch](#try-catch) 
        1. [Then Always](#then-always) 
        1. [Multiple Catchs](#multiple-catchs) 
        1. [Default Catch](#default-catch) 
    1. [Operators Overloading](#operators-overloading)  
    1. [Identity vs Equality](#identity-vs-equality)
    1. [Type System](#type-system)

<hr>

# Wollok Files #

Wollok has currently three kinds of files which represents different concepts:

* a **Wollok Program** (.wpgm)
* a **Wollok Library / Module** (.wlk)
* a **Wollok Test** (.wtest)

We will discuss each of them in the following sections

# Wollok Programs #

A program is an executable piece of code that consists of a set of statements (actually expressions) that will be executed one after the other. It can be thought as the "main" entry point to a program in other languages.
Example:

```scala
program helloWorld {
   console.println("Hello World!")
}
```

This program just prints "Hello World!" to the console.
Further sections will explain all parts of the "console.println(...)" expression. For now, you can think of it as if it was an out-of-the-box function available to programs. Or as another instruction.

# References: Variables and Constants #

In Wollok (as in many other languages) there are two types of references: variables and constants.

A **Variable** is a reference whose value can be changed at any time in the code. That's why it's called "variable" :)
Note that here we use the term "change" but applied to the "reference" and not to the pointed object.
What actually changes is the pointer, meaning that now the reference points to another object.

```scala
var age = 10
age = 11
age = age + 1
```

A **Constant** is a reference which is initialized to point to an object, and which cannot be redirected (changed) to point to another object. It's kind of a "constant reference", always pointing to the same object, but it's not a "constant" as meant in some other languages due to the fact that the referenced object might change its own state.

```scala
const adultAge = 21

adultAge = 18  // THIS WON'T COMPILE !
```

# Comments #

There are three kinds of comments: 
* single line comments using a double slash symbol (//)
* multi-line comments starting with /* and ending with */
* wollok-docs comments starting with /** and ending with */. We will see them in a further section

Samples:

```scala
const adultAge = 21   // a single line comment

/*
 multiple lines
 comments
 */
adultAge = 18
```

# Basic objects #

Here we will introduce the basic objects that come out-of-the-box with Wollok.

## Numbers ##

Numbers are immutable objects, but they understand several messages that can return new numbers, like mathematical operations to add, subtract, etc.


```scala
const a = 1
var b = a + 10  // add
b = b - 1       // substract
b = b * 2       // multiply
b = b / 2       // divide
b = b % 2       // module
b = b ** 3      // raised to (3 in this case)
```

In addition, Wollok also supports **postfix operators** as well as the **plus equals** operation (among other variants).
These are all just shortcuts for other expressions (shown here as comments to the right of their respective equivalents).

```scala
b++             // b = b + 1
b--             // b = b - 1

b += 2          // b = b + 2
b -= 1          // b = b - 1
b *= 3          // b = b * 3
b %= 2          // b = b % 2
b /= 2          // b = b / 2
5.between(2, 7) // whether 5 is between 2 and 7 ==> true
3.min(6)        // the smaller of 3 and 6 ==> 3
3.max(6)        // the greater of 3 and 6 ==> 6
(3.1416).truncate(0)  // integer part of 3.1416 ==> 3 -- (3.1416).truncate(2) = 3.14
(3.1416).roundUp(0)   // the smallest integer greater than 3.1416 ==> 4  -- (3.1416).roundUp(2) = 3.15
```

## Booleans ##

There are two boolean objects which are available as literals: "true", and "false".
Again these are immutable objects, but they understand some operations that are evaluated to new boolean values, for example the "and" and "or" operations:


```scala
const fact = true and true
const isTrue = true
const isFalse = false

const willBeFalse = isTrue and isFalse

const willBeTrue = isTrue or isFalse

const willBeTrue = not false
```

There are also special symbols for the three operations which can be used instead, if you find yourself more comfortable with them (coming from languages like C, or java):

* **and**: `a && b`
* **or**: `a || b`
* **not**: `!a`

Furthermore, all equality and comparative operations are evaluated to boolean objects (see further sections).


## Strings ##

Strings can be delimited either with single or double quotes.


```scala
const aString = "hello"
const another = 'world'
```

They are also immutable objects, but support operations which returns new strings, like concatenating them.


```scala
const helloWorld = aString + another + " !"
```

One of the most common problems while working with strings is the representation of a "new line" character or "line separator", given that it changes along with the operative system (OS). In order to get the correct representation in the underlying OS, you can request it to ```console```:

```scala
const article = "This is the title" + console.newline() + "This is a very short article."
```

## Equality Expressions ##

The following expressions are meant to compare objects and are evaluated to boolean values:

```scala
const one = 1
const two = 2

const willBeFalse = (1 == 2)

const willBeTrue = one == 1

const willBeTrue = (1 != 2)
```

* == tells us whether the two objects **are equal**
* != tells us whether the two objects **are NOT equal**

After introducing objects and classes we will revisit the equality concept in further sections.

## Comparing Expressions ##

There are also expressions to compare objects (commonly numbers)


```scala
const willBeTrue = 23 < 24      // lesser than
const willBeTrue = 23 <= 24     // lesser or equals than
const willBeTrue = 24 > 10      // greater than
const willBeTrue = 24 >= 10     // greater or equals than
```
They don't need further explanation.


# User Objects #

Besides the predefined objects that we have seen, being an OOP language means that the programmer should be able to create their own objects.

This can be done in two slightly different ways:
* Object Literals
* Named objects

## Named Objects (a.k.a. "Well-Known Objects" or just "WKOs") ##

There's a special language construction to define an object and assign a global name to it.

```scala
object myObject {
    // code here
}
console.println(myObject)
```

This object will be available from any part of the program with the reference "myObject".

## Object Literals ##
Another option is to use object literals which allow you to create a new object without any global reference to it.
Instead you can assign the resulting object to a new variable (or an existing one).
Therefore having more control on the object's scope.

```scala
const myObject = object {
    // code here
}
console.println(myObject)
```

Of course this is a very silly example, since this object won't understand any message. It's an "empty object".
You will see this in the console:

```
anObject{}
```

## Methods ##

Within the object's braces we can define methods. For example we will represent a Bird


```scala
const aBird = object {
    method fly(meters) {
        return 'flyed ' + meters +  ' meters'
    }
}

const result = aBird.fly(23)
console.println(result)
```

As you can see here methods are defined with the **method** keyword. They can receive parameters, and return a value.
Parameters type are not explicit. In this case, "meters" is the name of the parameter.

Also in case the method returns a value you MUST explicitly write a **return** statement. The only possible exception is the "simple return method" explained in the next section.

### Simple Return Methods ###

There's a shortcut for simple methods which return values.

```scala
const aBird = object {
    method fly(meters) = 'flyed ' + meters +  ' meters'
}
```

Notice that the return keyword is not necessary here. And also there are no curly braces for the method body.
Instead there's a = symbol, which means that the return value will be the evaluation of the right part of the method.

One will probably use this syntax for short methods which compute simple values.


## Instance Variables ##

Our bird doesn't do much so far. We will add "state" to it, in the form of instance variables. And some methods that will mutate that state.

```scala
const aBird = object {
    var energy = 0
    method fly(meters) {
        energy -= 2 + meters
    }
    method eat(grams) {
        energy += grams
    }
}

aBird.fly(23)
aBird.eat(10)
```

Instance references are declared in an object, right before the first method.
As any other references we already saw, it can be either a **var** or a **const** (variable or constant).

**All instance references are only visible to code that's inside this object**. That means its methods.

This is not valid:


```scala
aBird.energy
```

Instead, if you want to access the bird's energy, the object must publish that information via a new method.

```scala
const aBird = object {
    var energy = 0
    method fly(meters) {
        energy -= 2 + meters
    }
    method eat(grams) {
        energy += grams
    }
    method getEnergy() {
        return energy
    }
}

aBird.fly(23)
aBird.eat(10)

const e = aBird.getEnergy()
```

# Messages #

OOP means objects, but most important, it means **messages**!
So, in Wollok (almost) everything you do is sending messages to objects.

We saw that those objects could have methods within them that will get executed if someone sends a message to them.

The syntax to send messages is always:


```scala
object.messageName(param1, param2, ...)
```

ALWAYS!

You **CANNOT** write any of these variants:

```scala
messageName(param1, param2)        // missing the object (receiver of the message)
object.messageName                 // missing parenthesis
```

## Self ##

So, what if I'm in an object and I want to send a message to myself to reuse an already existent method ?

Then there's a special keyword to refer to yourself (object) called **self**

```scala
const aBird = object {
    var energy = 0
    method fly(meters) {
        energy -= 2 + meters
    }
    method eat(grams) {
        energy += grams
    }
    method getEnergy() {
        return energy
    }
    // NEW ONE 
    method flyAndThenEat(metersToFly, gramsToEat) {
        self.fly(metersToFly)
        self.eat(gramsToEat)
    }
}

aBird.flyAndThenEat(23, 10)
```

# Polymorphism - Part I (just objects) #

Polymorphism, the most important concept in OOP, is the ability that allows an object to be interchangeable with another, without affecting a third that uses them.

Wollok shares some characteristics with dynamically typed languages (since it has a [Pluggable Type System](http://bracha.org/pluggableTypesPosition.pdf)).
This means that if two objects understand the same messages, then nothing else is needed, they can be used polymorphically by a third that sends those messages.

For example, we'll change our Bird in order to add the concept of Food, instead of just eating some grams (number).

```scala
const aBird = object {
    var energy = 0
    method fly(meters) {
        energy -= 2 + meters
    }
    method eat(food) {
        energy += food.energy()     // a "food" is something that provides "energy"
    }
    method getEnergy() {
        return energy
    }
}
```
Here a "food" then is any object that understands the "energy" message, and returns a number (the amount of energy it provides)

Then we can have two other objects representing specific food:

```scala
const birdseed = object {
    method energy() = 5
}

const rice = object {
    method energy() = 2
}

aBird.eat(birdseed)
aBird.eat(rice)
```

Here both "birdseed" and "rice" are polymorphic in respect to "aBird"

# If Expression

The **if** expression allows you evaluate a boolean condition and then perform different actions for positive and negative cases.

For example:

```scala
if (self.isRaining()) {
    self.goHome(self.getCar())
}
else 
    self.goHome(self.getByke())
```

This is what we call using the "if" as a control flow.

Besides this usage, in Wollok the "if" is not actually a statement (controlling the flow), but an expression. That means that it "returns" a value (it is evaluated to a value).

So you can also use it in this other form:

```scala
const transport = if (self.isRaining()) self.getCar() else self.getByke()
self.goHome(transport)
```

# Collections #

Wollok provides literals for **List objects**.
The syntax is:

```scala
[ element1, element2, ..., elementN ]
```

For example

```scala
const numbers = [2, 23, 25]

numbers.size() == 3   // true !
numbers.contains(23)  // true !

numbers.remove(23)
numbers.size() == 2   // true

numbers.clear()
numbers.size() == 0   // true
numbers.isEmpty()     // true
```

Lists are just objects again, and therefore you interact with them through messages.
Here we have seen just simple ones.

Then most powerful messages require special objects as parameters: Closures !

## Sets

There's also a literal for **Set** objects. Which is an Collection without duplicates.
The syntax is

```scala
const numbers = #{2, 23, 25}
```

Notice that it uses _curly braces_

## Closures ##

For a detailed explanation see [wikipedia](http://en.wikipedia.org/wiki/Closure_(computer_programming)).
Here, we'll just say that a closure is an object that represents a "piece of code" that can be manipulated. Specifically, it can be executed at any time, as many times as you want.
But they can also be assigned to references, be passed as parameters, as well as be returned. After all, they are objects!

Wollok support closures through literals.

Here is an example:

```scala
const helloWorld = { "helloWorld" }
const response = helloWorld.apply()     

response == "helloWorld"      // true
```

The first line defines a closure that doesn't take any parameter. The second one executes the closure sending the message **apply()** to it.

Here is one that receives a single parameter:

```scala
const helloWorld = { to => "hello " + to }
const response = helloWorld.apply("world")

response == "hello world"      // true
```
So, the syntax for closures is:

```groovy
{param1, param2, ..., paramN => /* code */ }
```

There's a special fact about closures: they have access to their own parameters, but also to any other reference that was available at the place where it was defined.
This makes them really powerful.
Here is a very simple example:

```scala
var to = "world"
const helloWorld = { "hello " + to }
            
helloWorld.apply() == "hello world"      // true
        
to = "someone else"
helloWorld.apply() == "hello someone else"      // true
```

Check how the code within the closure can access the "to" variable that is defined outside of it, in the program.

If we change this reference, then executing the closure will have another effect (as shown in the second call)


## Closures and Collections ##

As many other languages, Wollok provides rich collection messages to operate with them. Instead of writing code that indexes or iterates elements every time, a series of methods that perform common tasks is delivered out-of-the-box. Many of those predefined messages receive closures as parameters.

For example, in order to perform a given logic on each element, the **forEach** method is available:

```scala
const numbers = [23, 2, 1]

var sum = 0
numbers.forEach({ n => sum += n })
            
sum == 26      // true
```

There's also a short way to write it in case you are sending a message with a single parameter being a closure, you can avoid the parenthesis.
So the previous example would be:

```scala
numbers.forEach { n => sum += n }
```

To evaluate if all elements comply a given condition, there's a "forAll"


```scala
const numbers = [23, 2, 1]
            
var allPositives = numbers.forAll { n => n > 0 }

allPositives == true      // true
```

**filter** returns a new collection which only has the elements that are evaluated to true.

```scala
const numbers = [23, 2, 1]
            
var greaterThanOneElements = numbers.filter { n => n > 1 }
    
greaterThanOneElements.size() == 2      // TRUE

```

**map** returns a new collection whose elements are the result of performing a *transformation* on each element of the original collection through the given closure.

```scala
const numbers = [10, 20, 30]
            
var halfs = numbers.map { n => n / 2 }
    
halfs.contains(5)       // TRUE
halfs.contains(10)      // TRUE
halfs.contains(15)      // TRUE
```

Have in mind that *it doesn't actually transform the element*, but obtains a new object as a result of applying the closure to it.

# Classes #

Classes share some characteristics with object literals: they define instance variables, as well as methods.
But they are not expressions (cannot be assigned to variables).
Instead they are just like **definitions**.

Here's a sample:


```scala
class Bird {
    var energy = 0

    method fly(meters) {
        energy -= 2 + meters
    }
    method eat(food) {
        energy += food.energy
    }
    method getEnergy() {
        return energy
    }
}
```
Then you create new objects by instantiating the class


```scala
const aBird = new Bird()
aBird.fly(23)
```

## Inheritance ##

Classes might subclass from another class. That will inherit instance variables as well as methods.

Instance variables are visible from the subclass. Think of it like if they were "protected" in java.

Methods in Wollok are always "public".

Example:

```scala
class SwimmingBird inherits Bird {

   method swim(meters) {
       energy -= meters * 1.2
   }
}

const aBird = new SwimmingBird()
aBird.swim(10)
aBird.fly(50)
```

Subclasses can add new methods and instance variables, and override existing methods (check on section "Overriding and super").

## Abstract methods and classes ##

An **abstract method** is one that declares its name and parameters, but that it won't provide any implementation.
It will be up to the subclasses of this class to implement this method by **overridding** (see next section).

In Wollok there's no **abstract** keyword, just a method without a body.


```scala
class MyClass {

   method anAbstractMethod(param)

}
```

A class with at least one abstract method is considered to be an **abstract class**.
Again, there's no **abstract** keyword to mark the class as being abstract.
It's all inferred.

## Overriding and super ##

Subclasses might override already defined methods in any superclass. For this you will need to explicitly use the "override" keyword before the method definition.

```scala
class EfficientBird inherits Bird {

    override method fly(meters) {
        energy -= meters / 2
    }
}
```

If while overriding you also need to invoke the original method, then you can use the **super** keyword:

```scala
class Bird {
    var energy = 0

    method fly(meters) {
        energy -= 2 + meters
    }
    method eat(food) {
        energy += self.energyGain(food)
    }

    method energyGain(food) {
        return food.getEnergy()
    }

}

class EfficientBird inherits Bird {

    override method energyGain(food) {
        super(food) / 2
    }
}
```

Notice that you don't need to specify the method name. In Wollok you can only invoke the overridden method using **super**.

You cannot use super to call any other method in the superclass.

This keeps the language and programs easier.

Also notice that super can only be used within an overriding method.

## Constructors ##

A constructor is kind of a special method that is called in order to create and initialise a new instance of a class.
Wollok allows:

* **Multiple constructors:** meaning that you can provide more than one constructor with different numbers of arguments.
* **Constructors delegation**: meaning that one constructor may invoke another one to reuse code.
* **Implicit constructors and delegation**: for non-arguments constructors.

We will see this in details in following sections

### Simple Constructor ###

Here's a sample Point class with a constructor

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
}
```

Now you can do this:
```scala
   const p = new Point(2, 1)
```

### Default Constructor ###

As you might already notice a class that doesn't define any constructor gets a no-arguments constructor for free

This

```scala
class Point {
}
```

Is the same as

```scala
class Point {
    constructor() {}
}
```

That's why in both cases this works fine
```scala
   const p = new Point()
```

Once you specify one constructor then you are on your own, and there are no implicit constructors anymore.

### Multiple Constructor ###

Now you can have as many constructors as you want. Just that you won't be able to define two constructors with the same number of arguments !

Let's add a new constructor to our point

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
    constructor(p) {
        x = p.getX()
        y = p.getY()
    }
    method getX() { return x }
    method getY() { return y }
}
```

Now we can do:

```scala
   var p1 = new Point(1,2)
   var p2 = new Point(p1)
```

### Constructor Delegation ###

Now as you might have noticed the previous example with two constructor has a small amount of repeated code. In both constructors we are changing references of our instance variables.
It's always a good practice to avoid repeated code, because it means we abstract away a piece of functionality that we will reuse following the D.R.Y. principle.

So for that, Wollok provides a mechanism to reuse this code because a given constructor might "call" or delegate **first** to another constructor.

There are two types of constructor delegation or situations:

* **Delegating to another constructor in the same class**
* **Delegating to constructor in the superclass**

For our Point class we will see the first one:

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
    constructor(p) = self(p.getX(), p.getY()) {
       // some behaviour here
    }
    method getX() { return x }
    method getY() { return y }
}
```

Notice the syntax here:

```scala
   constructor(...params...) =  self(...paramsToOther...) {
      body
   }
```

This means that the body of your constructor will be executed AFTER the execution of the delegated constructor.
So delegation is the first thing that takes place.


The second case is delegating to a superclass constructor.

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
}

class Circle inherits Point {
    var r
    constructor(_x, _y_, _r) = super(_x, _y) {
        r = _r
    }
}
```

Notice that the delegation is defined through the usage of the **super** keyword.
This is not exactly the same as a super method invocation, but similar.

Sometimes you are forced to explicitly declare a superclass constructor delegation if the superclass doesn't have a no-arguments constructor.

### No Constructor Inheritance ###

Although we have said that constructors are kind of special methods, they don't share all the characteristics of methods.
For example constructors cannot be inherited. Each class defines its own constructors, which in turn can delegate to a superclass constructor (as we have seen before). But they are not automatically inherited.

### Constants Initialisation in Constructors ###

We have already seen that there is a special type of reference which is immutable: the **constants**.
There's a special case when working with classes where you want to declare a constant reference that won't be assigned in that same line, but afterwards. That *doesn't mean anywhere*. These are "instance constants".
This constants are references that are **assigned at construction time and cannot be modified after that**.
Here is an example:

```scala
class ImmutablePoint {
    const x
    const y
    
    constructor(_x, _y) {
        x = _x
        y = _y
    }
}
```

It could sound weird because we are assigning a constant, but this is completely valid.
Once assigned, the reference cannot be changed anymore. This gives flexibility avoiding boilerplate code (and state).

### Objects Inheritance ###

Well-known named objects can be defined based on an already defined class.

```scala
object lassie inherits Dog {
   // ...
}
```

This could be a natural place for migrating a program which initially started as objects and then part of the behavior was moved to classes in order to reuse code. Sometimes you want to keep using WKO's while combining them with classes.

In the special case where the class you want to inherit from defines constructors, the object must call that class constructor explicitly. Here is the syntax to do that:

```scala
object lassie inherits Dog("Lassie", 3) {
   // ...
}

class Dog {
   constructor(name, age) {
      // ...
   }
}
```

# Polymorphism - Part II #

Wollok combines objects and classes in a single language, and therefore in programs.
Polymorphism with classes work in the exact same way as when you only have objects. It doesn't matter if the object is an instance of a class or a WKO or even an anonymous one, they can potentially be used polymorphically.

**Two objects can be used polymorphically if they understand a common set of messages.**

```scala
package birds {

   class Bird {
        method fly(to) {
             // ...
        }
   }

   class Plane {
        method fly(to) {
            // ...
        }
   }

}
```

Then:

```scala
    const plane = new Plane()
    const bird = new Bird()

    const flyingObjects = [ plane, bird ]

    flyingObjects.forEach { o => o.fly() }
```

There's no need to have a common base class for objects to be treated polymorphically. As previously stated, the only important thing is the set of messages the object understands. *Forget about the class, it might not even have one!*
Both classes Plane and Bird could be part of different hierarchies, but their instances would still be polymorphic for some other object that wants to make them fly.

Some languages like Java force you to define a type, an interface, to make them polymorphic. Wollok doesn't.
Still our compiler is able to check whether the message being sent is valid.

Now, besides classes, there could be polymorphism between classes and objects.

Examples

```scala
    const boomerang = object {
          method fly(to) {
               // ... it goes, and then it comes back here
          }
    }

    const flyingObjects = [ plane, bird, boomerang ]

    flyingObjects.forEach { o |  o.fly() }

```

# Modularization #

Wollok provides a set of rules and language constructions in order to promote modularization. That is, separating classes and programs in order to be reused in other programs / libraries.

## Packages ##

A package is logical unit that groups together several classes and/or WKOs.

```scala
package birds {

   class Bird {
        // ...
   }

   class SwimmingBird inherits Bird {
        // ...
   }

   // ...

}
```

A single Wollok file can actually define more than one package


```scala
package birds {
    // ...
}

package trainers {
    // ...
}

package environment {
    // ...
}
```

The package has a name (here "birds", "trainers", etc). Every class defined within it will inherit the package name as a prefix.

That introduces what is called a class **fully qualified name** (or FQN).
Example:

```scala
package birds {

   class SwimmingBird {
       // ...
   }

}
```

This class FQN is: **birds.SwimmingBird**

While coding within this package, you can refer classes with their **shortname** (here SwimmingBird).

To refer to a class from outside of the package you MUST use the FQN. 

To avoid writing FQN names all over the code, you can use imports as described in the next section.


## Libraries vs Programs ##

// TODO

## Imports and Namespaces ##

In order to avoid name clashes with the classes, mixins and objects, Wollok implements a powerful namespace and import scheme.

As this language is intended to be used by learners, the mechanism is based in convention over configuration. So, many of these things occurs _automatically_, even though the behavior is easy to understand.

The rules are the following:

- Each entity (Object, Mixin or Class) in the language is member of a package.
- Each file describes a new package.
- Entities in the same package do not need to import anything from the same package.
- All basic objects in the language are auto-imported (all the objects, classes and mixins in the packages wollok.lang and wollok.lib).
- The files that are inside a directory have a parent package named as their parent directory.
- You can import entities with the **import** keyword, by the full name or using wildcards.
- You can create a sub-package inside a file using the keyword **package**.

Let's see some examples to clarify everything.

The basic example is when you have the following file structure:

- src
  - model.wlk

```scala
     object pepita {....}
     object alpiste {....}
```

In this example both objects can access each other, as both of them are in the same namespace (called model).
If you execute this with the REPL, you can see that you can send messages to both objects, just using its name. 

Let's pass to a more complex example:

* src
  * model.wlk

```scala
     object pepita {....}
     object alpiste {....}
```

  * aProgram.pgm

```scala
     import model.pepita

     program "aProgram" {
        pepita.fly(20)
     }
```

Here, in order of using the objects in the other package, you have to import them. As you see, the program and the objects are in different packages. If I want to use the _alpiste_ object also, I will have to add the line ```import model.alpiste``` or change the existing import line with ```import model.*```, which will import all the entities in the _model_ package.

Let's see an even more complex example:

* src
  * model/
     * trainers.wlk

```scala
         class Trainer { ... }
```

  * model.wlk

```scala
     object pepita {....}
     object alpiste {....}
```

  * aProgram.pgm

```scala
     import model.pepita
     import model.trainers.Trainer

     program "aProgram" {
        pepita.fly(20)
        const t = new Trainer()
        t.train(pepita)
     }
```

In this example we are adding two concepts, first the _Trainer_ class is inside its package named _model.trainers_, this name is formed by the name of the file and the directories through the root of the project (in this case only the directory _model_, but it can have many levels).

Second, we have imported an entity with the use of its fully-qualified-name (or FQN, for short), all the imports in Wollok are always using the fully-qualified-name. In this case we can see the _model.trainers.Trainer_ is the fully qualified name of _Trainer_. Once we imported it, we can only use the name (the last segment of the FQN).

Something interesting is that we can have entities inside the package _model_ and subpackages, see how the package _model_ is built up of the entities inside _model.wlk_ and the package inside _model/trainers.wlk_.

There is an alternative way of writing this solution, with the same power, but using less files (you can choose how to organize your code).

* src
  * model.wlk

```scala
     object pepita {....}
     object alpiste {....}
    
     package trainers {
         class Trainer { ... }
     }
```

  * aProgram.pgm

```scala
     import model.pepita
     import model.trainers.Trainer

     program "aProgram" {
        pepita.fly(20)
        const t = new Trainer()
        t.train(pepita)
     }
```

Here we are using the keyword **package** to generate a subpackage in the same file, this snippet of code has exactly the same behavior as the previous one, but in this case having only a file for our model. As said before, you can choose how you organize your code. You can always change from one way to the other.

# Advanced Features #

## Mixins ##

A mixin is a new construction similar to a class in the fact that it defines
behavior (methods) as well as state.
But it is intented to provide an specific "abstract" functionality
that can be **mixed** into any class or object. Therefore allows better reusing
capabilities outside of class based inheritance.

They are used to model some charateristics of objects independent from a class hierarhcy.
Some features of a mixin:

* it **cannot be instantiated** (only classes)
* it **cannot define constructors** (this might change in the future?)
* gets linearized into the class hierarchy to avoid the diamond issue
* **currently doesn't support inheriting from another mixin/class**

Some other technical details

* It is statically mixed
* it cannot be de-mixed from a class

### Simplest mixin ###

Here is the simplest mixin providing a new method

```scala
mixin Flies {
	method fly() {
		console.println("I'm flying")
	}
}
```
Then it can be mixed in a class

```scala
class Bird mixed with Flies {}
```

And later used in a program/test/library

```scala
program t {
	val b = new Bird()
	b.fly()
}
```


### Mixin with state ###

Besides behavior (methods), a mixing can define instance variables.

```scala
mixin Walks {
	var walkedDistance = 0
	method walk(distance) {
		walkedDistance += distance
	}
	method walkedDistance() = walkedDistance
}
class WalkingBird mixed with Walks {}
```

Then used

```scala
val b = new WalkingBird()
b.walk(10)
assert.equals(10, b.walkedDistance())
```

### Instance Variables Access ###

Instance variables declared by a mixin can be accessed from the the class it is mixed in into.

```scala
class WalkingBird mixed with Walks {
       method resetWalkingDistance() {
               walkedDistance = 0     // variable defined in the mixin
       }
}
```

### Mixing multiples mixins ###

A class can mix more than one mixin.

```scala
mixin M1 {}
mixin M2 {}
		
class C mixed with M1 and M2 {
}
```

The list of mixins can be separated either with "and" or with a comma character.

```scala
class C mixed with M1, M2  {}
```

### Abstract Mixins ###

A mixin can be abstract if it calls a method which has no implementation.
In this case this can be seen as a **restriction**. Meaning that the mixin
will require someone to actually implement that method.
It could be the class you are mixing it into, or other mixins (we will see that later)

Here is an abstract Mixin providing **flying** capabilities

```scala
mixin Flying {
	var fliedMeters = 0
	method fly(meters) {
		self.reduceEnergy(meters)
		fliedMeters += meters
	}
	method fliedMeters() = fliedMeters
}
```

The method that it requires is **reduceEnergy(meters)**.

When executed "self.reduceEnergy()" will send a message to the current object (self). This means that the method can be anywhere in the object's hierarchy and will be looked up for.

There are 3 possible cases:

#### Method implemented in the class ####

In this case the class provides the implementation for the required method.

```scala
class BirdWithEnergyThatFlies mixed with Flying {
	var energy = 100
	method energy() = energy
	method reduceEnergy(amount) {
		energy -= amount
	}
}
```

#### Method implemented in a superclass ####

```scala
class Energy {
	var energy = 100
	method energy() = energy
	method reduceEnergy(amount) {
		energy -= amount
	}
}

class BirdWithEnergyThatFlies inherits Energy mixed with Flying {
}
```

The required method by the mixins is not implemented in the class we are mixing it into
but in its superclass.
Here we can see that the new method lookup doesn't affect regular class-based inheritance.

#### Method defined in another mixin ####

It could be in a new mixin (notice that we converted the Energy **class** into
a **mixin**)

```scala
mixin Energy {
	var energy = 100
	method energy() = energy
	method reduceEnergy(amount) {
		energy -= amount
	}
}
```

And then used

```scala
class BirdWithEnergyThatFlies mixed with Energy, Flying {}
```

In this case Flying mixin requires **reduceEnergy** method which is not implemented
in the class, neither in its superclasses but in another mixin also that is currently being mixed.

The mixin order in this case is not relevant, since sending a message to this starts a new method lookup that starts bottom-up from the object's concrete type.
__We will see later that the declaration's order indeed is important for method look up in other cases__

### Linearization ###

Mixins are hooked up into the class hierarchy between classes following a linearization algorithm __(This is basically the same way Scala traits/mixins works)__
This mechanism makes sure that there are no complex hierarchy graphs. It all ends up being a linear relation between classes and mixins.
So the hierarchy is a simple List and the method and variables lookup mechanism only has an predictable flow up the chain with a simple step and not a split decision to take.

Here are sample linearizations

```scala
mixin M1 {
}
class A {}

class B inherits A mixed with M1 {}
```

B's hierarchy ends like this

```bash
B -> M1 -> A
```

If we add a new mixin:

```scala
class B inherits A mixed with M1, M2 {}
```

The new hierarchy would be

```bash
B -> M2 -> M1 -> A
```

**Notice here that the declaration order DOES MATTER**.
Mixins on the right side are lower in the hierarchy. Meaning that they have precedence over the ones on the left

Having mixins up in the class hierarchy doesn't complicate this at all, since each classes mixins are resolved in the same way

```scala
mixin M1 { ... }
mixin M2 { ... }
mixin M3 { ... }
mixin M4 { ... }
mixin M5 { ... }
mixin M6 { ... }

class A { ... }
class B inherits A mixed with M1, with M2 { ... }
class C inherits B mixed with M3 { ... }
class D inherits C mixed with M4, M5, M6 { ... }
```

D's inheritance chain is

```bash
D -> M6 -> M5 -> M4 -> C -> M3 -> B -> M2 -> M1 -> A
```

This was resolved class by class

### Method Override ###

Understanding linearization is important to implement modular mixins which collaborate between each others without knowing themselves.
We have seem some simple cases already.
Here we present more complex cases where a class/mixin overrides a method

#### Class overrides mixins method ####

The class on which we are mixing the mixins has the biggest priority since it is the lower end of the hierarchy, that means that it can override a method defined in a mixin.
In the same way that a class can override a method defined in a super class

Given this mixin

```scala
mixin Energy {
	var energy = 100
	method reduceEnergy(amount) { energy -= amount }
	method energy() = energy
}
``` 

A class can be mixed and override the "reduceEnergy(amount)" method

```scala
class Bird mixed with Energy {
	override method reduceEnergy(amount) { 
		// does nothing
	}
}
```

#### Super call (in a class overriding a mixin method) ####

As with any method overriding a method in a super class its body can use the **super** keyword to execute the original method being overriding.

```scala
	class Bird mixed with Energy {
		override method reduceEnergy(amount) { 
			super(1)
		}
	}
```

#### Super call in mixin ####

This is the most complex case and also the most flexible.
A mixin can override a method and also use the original implementation.
For that case the super works like a **dynamic dispatch** (just "like").
Because looking at the mixin code that calls super() is not enough to statically understand which method will be called by that "super" call.
For example:

```scala
mixin M1 {
	method doFoo(chain) { super(chain + " > M1") }
}
```

We don't know what "super" means in this context.
But we do know once the mixin is combined (statically) into a class

Given this class

```scala
class C1 {
	var foo = ""
	method doFoo(chain) { foo = chain + " > C1" }
	method foo() = foo
}
```

And this mixup

```scala
class C2 inherits C1 mixed with M1 { }
```

We now know that the "super" call in the mixin M1 will call the "doFoo(chain)" method defined in the C1 class (C2's super class).
But this is in this particular case. If we mix M1 in another class or with another mixins, then the super() could invoke other method.

```bash
The way to understand this is that the linear hierarchy is built as we have seen already, and then "super" means to find the first method implementation right up the current mixin position
```

Here is the sample

```bash
C2 -> M1 (doFoo()) -> C2 (doFoo())
         super --------->
```

### Stackable Mixin Pattern ###

This means that the original method being overriden can be actually defined in another Mixin up in the hierarchy. And that mixin in turn could be overriding just to call super.
So is like every mixin "decorates" or alters the original method behavior by reusing it, getting itself in the middle.

This is called the "stackable mixin pattern", because mixins can be combined by stacking them much like a chain of responsibilities pattern.

Here is the same example as before but with a couple more mixins

```scala
mixin M1 {
	method doFoo(chain) { super(chain + " > M1") }
}
		
mixin M2 {
	method doFoo(chain) { super(chain + "> M2") }
}

mixin M3 {
	method doFoo(chain) { super(chain + "> M3") }
}
```

And then the classes 

```scala
class C1 {
	var foo = ""
	method doFoo(chain) { foo = chain + " > C1" }
	method foo() = foo
}
		
class C2 inherits C1 mixed with M1, M2, M3 {
}
```

Executing this code

```scala
	val c = new C2()
	c.doFoo("Test ")
	console.println(c.foo())
```

Prints the following

```bash
Test > M3 > M2 > M1 > C1 
```

Which is basically the linearized hierarchy

### Object's Mixins ###

Named objects (WKOs) can also be combined with mixins

```scala
mixin Flies {
	var times = 0
	method fly() {
		times = 1
	}
	method times() = times
}
		
object pepita mixed with Flies {}
```

In this case the inheritance chain will be:

```bash
pepita -> Flies -> wollok.lang.Object
```

Again here the same rules, the object being defined 'pepita' has
priority since it is the lower end of the hierarchy, so it can override any method.

This also can be combined with class inheritance

```scala
object pepita inherits Animal with Flies {}
```


### Mixins at instantiation time ###
__(Since 1.6)__

Mixins can be used at the time you instantiate a new object.
This allows more flexibility since you don't need to create a new class
just to combine an existing class with a mixin which will multiply
a lot of classes.

Here is an example.
Given the following class and mixin

```scala
mixin Energy {
    var energy = 100
    method energy() = energy
}
class Warrior {
    
}
```

Instead of creating a new class to combine like

```scala
class WarriorWithEnergy inherits Warrior mixed with Energy {}
```

Whe can combine it directly while instantiating:

```scala
program t {
    const w = new Warrior() with Energy
    assert.equals(100, w.energy())
}
```

All same rules apply to mixins combinations.
Here is a more complex example

```scala
mixin Energy {
    var energy = 100
    method energy() = energy
    method energy(e) { energy = e }
}
mixin GetsHurt {
    method receiveDamage(amount) {
        self.energy(self.energy() - amount)
    }
    method energy()
    method energy(newEnergy)
}

mixin Attacks {
    var power = 10
    method attack(other) {
        other.receiveDamage(power)
        self.energy(self.energy() - 1)
    }
    method power() = power
    method power(p) { power = p }
    
    method energy()
    method energy(newEnergy)
}
class Warrior {
    
}
```

Later used

```scala
program t {
    const warrior1 = new Warrior() with Attacks with Energy with GetsHurt
    assert.equals(100, warrior1.energy())
    
    const warrior2 = new Warrior() with Attacks with Energy with GetsHurt
    assert.equals(100, warrior2.energy())
    
    warrior1.attack(warrior2)
    
    assert.equals(90, warrior2.energy())
    assert.equals(99, warrior1.energy())
}
```


### Limitations ###

#### Mixin inheritance ####

Current mixins implementation doesn't support a mixin extending another mixing or class.
That's a difference from Scala mixins.

#### Native mixins ####

It is not clear how mixins can be combined with native classes :P

#### Anonymous classes ####

Wollok doesn't provide anonymous classes so it is currently not possible to
combine mixins with a class at instantiation time **and override behavior in place**

**THIS CANNOT BE DONE** you cannot provide a body with content when instantiating.

```scala
const pepitaFliesDouble = new Animal mixed with Flies {
    override method fly() {
        super()
        super()
    }
}
    
```




## Type System ##

Wollok Type System is an optional feature. Meaning that it can be enabled/disabled.
The other main objective of the type system is to avoid explicit type information, since for starting developers that would mean a new concept to explain/understand.
So types should be introduced gradually.
This is a big challenge.

### Type System - Part I #

Wollok type system has a lot of predefined and user object references: numbers, strings, booleans, lists & sets, closures, etc. This makes very easy to start object interaction.


### Type System - Part II #

Our type system also allows you to combine classes with objects, and still check for message sending and types compatibility in assignments.
All of this without type annotations (you don't need to specify types for parameters or variables/values).

For example (in Wollok this would be actually implemented in different files, since you cannot define classes within a program, you are forced to split them from the program. But here it allows us to see it all together)

```scala
   class Bird {
       method fly() { ... }
       method eat() { ... }
   }

   class SwimmingBird inherits Bird {
       method swimg() { ... }
   }

   const bird = new Bird()
   const duck = new SwimmingBird()

   class Superman() {
       method fly() { ... }
       method throwLaserFromEyes() { ... }
   }

  var flier = bird
  flier = new Superman()
```

This are the inferred types:

* bird : types to **Bird**
* duck : types to **SwimmingBird**
* flier : types to **{ fly() }**, meaning "any object that understands the message fly with no parameters". This is basically the common messages present both in Bird and Superman classes. The type system infers this because our reference "flier" is being assigned to "bird" and "new Superman()" in our program. Then, sending any message besides "fly()" will end up in a compilation error.

This will compile

```scala
flier.fly()
```

While this won't compile

```scala
flier.eat()
// or
flier. throwLaserFromEyes()
```

And this compiles fine:

```scala
flier = object {
    method fly() { ... }
    method anotherMethod() { ... }
}
```

Since the object complies with the structural type { fly() }

## WollokDocs ##

Wollok has a special comment syntax for attaching documentation data to different elements of the language. 

For example classes: 

```scala
/**
 * A bird knows how to fly and eat. 
 * It also has energy. 
 *
 * @author jfernandes
 */
class Bird {
   // ...
}
```

Also methods and instance references can have documentation in this form.
This allows the IDE to present more information on tooltips, and other visual parts.


## Exception Handling Mechanism ##

Woolly provides a quite standard exception mechanism similar to those in Java or Python.
An exception is an object that represents condition for which a piece of code cannot continue executing, therefore it **raises an exception (by throwing one of this objects)**.
Eventually other part of the code could be interested in handling this kind of condition in order to recover, retry, workaround it, etc.

So this are the two basic operations one can do with exceptions:

* **throw**: throws an exception object up the stack trace until someone will catch it (next)
* **catch**: gather an exception that was being thrown up the stack, so you can have code to handle it.

### Throw ###

Here's a sample code for throw statement

```scala
class MyException inherits wollok.lang.Exception {}
class A {
    method m1() { 
        throw new MyException()
    }
}
```

Here method m1() always throw a new exception instance of MyException.
Notices that you cannot throw any object. They must be instances of a **wollok.lang.Exception* subclass.


### Try-Catch ###

Here is a sample code to catch an exception:

```scala
try {
    a.m1()
    assert.fail("Should have thrown exception")
}   
catch e {
    // ok !
    assert.equals("hello you see", e.getMessage())
}
```
In this case we don't mind the exception type. So we just declare a name for the exception.
It will catch ANY exception.

If you want to catch a particular exception you can specify its type like the following example:

```scala
program p {
    const a = new A()
    var counter = 0

    try {
        a.m1()
        counter = counter + 1
    }
    catch e : MyException {
        console.println("Exception raised!") // OK!
        e.printStackTrace()
    }
}
```

This program catches any MyException raised by the code inside the **try** block.
(NOTE: the code within the catch here could actually be considered a 'bad practice', depending on the context of the program. One should be very careful when writing catch code that just logs the error.)

### Then Always ###

Besides the "catch" block a try could have an "always" block whose code will always be executed no matter if there was or wasn't any exception thrown.

```scala
try {
    a.m1()
}
catch e : MyException
    console.println("Exception raised!") // OK!
then always
    counter = counter + 1
}
```

### Multiple Catch's ###

A try block can have more than one catch, in case you need to handle different types of exception in different ways:

```scala
try 
    a.m1()
catch e : MySubclassException
    result = 3
catch e : MyException
    result = 2
```

In this case the matching will evaluate the catches top-down. Once it founds a catch that matches it will execute that one, and no further catches.

This means that you are forced to declare the most specific catches at the top, followed by more generic catches.

For example given the following exception hierarchy:

```scala
class AException inherits wollok.lang.Exception {  
    constructor(m) = super(m) 
}
class BException inherits AException {  
    constructor(m) = super(m) 
}
class CException inherits wollok.lang.Exception {  
    constructor(m) = super(m) 
}
```

You must write catches in the following order so they don't hide each other

```scala
try {
    a.m1()
    assert.fail("Should have thrown exception")
}   
catch e : CException {
    // something
}
catch e : BException {
    // something
}
catch e : CException {
    // something
}
```


### Default Catch ###

You can combine catches with types with a single "non-typed" catch, that MUST be the last one.

```scala
program p { 
    const a = new A()
    
    try {
        a.m1()
        assert.fail("Should have thrown exception")
    }   
    catch e : BException {
        // something
    }
    catch e : AException {
        // something
    }
    catch e {
        // something
    }
}
```

This is because ase we said not declaring a particular exception means "any exception".
As it is the most abstract case, it must only appear as the last case.


## Operators Overloading ##

// TODO

## Identity vs Equality ##

Wollok follows equality and identity conventions from Java & Smalltalk. That means, by default, two objects are equal if they are the same object:

```scala
var pepita = new Bird()
const friend = pepita
friend == pepita   ==> true, they are the same object
```

But equality can be overriden. For example, two strings are equal if they have the same characters:

```scala
var aString = "hello"
var anotherString = "hello"
aString == anotherString ==> true, they have the same internal state
```

== operator and equals message are synonyms:

```scala
var aString = "hello"
var anotherString = "hello"
aString.equals(anotherString) ==> also true
```

If you want to know whether two references point to the same object, you should use === operator:

```scala
var aString = "hello"
var anotherString = "hello"
aString === anotherString ==> false, they do not point to same object
anotherString = aString
aString === anotherString ==> true, now they do
```

In general, numbers, strings, booleans, and [value objects](https://en.wikipedia.org/wiki/Value_object) (objects that represents values) override == operator based on their internal state.

For further information see Wollok paper explaining [Equality & Identity](https://docs.google.com/document/d/156PsLi7v5LPFJ5oVy6SPwH8cQRZaBqJh-aosZjUbE4s/edit#heading=h.hryrt6t60c2h) among other concepts.
