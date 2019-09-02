---
layout: en/hyde
title: 'News'
weight: 10
lang: 'en'
icon: 'podcast'
---


<div class="container">
<img src="/images/news.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;Wollok Hypatia released!</h1>
<br>
</div>

<div class="container" style="text-align: center; margin-bottom: 1em;">
    <img src="/images/news/hypatia.jpg"/>
</div>

This version is a tribute to [Hypatia](https://en.wikipedia.org/wiki/Hypatia), a Hellenistic Neoplatonist philosopher, astronomer, and mathematician.

Wollok 1.8 release is available, with so many features!

- **type system inference** is already active when you launch Wollok for the very first time! You'll be able to get type information for variables, parameters, and detect earlier programming errors
- [wollok-cli](https://github.com/uqbar-project/wollok-cli), a new project is born, allowing you to have [**Travis continuous integration**](../documentacion/apuntes#integracion-con-travis) in your Wollok projects. Tasks automation is easier now, give a try!
- enhanced **dynamic diagram** integrated with REPL console, a didactic tool for teaching OOP
- better UX for REPL console, less resource-consuming. You can also **import any file of your project in the console**. If you want to get a deeper view, please take a look to the [tour](../tour) page
- [**named parameters**](https://docs.google.com/document/d/11c9l3sqgUIFDx1J_ULCSS86faMQXAyOV3uesg-nwaSY/edit#heading=h.vj2ax6a4f7xh) is now the preferred and default way for object instantiation
- error reporting is more flexible now, which fosters the user to explore the language in an iterative way
- smart autocomplete functionality, filtering private messages and prioritizing them
- optimization for performance in Wollok lists and sets!
- adding new methods in Wollok library objects (days of week, better `toString` definition for pairs and dates, `left(), right(), reverse()` in String, `copyWith(), copyWithout()` in Collection, etc.). Also null parameters are catched, for a better error detection in your programs.
- Stack trace copy and overall time elapsed in Test Runner
- and new quick fixes were added!

Here you can check all issues solved for versions for [1.8.0](https://github.com/uqbar-project/wollok/milestone/26?closed=1) (pre-release version), [1.8.1](https://github.com/uqbar-project/wollok/milestone/28?closed=1) and [1.8.2](https://github.com/uqbar-project/wollok/milestone/29?closed=1).

<div/><!-- just to clean up the markdown, don't remove it -->

## New "wollokers"!

Since july, two hackatons were made: [chinese-food](https://twitter.com/wollokLang/status/1150785337108680704) the first and [empanadas](https://twitter.com/wollokLang/status/1156572239241863169) the second. A lot of students from Universidad Nacional de San Martín and Universidad Nacional de Quilmes attended the meeting, joined the team, and they are currently working to improve our product day by day.

[We are looking for you!](../comunidad)!

<div class="container">
<br>
<hr>
<img src="/images/bug.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;What are we working on?</h1>
<br/>
</div>

You can see [here](https://github.com/uqbar-project/wollok/milestone/25) the complete list of "in-progress" issues for next release and [what we already did](https://github.com/uqbar-project/wollok/milestone/25?closed=1).
