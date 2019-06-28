---
layout: null
---

## Index ##

1. Advanced Features
    1. <a href="#mixins" class="wollokLink">Mixins</a>
    1. <a href="#wollokdocs" class="wollokLink">Wollokdocs</a>  
    1. <a href="#exception-handling-mechanism" class="wollokLink">Exception handling mechanism</a>
        1. <a href="#throw" class="wollokLink">Throw</a>
        1. <a href="#try-catch" class="wollokLink">Try Catch</a> 
        1. <a href="#then-always" class="wollokLink">Then Always</a> 
        1. <a href="#multiple-catchs" class="Multiple catchs">Throw</a> 
        1. <a href="#default-catch" class="wollokLink">Default catch</a> 
    1. <a href="#operators-overloading" class="wollokLink">Operators overloading</a>  
    1. <a href="#identity-vs-equality" class="wollokLink">Identity vs Equality</a>
    1. <a href="#type-system" class="wollokLink">Type system</a>

___


# Advanced Features #

## Mixins ##

A mixin is a new construction similar to a class in the fact that it defines
behavior (methods) as well as state.
But it is intented to provide an specific "abstract" functionality
that can be **mixed** into any class or object. Therefore allows better reusing
capabilities outside of class based inheritance.

They are used to model some charateristics of objects independent from a class hierarchy.
Some features of a mixin:

* it **cannot be instantiated** (only classes)
* it **cannot define constructors** (this might change in the future?)
* gets linearized into the class hierarchy to avoid the [diamond issue](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem)
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
	const b = new Bird()
	b.fly()
}
```


### Mixin with state ###

Besides behavior (methods), a mixin can define instance variables.

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
const b = new WalkingBird()
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
C2 -> M1 (doFoo()) -> C1 (doFoo())
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
	const c = new C2()
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

We can combine it directly while instantiating:

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

Current mixins implementation doesn't support a mixin extending another mixin or class.
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
All of this without type annotations (you don't need to specify types for parameters or variables/constues).

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


### Try Catch ###

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

### Multiple Catchs ###

A try block can have more than one catch, in case you need to handle different types of exception in different ways:

```scala
try 
    a.m1()
catch e : MySubclassException
    result = 3
catch e : MyException
    result = 2
```

In this case the matching will econstuate the catches top-down. Once it founds a catch that matches it will execute that one, and no further catches.

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

In general, numbers, strings, booleans, and [constue objects](https://en.wikipedia.org/wiki/constue_object) (objects that represents constues) override == operator based on their internal state.

For further information see Wollok paper explaining [Equality & Identity](https://docs.google.com/document/d/18QtQCs91tXX1e4kpEPs4sLU-TRJsxcoEKVngMDf278c/edit#heading=h.hryrt6t60c2h) among other concepts.
