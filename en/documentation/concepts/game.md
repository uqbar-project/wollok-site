---
layout: null
---

# Wollok Game

## Index

1. <a href="#the-game" class="wollokLink">The game</a>
1. <a href="#the-board" class="wollokLink">The board</a>
1. <a href="#positions" class="wollokLink">Positions</a>
  1. <a href="#drawing-objects" class="wollokLink">Drawing objects</a>
  1. <a href="#moving-objects" class="wollokLink">Moving objects</a>
1. <a href="#the-character" class="wollokLink">The character</a>
1. <a href="#visuals" class="wollokLink">Visuals</a>
1. <a href="#an-interactive-game" class="wollokLink">An interactive game</a>
  1. <a href="#collisions" class="wollokLink">Collisions</a>
1. <a href="#programs" class="wollokLink">Programs</a>
  1. <a href="#changing-board-background" class="wollokLink">Changing board background</a>
  1. <a href="#reporting-errors" class="wollokLink">Reporting errors</a>
  1. <a href="#automatic-events" class="wollokLink">Automatic events</a>
  1. <a href="#keyboard-events" class="wollokLink">Keyboard events</a>
  1. <a href="#show-or-hide-visual-objects-attributes" class="wollokLink">Show or hide visual objects attributes</a>
1. <a href="#troubleshooting" class="wollokLink">Troubleshooting</a>
1. <a href="#more-info" class="wollokLink">More info</a>

____


## Goals and Use

Wollok-Game allows you to create games, building a board where you put different visual characters (objects). 

## The game

Main object is `game` object, located in Wollok _lib_ file. You must import it in your file (.wlk o .wpgm):

```wollok
import wollok.game.*
```

To start a game, just write in console:

```js
>>> game.start()
```

Now you should see a board in another window of your operating system.
<br>

![Tablero vacío](../../../documentacion/conceptos/images/tableroVacio.png)

## Using game

### From REPL console - no file ###

You can run REPL console with no associated file and import Wollok Game:

```wollok
>>> import wollok.game.*
```

Then you'll be able to send messages to the corresponding objects, as usual: 

```wollok
>>> game.start()
```

### From REPL console - from wlk file ###

If you define a `.wlk` file with visual objects, you can execute it in REPL console:

Archivo ejemplo.wlk

```wollok
import wollok.game.*

object someGame {
  method begin(){
    game.start()
  }
}
```

Then you can send a message to the custom object:

```wollok
>>> someGame.begin()
```

### From program

If you create a `.wpgm` file (Wollok program), you can execute it directly. 

File gameExample.wpgm

```wollok
import wollok.game.*

program firstWollokGameProgram {
  game.start()
}
```

## The board

Here you will add your game objects. Board has the following properties:  

- is a **singleton**, you can have only a single board per game
- the whole board is **divided into cells of fixed size** (50 x 50 px), and all positions are in units of cells.
- has **title**, accessible via `game.title()` message
- has a **width**, expressed in _cell_quantity_, accessible via `game.width()` message
- has a **height**, expressed in _cell_quantity_, accessible via `game.height()` message
- has a **cell image**, configurable via `game.ground(image)` message, where `image` is the image file name.
 
#### Example

```wollok
import wollok.game.*

program firstWollokGameProgram {
  game.width(10)
  game.height(7)
  game.title("Juego")
  game.start()
}
```

<div class="container text-center">
  <img src="../../../documentacion/conceptos/images/tableroNuevo.png" class="img-fluid z-depth-1">
</div>
<br>

## Positions

To put objects in the board we need to specify its **location**. In Wollok we have `Position` class (in _lib_ library) which provides a pair _(x,y)_ implementation. You can instantiate a Position using different approaches:

```scala
>>> game.at(2,3)
2@3 // x = 2, y = 3 
>>> game.origin()
0@0
>>> game.center()
2@2 //-> Calculated based on height & width
```

Positions have messages for x and y coordinates:

```wollok
>>> game.at(2,3).x()
2
>>> game.at(2,3).y()
3
```

#### Drawing objects

To incorporate any object to our game, it must have a `position()` method returning the location it should have on the board. This method can be a property or a calculated method (as simple or complex as you like).

```wollok
// as a property
object wollok {
  var property position = game.origin()
}

// as a calculated method
object wollok {
  var property centered = false
  method position() = if (centered) game.center() else game.origin()
}
``` 

Then you can add a visual object by writing

```wollok
game.addVisual(wollok)
```

And there you have!

![Tablero con wollok](../../../documentacion/conceptos/images/tableroConWollok.png)


## The character

Wollok Game allows you to define a _main character_, movable with arrow keys of the keyboard. You just set **the character** of the game before it starts.

```wollok 
game.addVisualCharacter(wollok)
```

![wollok-character](../../../documentacion/conceptos/images/wollokCharacter.gif)

## Visuals

By now, we can show objects in the board as _wollok objects_. To change default image you have to

1. Have a **source folder** in your Wollok project **with all images of the game**. To create this folder, you have to _right click over the project > New > Other.. > and search "Source folder"_. Then add images by copying or dragging just like any other folder.
2. Afterwards you have to add a `image()` method that will **return the name of the image file name** as a string.

#### Example

<div class="container text-center">
  <img src="/images/tour/imgExplorerGame.png" class="img-fluid z-depth-1">
</div>
<br>

###### In example.wlk

```wollok
import wollok.game.*

object box {
  method image() = "box.png"
  method position() = game.center()
} 
```

###### Let's execute it

```wollok
>>> game.start()
>>> game.addVisual(box)
```

![Caja Game](../../../documentacion/conceptos/images/cajaGame.png)

> ![Warning](../../../documentacion/conceptos/images/warning.png) IMPORTANT MESSAGE : Wollok Game doesn't resize the images you show, so you have to manually adjust **size** and **orientation** according to your game.

### Look who's talking!

**Game objects can talk, too**, if you send a message `game.say(visualObject, textToSay)`:

```wollok
game.say(wollok, wollok.howAreYou())
```

![Los objetos hablan](../../../documentacion/conceptos/images/objetosHablan.png)


## An interactive game

Now we will see how objects interact with game, to be more challenging.

### Collisions

When two objects share the same position, Wollok Game throws a _collision_ event. A collision is implemented as a **closure (piece of code)** added to a certain object: `game.whenCollideDo(object, actionClosure)`.

#### Example

![colision-caja](../../../documentacion/conceptos/images/colisionCaja.gif)

###### In example.wlk

```wollok
import wollok.game.*

object wollok {
  var property position = game.origin()
  method howAreYou() = "I am Wolloktastik!"
  method image() = "wollok.png"
}

object box {
  var property position = game.center()
  method image() = "box.png"
  method goUp(){
    position = position.up(1)
  }
}

program firstWollokGameProgram {
  game.addVisualCharacter(wollok)  //Para que se pueda mover con las flechas
  game.addVisual(box)
  // Once the character collides with the box, the former speaks and the latter moves
  game.whenCollideDo(wollok, { element => 
    element.goUp()
    game.say(wollok,wollok.howAreYou())
  })
  game.start()
}
```

**Tip:** if you need the box image you can download it in assets folder of [sokoban project](https://github.com/wollok/sokobanGame) and rename "caja.png" to "box.png".

#### Automatic events

You can configure an automatic event, such as **box should move every 2 seconds**, if you send `onTick()` message which expects a block to be called every n milliseconds:

```wollok
program firstWollokGameProgram {
  game.addVisualCharacter(wollok)
  game.addVisual(box)  // IMPORTANT: see warning below
  // every 2 seconds, move the box
  game.onTick(2000, "movement", { box.moveOn() })
  //
  game.start()
}
```

`moveOn()` method in box object will randomly update its position, based on board height and width:

```wollok
object box {
  var property position = game.center()
  method image() = "box.png"
  method moveOn() {
    const x = 0.randomUpTo(game.width()).truncate(0)
    const y = 0.randomUpTo(game.height()).truncate(0)
    // another option
    // const x = (0.. game.width() - 1).anyOne() 
    // const y = (0.. game.height() - 1).anyOne() 
    position = game.at(x,y) 
  }
}
```

When program is executed, we'll see a box movement every 2 seconds (and wollok object should be more careful):

![on tick](../../../documentacion/conceptos/images/onTick.gif)


#### Keyboard events

Every time the user hits a key, an event is fired, so it is a good starting point to read `keyboard` wko documentation. Lets see this example, where we activate box automatic movement when the user presses ENTER key, and stop that automatic event by pressing `p` key:

```wollok
import wollok.game.*

program firstWollokGameProgram {
  game.addVisualCharacter(wollok)
  game.addVisual(box)
  
  game.onTick(2000, "movement",{ box.moveOn() })

  // ENTER key pressed event
  keyboard.enter().onPressDo { game.say(wollok, wollok.howAreYou()) }
  // p key pressed
  keyboard.p().onPressDo { game.removeTickEvent("movement") }  // Stops the "movement" tick event
  game.start()
}
```

Here is our live demo:

![keyboard](../../../documentacion/conceptos/images/keyboard.gif)


#### Show or hide visual objects attributes

Lets add some attributes to wollok wko:

```wollok
object wollok {
  var property position = game.origin()
  var version = "1.7.0"
  var lastUpdated = new Date()
  ...
```

When we pass mouse over wollok, we can see its internal state:

![attributes](../../../documentacion/conceptos/images/attributes.png)

If we don't want to show overwhelming information to user, we can send `hideAttributes()` message to `game`:

```js
program firstWollokGameProgram {
  game.addVisualCharacter(wollok)
  // ...
  game.hideAttributes(wollok)
```

#### Changing board background

You can change out board background, replacing default one with [any picture you like](https://www.google.com.ar/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwimy6fJtvTcAhVFxpAKHRdhBK4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.todopaisajes.com%2Ffondos-de-pantalla-de-playas&psig=AOvVaw10Rdr1CY3aFnRTDZP9Pd-r&ust=1534606917743804). Download it to a new source folder, in this case called `assets`, and add in your program a message to `game` object:

```js
import wollok.game.*

program firstWollokGameProgram {
  game.width(10)
  game.height(10)
  game.boardGround("beach.jpg") // replace here beach.jpg with the name you used
  game.start()
}
```

Now we see a new image in game board:

![tablero con fondo especial](../../../documentacion/conceptos/images/tableroConFondoEspecial.png)

From now on we will go back to default and less distracting background.


#### Reporting errors

When things go wrong, our main character catches error messages and alert us. Lets suppose we change collider block between our main character wollok and the box:

```wollok
program firstWollokGameProgram {
  game.addVisualCharacter(wollok)  
  game.addVisual(box)
  game.whenCollideDo(wollok, { element => 
    const a = 1 / 0 // force an error
  })
  game.start()
}
```

When wollok and box collides, wollok reports a "division by zero" error:

![wollok reporta error](../../../documentacion/conceptos/images/errorReporter1.gif)

In Wollok Game, if there is a main character, it is responsible to catch and report any error inside the game. Otherwise, any visual object in board will do that.

Anyway, we can configure _error reporter object_ to another object, such as the box:

```js
program firstWollokGameProgram {
  //...
  game.errorReporter(box)
  //...
```

So lets see what happens now when wollok and the box collides and an error is thrown:

![caja reporta error](../../../documentacion/conceptos/images/errorReporter2.gif)



### Troubleshooting

Wollok Game works with Open GL 2.0 or greater. If you need to install or upgrade it, follow [this instructions](https://www.khronos.org/opengl/wiki/Getting_Started)


### Error at start ###

If you get the following error on REPL console when you start a game:

```
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by org.lwjgl.LWJGLUtil$3 (file:/C:/Users/tommy/Downloads/Groxar/desktop/desktop/app/desktop-1.0.jar) to method java.lang.ClassLoader.findLibrary(java.lang.String)
WARNING: Please consider reporting this to the maintainers of org.lwjgl.LWJGLUtil$3
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release
```

You may be using Java 9 version or greater. Our solution is installing Open JDK 1.8 in a different folder and configure Eclipse to use it:

<div class="container text-center">
  <img src="../../../documentacion/conceptos/images/wollokGameFallaJava9En.gif" class="img-fluid z-depth-1">
</div>
<br>

#### Error in Ubuntu

Some Ubuntu installations may crash with this error message while opening a Wollok Game program:

```
LwjglApplication: Couldn't initialize audio, disabling audio
java.awt.AWTError: Assistive Technology not found: org.GNOME.Accessibility.AtkWrapper
  at java.awt.Toolkit.loadAssistiveTechnologies(Toolkit.java:807)
  at java.awt.Toolkit.getDefaultToolkit(Toolkit.java:886)
  at org.lwjgl.LinuxSysImplementation.<clinit>(LinuxSysImplementation.java:50)
  at org.lwjgl.Sys.createImplementation(Sys.java:131)
  at org.lwjgl.Sys.<clinit>(Sys.java:116)
  at org.lwjgl.openal.AL.<clinit>(AL.java:59)
  at com.badlogic.gdx.backends.lwjgl.audio.OpenALAudio.<init>(OpenALAudio.java:72)
  at com.badlogic.gdx.backends.lwjgl.LwjglApplication.<init>(LwjglApplication.java:83)
  at com.badlogic.gdx.backends.lwjgl.LwjglApplication.<init>(LwjglApplication.java:64)
  at org.uqbar.project.wollok.game.gameboard.WollokGDXApplication.<init>(WollokGDXApplication.java:12)
  at org.uqbar.project.wollok.game.helpers.Application.start(Application.java:28)
  at org.uqbar.project.wollok.game.gameboard.Gameboard.start(Gameboard.java:86)
```

Or just a shorter `Assistive Technology not found: org.GNOME.Accessibility.AtkWrapper` error message. Should this happen, follow [these steps](https://askubuntu.com/questions/695560/assistive-technology-not-found-awterror). Edit accessibility.properties file

```bash
$ sudo edit /etc/java-8-openjdk/accessibility.properties\ # or any other text editor you choose
```

and comment out this configuration

```bash
#assistive_technologies=org.GNOME.Accessibility.AtkWrapper
```

Close and reopen Wollok environment and everything should work normally.

#### Wollok Game problem in MacOS HighSierra

Wollok Game uses SWT, an Eclipse component [with issues reported using in a MacOS High Sierra](https://bugs.eclipse.org/bugs/show_bug.cgi?id=525465). This problem will be solved in next version, meanwhile as a workaround is using Mojave or greater version you can install a VM in another operating system and work with it.


### More info

You can download the full example in [this repository](https://github.com/wollok/ejemploGameSite).

You can download [all these Wollok Game examples](https://github.com/wollok?utf8=%E2%9C%93&q=game&type=&language=) from Wollok repository. Enjoy them!
