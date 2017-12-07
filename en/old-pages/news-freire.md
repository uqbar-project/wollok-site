---
layout: en/hyde
title: 'News'
weight: 10
lang: 'en'
---

<div class="container">
<img src="/images/news.png" height="64" width="64" align="left"/>

<h1>&nbsp;&nbsp;New "Wollok Freire" released!</h1>
</div>

<img src="/images/news-freire/paulo-freire.jpg" height="170" width="170" align="left" style="padding: 0rem 0.5rem 0rem 0.5rem !important; margin-bottom: 0rem;"/>

There is a new Wollok release: 1.6 version, a tribute to an outstanding educator and philosopher: <a href="https://es.wikipedia.org/wiki/Paulo_Freire">Paulo Freire</a>. His work is a source of inspiration for every teacher in this world.

This year several teacher and developer joined into a broader team, leading to a new product. Monthly we do *hackatons* and *meetings*, to work together and catch up with each other.

If you like to join us, <a href="/comunidad/index.html">stay tuned</a>!

<div/>

## Meet Freire! ##

You can see <a href="https://github.com/uqbar-project/wollok/milestone/11?closed=1">in this link</a> a brief resume of closed issues (100+) for this milestone. Let's see in plain english what's new:

* <a href="#test-suite-with-fixtures" class="wollokLink">Test suite with fixtures</a>
* <a href="#language-enhancements" class="wollokLink">Language enhancements</a>
* <a href="#new-validations" class="wollokLink">New Validations</a>
* <a href="#quick-fixes" class="wollokLink">Quick Fixes</a>
* <a href="#project-organization" class="wollokLink">Project organization</a>
* <a href="#static-diagram-enhancements" class="wollokLink">Static diagram enhancements</a>
* <a href="#repl-console-enhancements" class="wollokLink">REPL console enhancements</a>
* <a href="#plugins-changes" class="wollokLink">Plugins changes</a>
* <a href="#external-libraries-support" class="wollokLink">External libraries support</a>

<hr>

## Test suite with fixtures ##

Now in wollok you can define

- individual tests (as usual)
- and also *describe tests*, with instance variables initialized in a *fixture*, so state is shared among them. 

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/testSuite.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

Both kind of tests are still isolated, automatic and repetitive.

* Tests results and editor are fully integrated, so you can navigate stack trace errors and failures.
* A new *Show only failures and errors* toggle button allows to focus only  in tests we should correct. 
* Now you can run all tests in a specific project (it works for individual and *describe* tests):

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/allTests.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

In Outline View we can see the structure of a *describe*

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/testSuite2.png" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>


## Language enhancements ##

Beyond minor corrections, there is an important change in Wollok Freire about constructors:

* every class inherits constructors from its superclass, so now you don't have to define a constructor that simply delegates to super
* unless explicitly defining one constructor: in this case superclass constructors will be overriden

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="constructors.png" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>


Remember you can search any Wollok library class by pressing Ctrl + Shift + F3 and typing the name of the looked class:

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="https://cloud.githubusercontent.com/assets/4549002/17170623/5d5d3cbe-53c3-11e6-8086-c47df70caf3d.png" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>



## New Validations ##

Student's feedback helped us to add new validations to early detect code smells:

* Cyclic loops in hierarchy (like A inherits from B, and viceversa)
* Conceptual errors like overriden methods that only calls to super
* Spanish speaking users now can enjoy internationalization of validation messages

So, several checks were added and we expect to add more in a near future.


## Quick Fixes ##

User experience is better, as this demo shows:

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/quickFix.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>


* Spanish speaking users now can enjoy internationalization of quick fixes descriptions
* Enhanced context dependent quick fixes for classes and objects, tests and *describes* were developed
* Quick fixes don't require to manipulate elements in same file. Now you can add a wko's method defined in a .wlk file while editing a test


## Project organization ##

As soon as you realize you have a large project, Wollok allows you to organize your definitions in *packages*.

All you have to do is import objects and classes using package names as prefixes, separating each folder with a dot:

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/packages.png" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>



## Static diagram enhancements

Wollok static diagram has full integration with environment tools:

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/staticDiagram.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

Now a lot of features are available:

* Every manual adjustment and configuration is saved, so you never lose your changes.
* Diagram has a smart drawing algorithm to place elements. Nevertheless, you can change size or location of them. 
* You can show and hide classes, variables or methods in the diagram, so it is easy for the student to add this diagram as an additional documentation artifact (constructors and accessors are never shown)
* Remember that you can navigate to editor by double clicking any element, and you can export diagram to a png image file
* All inheritance relationships are automatically detected. Until now association and dependency relationships must be manually defined, using Palette Toolbar at the right of the diagram. 
* You can dismiss any action: show hidden elements, show hidden variables/methods of a certain element, delete association / dependency relationships. 

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/staticDiagram2.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>


* In 1.6.1 version you can add external elements if they are in the same project!

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/staticDiagram3.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

## REPL Console enhancements ##

* You can (finally!) paste any text from the clipboard, without having to press a space key

* You can run REPL console without any open project

* When an error occurs, you can navigate stack trace directly to editor

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/replConsole.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

## Plugins changes

* Default Version Control System plugin in Wollok is now [EGit](http://www.eclipse.org/egit/), a widely used plugin that integrates Git with Eclipse.

* SVN plugin no longer comes with Wollok installation. If you need to use it, you can install it manually [from Marketplace](https://marketplace.eclipse.org/content/subclipse), **like any other Eclipse plugin**



## External Libraries Support ##

From now on, you can run a .wlk, .wtest or .wpgm by passing any JDK 1.8-compatible external library.

So you can configure your Running environment to use any .jar libraries.

<hr>

<div>
<img src="/images/bug.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;Solved Issues</h1>
</div>

You can see the solved issues for 

* [1.6.0 release](https://github.com/uqbar-project/wollok/milestone/11?closed=1)
* [1.6.1 release](https://github.com/uqbar-project/wollok/milestone/15?closed=1)
* [1.6.2 release](https://github.com/uqbar-project/wollok/milestone/16?closed=1)
* [1.6.3 release](https://github.com/uqbar-project/wollok/milestone/18?closed=1)
