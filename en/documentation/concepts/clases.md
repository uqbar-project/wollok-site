---
layout: none
---

## Index ##

1. [Classes](#classes)  
    1. [Inheritance](#inheritance)
    1. [Abstract Methods and Classes](#abstract-methods-and-classes)  
    1. [Overriding and Super](#overriding-and-super)
    1. [Constructors](#constructors)  
        1. [Simple Constructor](#simple-constructor) 
        1. [Default Constructor](#default-constructor) 
        1. [Multiple Constructor](#multiple-constructor) 
        1. [Constructor Delegation](#constructor-delegation) 
        1. [Constructor Inheritance](#constructor-inheritance) 
        1. [Constants Initialisation in Constructors](#constants-initialisation-in-constructors) 
    1. [Object Inheritance](#objects-inheritance)  
1. [Polymorphism - Part II: now with Classes](#polymorphism---part-ii)
1. [Modularization](#modularization)  
    1. [Packages](#packages)  
    1. [Imports and Namespaces](#imports-and-namespaces)  

___



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
It will be up to the subclasses of this class to implement this method by **overriding** (see next section).
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
You cannot use super to call any other method in the superclass. This keeps the language and programs easier. Also notice that super can only be used within an overriding method.

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

### Constructor Inheritance ###

Given this hierarchy 

```scala
class Ball {
    var color
    constructor() { }
    constructor(_color) { color = _color }
} 

class Snitch inherits Ball {
    var owner
}
```

Snitch inherits constructors defined by Ball. This means both expressions will be valid:

```scala
new Snitch()
new Snitch("blue")
```

Nevertheless, if we define any constructor in Snitch, Wollok will no longer support inherited constructors from Ball:

```scala
class Ball {
    var color
    constructor() { }
    constructor(_color) { color = _color }
} 

class Snitch inherits Ball {
    var owner
    constructor(_color, _owner) = super(_color) {
        owner = _owner
    }
}
```

In this case, we can only build a Snitch by passing two parameters:

```scala
new Snitch()                  // wrong
new Snitch("blue")            // wrong
new Snitch("blue", "Harry")   // correct
```


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

