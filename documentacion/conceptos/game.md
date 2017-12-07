---
layout: none
---

# Wollok Game

## Indice rápido ##

* <a href="#el-juego" class="wollokLink">El juego</a>
* <a href="#el-tablero" class="wollokLink">El tablero</a>
* <a href="#las-posiciones" class="wollokLink">Las posiciones</a>
	* <a href="#dibujando-objetos" class="wollokLink">Dibujando objetos</a>
	* <a href="#moviendo-objetos" class="wollokLink">Moviendo objetos</a>
* <a href="#el-personaje" class="wollokLink">El personaje</a>
* <a href="#visuales" class="wollokLink">Visuales</a>
* <a href="#un-juego-interactivo" class="wollokLink">Un juego interactivo</a>
	* <a href="#colisiones" class="wollokLink">Colisiones</a>

___
## ¿Qué es y cómo se usa?

Wollok-Game es una biblioteca de Wollok que sirve para crear juegos. La idea que propone es tener una especie de "tablero" en donde se puedan meter los objetos de algún programa de Wollok y éste se mostrará automáticamente en la pantalla.
A continuación se describe cómo utilizarlo y las funcionalidades que proporciona..

## El juego

El objeto más importante para interactuar con Wollok Game es el objeto `game` que ya se encuentra en la _lib_ de Wollok.
Para comenzar un juego, y poder visualizar el tablero, basta con ejecutar:

```js
>>> game.start()
```
Esto deberá levantar otra ventana del sistema operativo mostrando el tablero.
<br>

![Tablero vacío](https://image.prntscr.com/image/DJ2AwqP6RTyOexB0yJO3xA.png)

## El tablero
Todo el mundo de Wollok Game pasa por el tablero. Aquí es donde se van a agregar los objetos que queremos mostrar en el juego y tiene las siguientes características:

- Es **único**, de modo que solo podemos tener un tablero por juego
- Todo el tablero **está dividido en celdas** de tamaño fijo (50 x 50 px), y todas las posiciones están en unidades de celdas.
- Tiene un **título**, manejado por la propiedad `game.title()`
- Tiene un **ancho**, expresado en _cantidad de celdas_, manejado por la propiedad `game.width()`
- Tiene un **alto**, expresado en _cantidad de celdas_, manejado por la propiedad `game.height()`
- Tiene una **imagen de celda**, que se settea por medio de `game.ground(imagen)`, en donde `imagen` es un string con el nombre del archivo de la imagen.
 
#### Ejemplo

```js
>>> game.width(10)
>>> game.height(7)
>>> game.title("Juego")
>>> game.start()
```

<div class="container text-center">
	<img src="https://image.prntscr.com/image/7B5VH1VtQEK7DS6M7aBiMw.png" class="img-fluid z-depth-1">
</div>
<br>


## Las posiciones

Ahora que sabemos cómo ver el tablero del juego, seguramente queramos meter objetos dentro para interactuar. Para ello necesitamos indicar en qué **posición** del tablero queremos agregar el objeto, a través de un objeto que sepa informar las componentes _(x,y)_.
Wollok provee la clase `Position` que también se encuentra en la _lib_. Hay varias formas de instanciar una posición:

```js
// Invocando al constructor
>>> new Position(2,3)
(2,3) //-> (x=2; y=3)
>>> new Position()
(0,0) //-> Como default tiene el origen de coordenadas

// Pidiéndoselo al game
>>> game.at(2,3)
(2,3)
>>> game.origin()
(0,0)
>>> game.center()
(2,2) //-> Se calcula a partir del height y width
```

#### Dibujando objetos
Lo más importante de estas posiciones es que saben agregar un objeto al tablero.
```js
>>> var posicion = game.origin()
(0,0)
>>> posicion.drawElement(wollok)
```

##### Otra opción
También puedes hacer que tu objeto conozca su propia posición (por medio de una referencia o mensaje con nombre _posicion_) y simplemente decirle al juego que lo quieres en el tablero:
###### En example.wlk
```js
object wollok {
	var posicion = game.origin()
}
```

###### Y ejecutamos
```js
>>> game.addVisual(wollok)
```

¡Ya podemos visualizar nuestros objetos en pantalla!

![Tablero con wollok](https://image.prntscr.com/image/KO5vo8RcSkSV5rjYN0b6_g.png)


#### Moviendo objetos
Una característica _importante_ de estos objetos posiciones es que son **mutables**, lo que implica que sus componentes _(x, y)_ pueden cambiar en el tiempo. 
Eso nos permite poder **mover los objetos** en pantalla sin tener que cambiar el objeto posición (o sin tener que sacarlo del tablero y volverlo a meter en otra posición).

```js
>>> posicion.moveRight(2)
>>> posicion.moveUp(3)
>>> posicion
(2,3)
```

![Moviendo los objetos](https://image.prntscr.com/image/osdht-GhRJKY9wsLGhWZgA.png)

## El personaje
Wollok Game te permite tener un _personaje principal_ y le da la capacidad de **moverlo con las flechas del teclado**. Basta con decirle al juego cuál objeto es el personaje a la hora de dibujarlo.

```js
>>> game.origin().drawCharacter(wollok)
//ó game.addVisualCharacter(wollok)
>>> game.start()
```
![wollok-character](https://user-images.githubusercontent.com/4098184/32724281-6a76e6be-c84f-11e7-849d-3e8ac90a4742.gif)


#### ¡También hablan!

Así es, **los objetos del juego pueden hablar**. Para eso hay que indicar el `objeto` del juego y el `texto` que dirá por medio del mensaje `game.say(objeto, texto)`:
```js
>>> game.say(wollok, wollok.howAreYou())
```
![Los objetos hablan](https://image.prntscr.com/image/m9aRcwxPQCK5cnFKy0YLwQ.png)


### Visuales

¡Perfecto! Ya podemos mostrar nuestros objetos en pantalla, pero se muestran como un _wollok object_.
Para elegir la imagen de un determinado objeto es necesario:

1. Tener una **carpeta fuente** en el proyecto Wollok **con todas las imágenes del juego**. Se puede crear haciendo _click derecho sobre el proyecto > Nueva > Otra.. > y buscan "Carpeta fuente"_. Luego pueden agregan las imagénes arrastrando / copiando como cualquier carpeta.
2. Agregar a tus objetos un método `imagen()` que **retorne el nombre del archivo de la imagen** como string.

#### Ejemplo

<div class="container text-center">
	<img src="/images/tour/imgExplorerGame.png" class="img-fluid z-depth-1">
</div>
<br>

###### En example.wlk

```js
object caja {
	method imagen() {
		return "caja.png"
	} 
} 
```

###### Y al ejecutar

```js
>>> game.start()
>>> game.center().drawElement(caja)
```
![Caja Game](https://image.prntscr.com/image/eyT9BiHzR2ei2O5OgEVDuA.png)

> ![Warning](http://d2mxabrykbl1km.cloudfront.net/img/icons/ico_warning.png) AVISO IMPORTANTE : Wollok Game no hace ninguna modificación a las imágenes para mostrarlas. De modo que deberán tener el **tamaño** y **orientación** apropiado para tu juego.


## Un juego interactivo

Ya podemos mostrar nuestros objetos en el tablero, dónde y con la imagen que queramos. Ahora falta poder interactuar con el juego para que sea divertido.

### Usando el REPL
Una forma fácil de interactuar con el juego es por medio de la **consola**. Siempre puedes mandar un mensaje y hacer que un objeto cambie lo que muestra el tablero.

### Colisiones
Una forma de hacer que tus objetos interactúen entre sí es por medio de colisiones. Estos son **bloques de código** que se agregan a un objeto del tablero y se ejecutará cuando otro objeto _colisione_ con éste (ocupe la misma posición). `game.whenCollideDo(objeto, accionConColisionado)`.

#### Ejemplo
![colision-caja](https://user-images.githubusercontent.com/4098184/32722971-87bee42e-c84a-11e7-8f66-649e9acdb84a.gif)

###### En example.wlk
```js
object wollok {
	const posicion = game.origin()
	
	method irAlCentro() {
		posicion.x(0)
		posicion.y(0)
	}
}

object caja {
	method imagen() {
		return "caja.png"
	} 
} 
```

###### Y al ejecutar
```js
>>> game.addVisualCharacter(wollok) //Para que se pueda mover con las flechas
>>> game.center().drawElement(caja)
>>> game.whenCollideDo(caja, { personaje => personaje.irAlCentro() })//Apenas un personaje colisione con la caja le va a decir que vaya al centro
>>> game.start()
```
