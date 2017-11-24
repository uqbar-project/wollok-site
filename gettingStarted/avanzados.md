---
layout: none
---

## Indice rápido ##

* Funcionalidades avanzadas
    * [Type system](#type-system)
    * [Wollokdocs](#wollokdocs)
    * [Mecanismo de excepciones](#mecanismo-de-excepciones)
    * [Identidad vs. igualdad](#identidad-vs-igualdad)

___

## Funcionalidades avanzadas ##

### Type System ###

El sistema de tipos de Wollok (Wollok Type System) es una funcionalidad opcional, que puede activarse o desactivarse. El sistema de tipos permite ocultar la información explícita de tipos, ya que para los desarrolladores novatos esto implica tener que explicar/entender un nuevo concepto.

De esa manera los tipos se introducen gradualmente a lo largo de la cursada, lo que constituye un desafío importante.

#### Type System - Parte I ####

En un primer momento, se comienza a partir de un sistema de tipos que solo incluye objetos predefinidos, objetos definidos por el usuario y literales: números, strings, booleanos, listas, conjuntos, closures, entre otros.

#### Type System - Parte II ####

El sistema de tipos de Wollok permite combinar clases con objetos, chequear que los envíos de mensajes sean correctos y que los tipos en las asignaciones sean compatibles. 

Todo esto sin necesidad de anotar ningún tipo en las definiciones de las variables, los parámetros o los valores devueltos por los métodos.

Por ejemplo 

```scala
   class Ave {
       method volar() { ... }
       method comer() { ... }
   }

   class AveQueNada inherits Ave {
       method nadar() { ... }
   }

   const pepita = new Ave()
   const pato = new AveQueNada()

   class Superman() {
       method volar() { ... }
       method tirarLaserDeLosOjos() { ... }
   }

  var volador = pepita
  volador = new Superman()
```

**Aclaración:** Wollok obliga a definir el programa y las clases en diferentes archivos, pero sirve para la presente explicación ver todo el código en conjunto.

Estos son los tipos que infiere Wollok:

* pepita : se tipa a **Ave**
* pato : se tipa a **AveQueNada**
* volador : se tipa a **{ volar() }**, que significa "cualquier objeto que entienda el mensaje volar sin parámetros". Esto es básicamente los mensajes en común que tienen las clases Ave y Superman. El sistema de tipos infiere esto porque nuestra referencia a "volar" se asignar a "pepita" y "new Superman()" en nuestro programa. Entonces, enviar cualquier mensaje además de  "volar()" resultará en un error de compilación.

Esto compila

```scala
volador.volar()
```

mientras que esto no

```scala
volador.comer()
// o
volador.tirarLaserDeLosOjos()
```

Y esto compila perfecto:

```scala
volador = object {
    method volar() { ... }
    method otroMetodo() { ... }
}
```

Ya que el objeto cumple con la definición del tipo estructural { volar() }

### WollokDocs ###

Wollok tiene una sintaxis especial para documentar los elementos del lenguaje.

Por ejemplo, las clases:

```scala
/**
 * A bird knows how to fly and eat. 
 * It also has energy. 
 *
 * @author jfernandes
 */
class Bird {
   // ...
}
```

Los métodos y las referencias (variables de instancia) también pueden tener este tipo de documentación. Esto facilita el entendimiento posterior para quien lo quiera usar después, ya que el IDE muestra esa documentación en los _tooltips_ y otras partes visuales.


### Mecanismo de excepciones ###

Wollok provee un mecanismo de excepciones similar al de Java / Python.

Una excepción representa una condición en la que no pueden continuar enviándose mensajes los objetos involucrados en resolver un requerimiento, por lo tanto **tira una excepción**.

Eventualmente en alguna otra parte un interesado podrá manejar esta situación para reintentar la operación, tratar de resolverlo, avisar al usuario, etc.

Así que estas son las dos operaciones básicas que pueden hacerse con una excepción:

* **throw**: "tirar" una excepción hasta que alguien la atrape
* **catch**: atrapar la excepción que se encuentra en la pila de ejecución, definiendo código para manejar esa excepción.

### Throw ###

Veamos un código de ejemplo de la sentencia throw:

```scala
class MyException inherits wollok.lang.Exception {}
class A {
	method m1() { 
		throw new MyException()
	}
}
```

Aquí el método m1() siempre tira una excepción, que es una instancia de MyException. 

**Importante:** solo puede hacerse throw de instancias que formen parte de la jerarquía de *wollok.lang.Exception* (esto es Exception o sus subclases).


#### Try-Catch ####

Aquí tenemos un ejemplo de cómo atrapar una excepción:

```scala
program p {
	const a = new A()
    const otroA = new A(5)
	
	try {
		a.m1()
		...
	}
	catch e : MyException {
		otroA.m1()
	}
}
```

Este programa atrapa cualquier MyException que se tire dentro del código encerrado en el **try**.

#### Then Always ####

Además del bloque "catch", un bloque "try" puede definir un bloque "always", que **siempre** se ejecutará sin importar si hubo un error o no.

```scala
try {
	a.m1()
}
catch e : MyException
	console.println("Exception raised!") // OK!
then always
	counter = counter + 1
}
```

#### Catchs multiples ####

Un bloque try puede tener más de un catch, en caso de necesitar manejar diferentes tipos de excepción de distinta manera:

```scala
try 
	a.m1()
catch e : MySubclassException
	result = 3
catch e : MyException
	result = 2
```

### Sobrecarga de operadores ###

Dado que Wollok no exige definiciones de tipos al usuario, no es posible definir dos mensajes con igual cantidad de parámetros y diferente tipo:

```scala
ave.volar(6)        // kilómetros
const madrid = new Ciudad("Madrid")
ave.volar(madrid)               
```

Ambos mensajes serán ejecutados por el mismo método.

No obstante, sí es posible definir dos mensajes con diferente cantidad de argumentos:

```scala
ave.volar(6)
const madrid = new Ciudad("Madrid")
ave.volar(madrid, new Date(1, 1, 2019))               
```

### Identidad vs Igualdad ###

Wollok sigue las convenciones de igualdad e identidad que tienen Java / Smalltalk. Por defecto, dos objetos son iguales si son el mismo objeto.

```scala
var pepita = new Ave()
const amiga = pepita
amiga == pepita   ==> true, son el mismo objeto
```

Pero la igualdad es posible redefinirse, por ejemplo dos strings son iguales si tienen los mismos caracteres:

```scala
var unString = "hola"
var otroString = "hola"
unString == otroString ==> true, tienen los mismos caracteres
```

El operador == es equivalente al mensaje equals:

```scala
var unString = "hola"
var otroString = "hola"
unString.equals(otroString) ==> true, tienen los mismos caracteres
```

Para saber si dos referencias apuntan al mismo objeto, se utiliza el operador ===

```scala
var unString = "hola"
var otroString = "hola"
unString === otroString  ==> false, no apuntan al mismo objeto
otroString = unString
unString === otroString  ==> true (ahora sí)
```

En general, hay objetos que representan valores: los números, los strings, los booleanos, y los [value objects](https://en.wikipedia.org/wiki/Value_object), a ellos se les suele redefinir el == / equals en base a su estado. 

Para más información ver el paper de Wollok en el que se habla de [igualdad e identidad](https://docs.google.com/document/d/156PsLi7v5LPFJ5oVy6SPwH8cQRZaBqJh-aosZjUbE4s/edit#heading=h.hryrt6t60c2h) entre otros conceptos.
