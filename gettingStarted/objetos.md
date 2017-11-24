---
layout: none
---

## Indice rápido ##

* [Objetos definidos por el desarrollador](#user-objects)
    * [WKO](#wko)
    * [Objetos literales](#objetos-como-literales)
* Definición de un objeto Wollok
    * [Métodos](#metodos)
    * [Simple return method](#simple-return-method) 
    * [Variables de instancia](#variables-de-instancia)
    * [Mensajes](#mensajes)
    * [Self](#self)
    * [Polimorfismo con objetos](#polimorfismo-con-objetos)
    * [If](#if)

___

## User Objects ##

Además de los objetos predefinidos recientemente visto, cualquier lenguaje orientado a objetos debe permitir que el desarrollador puede crear sus propios objetos.

Esto puede hacerse de dos maneras ligeramente diferentes:

* Objetos como literales
* _Named objects_ o WKO

### WKO ###

Los _Named Objects_ también se conocen como "Well-Known Objects" o "WKOs".

Para definir un objeto y asignarle una referencia global a él utilizamos esta construcción:

```scala
object miObjeto {
    // aquí va el código del objeto miObjeto
}
console.println(miObjeto)
```

A partir de aquí podemos acceder en cualquier parte del programa a la referencia "miObjeto".

### Objetos como literales ###

Otra opción es utilizar objetos literales sin explícitamente darle un nombre. Esto permite asignarlo a una variable de alcance más limitado que el global.

```scala
const miObjeto = object {
    // código aquí
}
console.println(miObjeto)
```

El objeto creado sirve a modo de ejemplo didáctico, ya que es un objeto vacío. En la consola sólo se verá

```
anObject{}
```

### Metodos ###

Dentro de las llaves de un objeto se puede definir su comportamiento mediante la implementación de métodos. Por ejemplo representaremos un pájaro:

```scala
const unAve = object {
    method volar(metros) {
        return "acabo de volar " + metros +  " metros"
    }
}

const resultado = unAve.volar(23)
console.println(resultado)
```

Los métodos se definen mediante la palabra **method**. Pueden recibir de 0 a n parámetros y opcionalmente devolver un valor. Los tipos de los parámetros no hay que definirlos. En el caso de arriba, el nombre del parámetro es "metros", una referencia que estará presente en el contexto del método a evaluar.

En el caso de que el método devuelva un valor es obligatorio escribir una sentencia **return**, a excepción de los [simple return method](#simple-return-method) explicados en la siguiente sección.

#### Simple Return Method ####

Hay un _shortcut_ para definir métodos simples que solo devuelven valores.

```scala
const unAve = object {
    method volar(metros) = "acabo de volar " + metros +  " metros"
}
```

El lector podrá notar que no es necesario escribir return, ni tampoco las llaves que encierren el cuerpo del método. Las llaves se reemplazan por el símbolo =, que indica que la evaluación de la parte derecha del método será el valor devuelto.

Esta sintaxis es cómoda para métodos de una sola línea que solo calculan valores.

### Variables de instancia ###

Hasta el momento nuestro pájaro no hace demasiado, así que le agregaremos "estado", mediante las variables de instancia. Algunos métodos harán que el estado del objeto cambie.

```scala
const unAve = object {
    var energia = 0
    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(gramos) {
        energia += gramos
    }
}

unAve.volar(23)
unAve.comer(10)
```

Las referencias de la instancia se declaran en un objeto, justo antes del primer método. [Como hemos visto](#referencias-variables-y-constantes), las referencias pueden ser **var** o **const**.

**Todas las referencias de instancia son solo visibles para los métodos de un objeto**.

Esto no es válido

```scala
unAve.energia
```

Para poder acceder a la energía del pájaro, el objeto debe publicar esa información mediante un método.

```scala
const unAve = object {
    var energia = 0
    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(gramos) {
        energia += gramos
    }
    method energia() {
        return energia
    }
}

unAve.volar(23)
unAve.comer(10)

const e = unAve.energia()
```

## Mensajes ##

Uno de los conceptos más importantes de la programación orientada a objetos son los **mensajes**. En Wollok, (casi) todo lo que uno hace es enviar mensajes a objetos.

Al enviar el mensaje a un objeto se ejecuta la definición del método. 

Para enviar un mensaje la sintaxis es:

```scala
objeto.mensaje(param1, param2, ...)
```

Estas variantes **no son válidas**:

```scala
mensaje(param1, param2)   // falta el objeto receptor
objeto.mensaje            // faltan paréntesis
```

### Self ###

¿Qué pasa cuando estoy en un objeto y quiero enviarme un mensaje a mí mismo para aprovechar un método existente?

En ese caso utilizamos **self** que es una referencia que apunta al objeto donde estamos escribiendo el código.

```scala
const unAve = object {
    var energia = 0
    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(gramos) {
        energia += gramos
    }
    method energia() {
        return energia
    }
    // NUEVO METODO
    method volarYComer(metrosAVolar, gramosAComer) {
        self.volar(metrosAVolar)
        self.comer(gramosAComer)
    }
}

unAve.volarYComer(23, 10)
```

## Polimorfismo con objetos ##

El **polimorfismo** es la capacidad de un objeto de ser intercambiable con otro, sin que un tercero que los usa se vea afectado.

Wollok comparte algunas características con los lenguages dinámicamente tipados, ya que tiene un [Pluggable Type System](http://bracha.org/pluggableTypesPosition.pdf). Esto significa que si dos objetos entienden los mismos mensajes, entonces no necesitamos nada más para que un tercero los use en forma polimórfica.

Por ejemplo, cambiaremos nuestro pájaro para agregar el concepto Comida, en lugar de solamente comer una cantidad de gramos.

```scala
const unAve = object {
    var energia = 0
    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(comida) {
        energia += comida.energia() // una "comida" es algo que provee "energia"
    }
    method energia() {
        return energia
    }
}
```

Una comida es cualquier objeto que entienda el mensaje energia() y devuelva un número (la cantidad de energía que provee). 

Entonces podemos tener dos objetos que representen comida específica:

```scala
const alpiste = object {
    method energia() { return 5 } 
}

const arroz = object {
    method energia() { return 2 }
}

unAve.comer(aveseed)
unAve.comer(rice)
```

Aquí tanto "alpiste" como "arroz" son polimórficos respecto a "unAve".

## If ##

La expresión **if** permite evaluar una condición booleana y realizar diferentes acciones para el caso verdadero y falso respectivamente.

Por ejemplo:

```scala
if (self.estaLloviendo()) {
    self.irACasaEn(self.auto())
}
else 
    self.irACasaEn(self.bicicleta())
```

En Wollok el "if" no es una sentencia (que controla el flujo) sino más bien una expresión. Esto implica que devuelve un valor, lo que permite cambiar el ejemplo a esta otra forma:

```scala
const transporte = 
   if (self.estaLloviendo()) self.auto() else self.bicicleta()

self.irACasaEn(transporte)
```
