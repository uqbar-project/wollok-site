---
layout: null
---

## Quick index ##

1. <a href="#collections" class="wollokLink">Collections</a>
    1. <a href="#sets" class="wollokLink">Sets</a>
    1. <a href="#dictionaries" class="wollokLink">Dictionaries</a>
    1. <a href="#closures" class="wollokLink">Closures</a>
    1. <a href="#closures-and-collections" class="wollokLink">Closures and Collections</a>

<hr>

# Collections #

Wollok provides literals for **List objects**.
The syntax is:

```javascript
[ element1, element2, ..., elementN ]
```

For example

```javascript
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

### Dictionaries ###

Dictionaries (also known as _maps_) are key-value collections, very useful to access elements directly by key. 

```javascript
>>> const phones = new Dictionary()
a Dictionary[]
>>> phones.put("ricky", "15-21...")
>>> phones.put("poly", "15-42...")
>>> phones.get("ricky")
```

You can check other interesting messages like keys(), values(), etc.

## Closures ##

For a detailed explanation see [wikipedia](http://en.wikipedia.org/wiki/Closure_(computer_programming)).
Here, we'll just say that a closure is an object that represents a "piece of code" that can be manipulated. Specifically, it can be executed at any time, as many times as you want.
But they can also be assigned to references, be passed as parameters, as well as be returned. After all, they are objects!

Wollok support closures through literals.

Here is an example:

```javascript
const helloWorld = { "helloWorld" }
const response = helloWorld.apply()     

response == "helloWorld"      // true
```

The first line defines a closure that doesn't take any parameter. The second one executes the closure sending the message **apply()** to it.

Here is one that receives a single parameter:

```javascript
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

```javascript
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

```javascript
const numbers = [23, 2, 1]

var sum = 0
numbers.forEach({ n => sum += n })
            
sum == 26      // true
```

There's also a short way to write it in case you are sending a message with a single parameter being a closure, you can avoid the parenthesis.
So the previous example would be:

```javascript
numbers.forEach { n => sum += n }
```

To evaluate if all elements comply a given condition, there's a "forAll"


```javascript
const numbers = [23, 2, 1]
            
var allPositives = numbers.forAll { n => n > 0 }

allPositives == true      // true
```

**filter** returns a new collection which only has the elements that are evaluated to true.

```javascript
const numbers = [23, 2, 1]
            
var greaterThanOneElements = numbers.filter { n => n > 1 }
    
greaterThanOneElements.size() == 2      // TRUE

```

**map** returns a new collection whose elements are the result of performing a *transformation* on each element of the original collection through the given closure.

```javascript
const numbers = [10, 20, 30]
            
var halfs = numbers.map { n => n / 2 }
    
halfs.contains(5)       // TRUE
halfs.contains(10)      // TRUE
halfs.contains(15)      // TRUE
```

Have in mind that *it doesn't actually transform the element*, but obtains a new object as a result of applying the closure to it.


