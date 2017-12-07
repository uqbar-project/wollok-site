---
layout: none
---

## Index

* Language elements
    * <a href="#wollok-files" class="wollokLink">Wollok Files</a>
    * <a href="#wollok-programs" class="wollokLink">Wollok Programs</a>
    * <a href="#references-variables-and-constants" class="wollokLink">References: Variables and Constants</a>
    * <a href="#comments" class="wollokLink">Comments</a>
* Basic objects
    * <a href="#numbers" class="wollokLink">Numbers</a>
    * <a href="#booleans" class="wollokLink">Booleans</a>
    * <a href="#strings" class="wollokLink">Strings</a>
    * <a href="#dates" class="wollokLink">Dates</a>
* Object comparison
    * <a href="#equality-expressions" class="wollokLink">Equality expressions</a>
    * <a href="#comparing-expressions" class="wollokLink">Comparing expressions</a>

___


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

### Dates ###

A date is an immutable object representing a day, month and year (without hours or minutes). You have two ways to build a date:

```javascript
const today = new Date()  
        // takes the current day
const someDay = new Date(30, 6, 1973)  
        // input is day, month, year
```

Some operations with dates:

```javascript
>>> const today = new Date()
Date[2017-11-24]
>>> today.plusYears(1)    // add a year
Date[2018-11-24]          // returns a new date
>>> today.plusMonths(2)   // add 2 months
Date[2018-01-24]
>>> today.plusDays(20)
Date[2017-12-14]
>>> today.isLeapYear()    // is today a leap year?
false
>>> today.dayOfWeek()     // which day of week is this date?
5                         // friday, because 0 is sunday...
>>> today.month()
11
>>> today.year()
2017
>>> const yesterday = today.minusDays(1)
                          // to get yesterday, we just subtract a day to current date
Date[2017-11-23]
>>> yesterday < today     // comparing dates
true
>>> const aMonthAgo = today.minusMonths(1)
Date[2017-10-24]        
>>> yesterday.between(aMonthAgo, today)
                          // yesterday is in a range between a month ago and today
true
>>> yesterday - today
1                         // absolute difference in days
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


