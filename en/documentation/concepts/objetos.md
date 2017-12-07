---
layout: none
---

## Index ##

* <a href="#user-objects" class="wollokLink">User objects</a>
    * <a href="#named-objects-aka-well-known-objects-or-just-wkos" class="wollokLink">Named Objects (WKO: Well-Known Objects)</a>
    * <a href="#object-literals" class="wollokLink">Object Literals</a>
* Object definition in Wollok
    * <a href="#methods" class="wollokLink">Methods</a>
    * <a href="#instance-variables" class="wollokLink">Instance variables</a>
* Messages
    * <a href="#messages" class="wollokLink">Messages</a>
    * <a href="#self" class="wollokLink">Self</a>
    * <a href="#polymorphism---part-i-just-objects" class="wollokLink">Polymorphism - Part I: Just Objects</a>
    * <a href="#if-expression" class="wollokLink">If</a>

___

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
