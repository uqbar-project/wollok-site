---
layout: en/hyde
title: 'News'
weight: 10
lang: 'en'
---

<div>
<img src="/images/news.png" height="64" width="64" align="left"/>
<h1 style="padding: 5px;">&nbsp;&nbsp;Wollok 1.5 Epicuro Released!</h1>
</div>

<hr>

## New Features
There are several new classes:

* **Date**
* **Interval:** a continuous set of real numbers
* **Dictionary:** a key/value implementation

![image](https://cloud.githubusercontent.com/assets/4549002/17170349/fe20ee22-53c1-11e6-87e1-2517003a5490.png)

But also, there are new helpful methods in several classes:
* **String**
* **numbers**
* **collections**

Remember, you can search it by pressing Ctrl + Shift + F3 and entering a Class Name

![image](https://cloud.githubusercontent.com/assets/4549002/17170623/5d5d3cbe-53c3-11e6-8086-c47df70caf3d.png)

## Wollokdoc
(Almost) every class & method is now documented in (Wollok)doc, with examples

![image](https://cloud.githubusercontent.com/assets/4549002/17155608/2dff4762-535c-11e6-92e7-733bf93d880d.png)

## Libraries
There was a major refactor in built-in wollok libraries. Now you have several extensible and shorter .wlk libs:

* lang.wlk
* lib.wlk
* game.wlk

## Checks

Now Wollok validates that you should use 'self' word inside a WKO and not the name of the referenced WKO:

![image](https://cloud.githubusercontent.com/assets/4549002/17172042/b5bd609a-53c9-11e6-8c8b-e37c519652f8.png)

It also warns the developer when using a variable just to return a value:

![image](https://cloud.githubusercontent.com/assets/4549002/17172301/c8e34dbe-53ca-11e6-8211-994bb0042f8c.png)

Common bad smells like if (true) return true else false are now marked as errors: :smile_cat: 

![image](https://cloud.githubusercontent.com/assets/4549002/17172426/71f868b2-53cb-11e6-8c05-30167eeecc32.png)


# IDE

## Editor
In version 1.4.x there was a strange behavior when editing a Wollok class, object, program or test. Duplicate lines appeared or extra newlines where inserted between lines. This issue is fixed.

## SVN Integration
Now Wollok comes with SVN integration through subversive plugin.

![image](https://cloud.githubusercontent.com/assets/4549002/17162413/36a110a0-538c-11e6-9939-0cd22683bd34.png)

![image](https://cloud.githubusercontent.com/assets/4549002/17162432/80088f5c-538c-11e6-95a9-f2f7b830b0c0.png)

## REPL
**New features:**

* Now REPL allows pasting text from clipboard
* It also copies plain text and RTF without adding ANSI escape characters
* You can run a REPL without needing a Wollok file

## Diagrams
You can activate Static Diagrams by selecting Window > Show View > Other... Static Diagram

**New Features:**

* You can now export diagram to PNG
![image](https://cloud.githubusercontent.com/assets/4549002/17155290/cff20804-535a-11e6-85da-2dfad3f9a7e3.png)
* WKO & Mixins are located at first row
 * Classes are below that line, but if no objects and mixins are found, classes take their place
 * WKO locate left-side Mixins
* Now WKO don't show inheritance line to _Object class_. 
 * But if a WKO inherits from another class, this connector appears in the diagram. 
 * Inheritance connections between WKO and mixins are always shown
* Superclasses located in a centered-align position based on how many subclasses they have
* **Accessors methods** are now filtered, checking a method that has same name as a variable, as Wollok convention establishes (not checking for set/get methods)

**Fixed bugs:**

* connections were in a weird position if you scrolled down or resized the diagram. 
* If a WKO & a class shared the same mixin, it appeared twice. 
* Instance variable names didn't appear in diagram. 

<div>
<img src="/images/bug.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;Issues solved</h1>
</div>

You can see [here](https://github.com/uqbar-project/wollok/milestone/6?closed=1) a list of all issues solved in this release.