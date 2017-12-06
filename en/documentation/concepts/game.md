---
layout: none
---

# Wollok Game

## Objectives and Use

Wollok-Game allows you to create games, building a board where you put different visual characters (objects). 

## The game

Main object is `game` object, located in Wollok _lib_ file. To start a game, just write in console:

```js
>>> game.start()
```

Now you should see a board in another window of your operating system.
<br>

![Tablero vacío](https://image.prntscr.com/image/DJ2AwqP6RTyOexB0yJO3xA.png)

## The board

Here you will add your game objects. Board has the following properties:  

- is a **singleton**, you can have only a single board per game
- the whole board is **divided into cells of fixed size** (50 x 50 px), and all positions are in units of cells.
- has **title**, accessible via `game.title()` message
- has a **width**, expressed in _cell_quantity_, accessible via `game.width()` message
- has a **height**, expressed in _cell_quantity_, accessible via `game.height()` message
- has a **cell image**, configurable via `game.ground(image)` message, where `image` is the image file name.
 
#### Example

```js
>>> game.width(10)
>>> game.height(7)
>>> game.title("A whole new Game")
>>> game.start()
```

<div class="container text-center">
	<img src="https://image.prntscr.com/image/7B5VH1VtQEK7DS6M7aBiMw.png" class="img-fluid z-depth-1">
</div>
<br>


## Positions

To put objects in the board we need to specify its **location**. In Wollok we have `Position` class (in _lib_ library) which provides a pair _(x,y)_ implementation. You can instantiate a Position using different approaches:

```js
// Invoking two parameter constructor
>>> new Position(2, 3)
(2,3) //-> (x=2; y=3)
>>> new Position()
(0,0) //-> default constructor uses origin of coordinate system

// Asking game position
>>> game.at(2,3)
(2,3)
>>> game.origin()
(0,0)
>>> game.center()
(2,2) //-> Calculated based on height & width
```

#### Drawing objects
Positions allow us to add an object in the board.
```js
>>> var position = game.origin()
(0,0)
>>> position.drawElement(wollok)
```

##### Another option

You can also define a position for any visual object (with a reference _position_ or a message _position()_) and tell the game to add an element in board:

###### In example.wlk
```js
object wollok {
	var position = game.origin()
}
```

###### And voilá...
```js
>>> game.addVisual(wollok)
```

...Object is shown in board!

![Tablero con wollok](https://image.prntscr.com/image/KO5vo8RcSkSV5rjYN0b6_g.png)


#### Moving objects

Positions are **mutable** properties, so its components _(x, y)_ can change in time. Then, we can **move objects** in board without changing its position object (or even worse, having to remove and add it again).

```js
>>> position.moveRight(2)
>>> position.moveUp(3)
>>> position
(2,3)
```

![Moviendo los objetos](https://image.prntscr.com/image/osdht-GhRJKY9wsLGhWZgA.png)

##### The character
Wollok Game allows you to define a _main character_, movable with arrow keys of the keyboard. You just set **the character** of the game before it starts.

```js
>>> game.origin().drawCharacter(wollok)
//or game.addVisualCharacter(wollok)
>>> game.start()
```

![wollok-character](https://user-images.githubusercontent.com/4098184/32724281-6a76e6be-c84f-11e7-849d-3e8ac90a4742.gif)


#### Look who's talking!

**Game objects can talk, too**, if you send a message `game.say(visualObject, textToSay)`:
```js
>>> game.say(wollok, wollok.howAreYou())
```
![Los objetos hablan](https://image.prntscr.com/image/m9aRcwxPQCK5cnFKy0YLwQ.png)


## Visuals

By now, we can show objects in the board as _wollok objects_. To change default image you have to

1. Have a **source folder** in your Wollok project **with all images of the game**. To create this folder, you have to _right click over the project > New > Other.. > and search "Source folder"_. Then add images by copying or dragging just like any other folder.
2. Afterwards you have to add a `image()` method that will **return the name of the image file name** as a string.

#### Example

<div class="container text-center">
	<img src="/images/tour/imgExplorerGameEn.png" class="img-fluid z-depth-1">
</div>
<br>

###### In example.wlk

```js
object box {
	method image() {
		return "box.png"
	} 
} 
```

###### Let's execute it

```js
>>> game.start()
>>> game.center().drawElement(box)
```
![Caja Game](https://image.prntscr.com/image/eyT9BiHzR2ei2O5OgEVDuA.png)

> ![Warning](http://d2mxabrykbl1km.cloudfront.net/img/icons/ico_warning.png) IMPORTANT MESSAGE : Wollok Game doesn't resize the images you show, so you have to manually adjust **size** and **orientation** according to your game.

## An interactive game

Now we will see how objects interact with game, to be more challenging.

### Using REPL console
An easy way is to send messages through **REPL console**. You can change size, position, etc. and this changes will be reflected in board.

### Collisions
When two objects share the same position, Wollok Game throws a _collision_ event. A collision is implemented as a **closure (piece of code)** added to a certain object: `game.whenCollideDo(object, actionClosure)`.

#### Example
![colision-caja](https://user-images.githubusercontent.com/4098184/32722971-87bee42e-c84a-11e7-8f66-649e9acdb84a.gif)

###### In example.wlk
```js
object wollok {
	const position = game.origin()
	
	method goHome() {
		position.x(0)
		position.y(0)
	}
}

object box {
	method image() {
		return "box.png"
	} 
} 
```

###### Executing
```js
>>> game.addVisualCharacter(wollok) // Movable with arrow keys
>>> game.center().drawElement(box)
>>> game.whenCollideDo(box, { character => character.goHome() })
	// When a character collides with box, it goes to initial position
>>> game.start()
```
