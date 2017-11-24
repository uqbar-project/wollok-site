---
layout: none
---

## Indice rápido ##

* [Colecciones](#colecciones)
    * [Conjuntos](#conjuntos)
    * [Closures](#closures)
    * [Closures y colecciones](#closures-y-colecciones)

<hr>

## Colecciones ##

Wollok provee un literal para los **objetos Lista**, una colección que respeta el orden de los elementos ingresados.

La sintaxis es:

```javascript
[ elemento1, elemento2, ..., elementoN ]
```

Por ejemplo:

```javascript
const numeros = [2, 23, 25]

numeros.size() == 3   // true !
numeros.contains(23)  // true !

numeros.remove(23)
numeros.size() == 2   // true

numeros.clear()
numeros.size() == 0   // true
numeros.isEmpty()     // true
```

Como las listas son objetos (una vez más), la forma de interactuar con las listas es a través de los mensajes. 

Ṕara poder utilizar mensajes más interesantes, necesitamos conocer otro objeto muy importante: ¡los [closures](#closures)!

### Conjuntos ###

Wollok también provee un literal para los **objetos Set**, una colección sin elementos duplicados ni orden.

La sintaxis es

```scala
const numeros = #{2, 23, 25}
```

Nótese tanto el numeral inicial como las llaves que encierran los elementos del conjunto.

### Closures ###

Un _closure_ es un objeto que representa una _porción de código_ que puede evaluarse en cualquier momento, todas las veces que uno quiera. También pueden asignarse a referencia, pasarse como parémtros y ser devueltas como resultado de los métodos.

Para una explicación más detallada véase [wikipedia](http://en.wikipedia.org/wiki/Closure_(computer_programming)).

Wollok soporta closures mediante el uso de literales. 

Veamos un ejemplo:

```javascript
const helloWorld = { "helloWorld" }
const response = helloWorld.apply()		

response == "helloWorld"      // true
```

La primea línea define un closure "helloWorld" que no recibe parámetros. 
La segunda ejecuta el closure enviándole el mensaje **apply()**.

Aquí vemos otro ejemplo con un closure que recibe un parámetro:

```javascript
const helloWorld = { to => "hello " + to }
const response = helloWorld.apply("world")

response == "hello world"      // true
```

Entonces, la sintaxis para closures es:

```groovy
{param1, param2, ..., paramN => /* code */ }
```

Un dato importante de los closures es que no solo acceden a sus parámetros, sino también a cualquier otra referencia en el contexto donde fueron definidas. Esto las vuelve realmente poderosas. Veamos un ejemplo muy sencillo:

```javascript
var to = "world"
const helloWorld = { "hello " + to }
			
helloWorld.apply() == "hello world"      // true
		
to = "someone else"
helloWorld.apply() == "hello someone else"      // true
```

Se podrá ver que el closure accede a la variable "to" que es definida fuera del contexto del closure mismo, dentro del programa. 

Si cambiamos esta referencia, este efecto se propaga al closure (como se muestra en la segunda llamada, el valor devuelto es diferente).


### Closures y colecciones ###

Como la mayoría de los lenguajes, Wollok provee una rica interfaz para operar con colecciones. Esto evita escribir código tedioso y repetitivo para filtrar, transformar, sumar elementos de una colección. La mayoría de estos mensajes recibe closures como parámetro.

Por ejemplo, para realizar una cierta lógica en cada uno de los elementos, existe el método **forEach**:

```javascript
const numeros = [23, 2, 1]

var suma = 0
numeros.forEach({ n => suma += n })
			
sum == 26      // true
```

En el caso de que el único parámetro que se envíe sea un closure, se pueden evitar los paréntesis. El ejemplo anterior también se puede escribir

```javascript
numeros.forEach { n => sum += n }
```

Para saber si todos los elementos cumplen una determinada condición, existe el mensaje "all"

```javascript
[3, 1].all { n => n > 0 } // true
```

**filter** devuelve una nueva colección con los elementos que cumplen un criterio.

```javascript
const mayoresAUno = [3, 1].filter { n => n > 1 }
mayoresAUno.size() == 1      // TRUE
```

**map** devuelve una nueva colección aplicando una transformación a los elementos de la colección original. La transformación se modela mediante un _closure_.

```javascript
var mitades = [10, 20].map { n => n / 2 }
	
mitades.contains(5)       // TRUE
mitades.contains(10)      // TRUE
mitades.contains(15)      // FALSE
```

