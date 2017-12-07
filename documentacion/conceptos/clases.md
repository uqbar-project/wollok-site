---
layout: none
---

## Indice rápido ##


* <a href="#clases" class="wollokLink">Clases</a>
    * <a href="#herencia" class="wollokLink">Herencia</a>
    * <a href="#metodos-abstractos-y-clases" class="wollokLink">Métodos abstractos y clases</a>
    * <a href="#redefinicion-y-super" class="wollokLink">Redefinición y super</a>
    * <a href="#constructores" class="wollokLink">Constructores</a>
        * <a href="#constructor-simple" class="wollokLink">Constructor simple</a>
        * <a href="#constructor-por-defecto" class="wollokLink">Constructor por defecto</a>
        * <a href="#multiples-constructores" class="wollokLink">Múltiples constructores</a>
        * <a href="#constructor-delegation" class="wollokLink">Constructor delegation</a>
        * <a href="#herencia-de-constructores" class="wollokLink">Herencia de constructores</a>
        * <a href="#inicializacion-de-variables-en-los-constructores" class="wollokLink">Inicialización de variables en los constructores</a>
    * <a href="#herencia-de-objetos" class="wollokLink">Herencia de objetos</a>
* <a href="#polimorfismo-con-clases" class="wollokLink">Polimorfismo con clases</a>
* <a href="#modularizacion" class="wollokLink">Modularización</a>
    * <a href="#packages" class="wollokLink">Packages</a>
    * <a href="#imports" class="wollokLink">Imports</a>

___

## Clases ##

Las clases comparten algunas características con los objetos literales: definen variables de instancia y métodos. Pero no son expresiones (no pueden asignarse a variables), sino más bien **definiciones**.

Veamos un ejemplo:

```scala
class Ave {
    var energia = 0

    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(comida) {
        energia += comida.energia()
    }
    method energia() {
        return energia
    }
}
```
Para tener un Ave, creamos un objeto que es instancia de esa clase:

```scala
const pepita = new Ave()
pepita.volar(23)
```

### Herencia ###

Las clases pueden heredar de otras superclases. Esto permite tomar las definiciones existentes tanto de las variables como de los métodos. 

Las variables de instancia son visibles desde la subclase. Para aquellos familiarizados con Java, son variables con visibilidad "protected".

Todos los métodos en Wollok son públicos.

Ejemplos:

```scala
class AveNadadora inherits Ave {

   method nadar(metros) {
       energia -= metros * 1.2
   }
}

const eva = new AveNadadora()
eva.nadar(10)
eva.volar(50)
```

Las subclases pueden agregar nuevos métodos y variables y pueden redefinir métodos existentes (para más información ver [Redefinición y super](#redefinicion-y-super)).

## Metodos abstractos y clases ##

Un **método abstracto** declara su nombre y sus parámetros, sin implementarse. Es tarea de cada subclase proveer una implementación del método mediante la [redefinición](#redefinicion-y-super)

Para definir un método abstract en Wollok, simplemente no se escribe el cuerpo del método (no existe la palabra reservada **abstract**).

```scala
class MyClass {

   method anAbstractMethod(param)

}
```

Una clase con al menos un método abstracto se considera una **clase abstracta**. De nuevo, no hay una palabra reservada **abstract** para indicar que una clase es abstracta, ya que es información que se puede inferir de la definición misma de la clase.

### Redefinicion y super ###

Las subclases pueden redefinir métodos ya implementados por su superclase. Para ello, debe explícitamente usar la palabra "override" antes de la definición del método.

```scala
class AveEficiente inherits Ave {

    override method volar(metros) {
        energia -= metros / 2
    }

}
```

Si al redefinir un método necesitamos invocar al método original, podemos utilizar la palabra reservada **super**:

```scala
class Ave {
    var energia = 0

    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(comida) {
        energia += self.energiaObtenida(comida)
    }

    method energiaObtenida(comida) {
        return comida.energia()
    }

}

class AveEficiente inherits Ave {

    override method energiaGain(comida) {
        super(comida) / 2
    }
}
```

Como puede verse, no es necesario especificar el nombre del método. En Wollok solo puede invocarse al método sobreescrito usando **super**. No es válido usar super para llamar a cualquier otro método en la superclase (porque además conceptualmente no es correcto).

Esto mantiene simple el lenguaje.

De la misma manera, super solo puede utilizarse en el contexto de un método que redefine otro.

### Constructores ###

Un constructor es un tipo especial de método que se llama para crear e inicializar una nueva instancia de una clase.

Wollok permite:

* **Múltiples constructores:** esto implica que se puede proveer más de un constructor con diferente número de argumentos
* **Delegación de constructores**: un costructor puede llamar a otro para reutilizar código.
* **Delegación a constructores implícitos**: para los constructores sin parámetros.

Veremos cada uno en las secciones siguientes.

#### Constructor simple ####

Aquí tenemos una clase Point con un constructor

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
}
```

Ahora podemos hacer:

```scala
   const p = new Point(2, 1)
```

#### Constructor por defecto

Una clase que no define un constructor por defecto tiene implícitamente un constructor vacío (sin argumentos).

Esto

```scala
class Point {
}
```

es lo mismo que

```scala
class Point {
    constructor() {}
}
```

Por este motivo en ambos casos esto funciona correctamente

```scala
   const p = new Point()
```

Una vez que se especifica un constructor, esto implica que la responsabilidad ya pasa a ser de quien construyó la clase, y no existen más constructores implícitos.

#### Multiples constructores ####

Podemos tener tantos constructores como queramos, siempre que respetemos que cada constructor debe tener distinta cantidad de parámetros.

Agreguemos un constructor a nuestro punto

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
    constructor(p) {
        x = p.getX()
        y = p.getY()
    }
    method getX() { return x }
    method getY() { return y }
}
```

Ahora podemos instanciar un punto de dos maneras diferentes:

```scala
   var p1 = new Point(1,2)
   var p2 = new Point(p1)
```

#### Constructor Delegation ####

En el ejemplo anterior habrán notado que en los constructores se repite código. En ambos constructores estamos cambiando las referencias a la variables de instancia. Siempre es una buena práctica evitar la repetición de código (o de ideas). Para eso, tenemos que abstraer funcionalidades comunes, aplicando el principio D.R.Y. (Don't repeat yourself).

Para eso, Wollok provee un mecanismo para que un constructor llame y delegue **primero** a otro constructor.

Hay dos tipos de situación:

* **Delegar a otro constructor en la misma clase**
* **Delegar a un constructor en la superclase**

Para nuestra clase Point veremos el primer caso:

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
    constructor(p) = self(p.getX(), p.getY()) {
       // algún comportamiento aquí
    }
    method getX() { return x }
    method getY() { return y }
}
```

Nótese la sintaxis:

```scala
   constructor(...params...) =  self(...paramsToOther...) {
      body
   }
```

Esto significa que el cuerpo de nuestro constructor se ejecutará DESPUÉS de la ejecución del constructor al que delegamos. La delegación, entonces, es la primera cosa que ocurre.

El segundo caso es la delegación a un constructor de la superclase:

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
}

class Circle inherits Point {
    var r
    constructor(_x, _y_, _r) = super(_x, _y) {
        r = _r
    }
}
```

Nótese que la delegación se define a partir del uso de la palabra reservada **super**. Este uso de super es similar al de la redefinición de los métodos, con la salvedad de que podemos agregar o quitar parámetros en la llamada. 

A veces es necesario declarar explícitamente un constructor que delegue a la superclase si la superclase no define un constructor vacío. 

### Herencia de constructores ###

Dada esta jerarquía 

```scala
class Pelota {
    var color
    constructor() { }
    constructor(_color) { color = _color }
} 

class PelotaFutbol inherits Pelota {
    var duenio
}
```

PelotaFutbol hereda los constructores de su clase padre Pelota. Esto significa que las siguientes expresiones serán válidas:

```scala
new PelotaFutbol()
new PelotaFutbol("azul")
```

No obstante, si definimos un constructor en la clase PelotaFutbol, Wollok inhibe los constructores que la jerarquía de superclases tenga. En el caso anterior, definamos un constructor para PelotaFutbol:

```scala
class Pelota {
    var color
    constructor() { }
    constructor(_color) { color = _color }
} 

class PelotaFutbol inherits Pelota {
    var duenio
    constructor(_color, _duenio) = super(_color) {
        duenio = _duenio
    }
}
```

En ese caso, la única forma correcta de construir una pelota de fútbol es pasándole dos parámetros:

```scala
new PelotaFutbol()                  // incorrecto
new PelotaFutbol("azul")            // incorrecto
new PelotaFutbol("azul", "Juan")    // correcto
```


#### Inicializacion de variables en los constructores ####

Hemos visto que hay un tipo de referencia inmutable: los **const**.
Al definir una clase, podemos esperar al momento de la construcción para asignar las referencias constantes. Entonces el objeto construye sus referencias inmutables en la instanciación y luego no las modifica más.

Aquí vemos un ejemplo:

```scala
class ImmutablePoint {
    const x
    const y
    
    constructor(_x, _y) {
        x = _x
        y = _y
    }
}
```

Puede parecer extraño que permitimos asignar un valor a una referencia que no puede cambiar, pero es totalmente válido hacerlo en el momento de la construcción.

Una vez asignada la referencia, ya sí no puede cambiar más. Esta sintaxis permite evitar código repetitivo.

#### Herencia de Objetos ####

Los well-known objects pueden definirse en base a una clase existente.

```scala
object lassie inherits Dog {
   // ...
}
```

Esto permite la migración natural de objetos a clases de un programa que inicialmente comienza con objetos y luego parte del comportamiento se muda a definiciones de clase para reutilizar código. A veces no es necesario convertir todos los objetos a clases, Wollok permite combinar ambos en conjunto.

Hay un caso especial cuando una clase define constructores explícitos. Aquí está la sintaxis para eso:

```scala
object lassie inherits Dog("Lassie", 3) {
   // ...
}

class Dog {
   constructor(name, age) {
      // ...
   }
}
```

## Polimorfismo con clases ##

Wollok combina objetos y clases en un solo lenguaje. El polimorfismo con clases funciona de la misma manera que con los objetos. No importa si un objeto es instancia de una clase, de un WKO o de un objeto anónimo, todos pueden ser potencialmente usados en forma polimórfica.

**Dos objetos pueden usarse en forma polimórfica si todos entienden un conjunto común de mensajes**

```scala
package aves {

   class Ave {
        method volar() {
             // ...
        }
   }

   class Avion {
        method volar() {
            // ...
        }
   }

}
```
Entonces:

```scala
    const avion = new Avion()
    const pepita = new Ave()

    const objetosQueVuelan = [ avion, pepita ]

    objetosQueVuelan.forEach { o => o.volar() }
```

No es necesario tener una superclase común para objetos para ser tratados polimórficamente. Como se dijo antes, lo único importante son los mensajes que un objeto entiende. *Olvídense de la clase, ¡podría ni siquiera tenerla!*

Tanto las clases Avion como Ave son parte de diferentes jerarquías, pero sus instancias siguen siendo polimórficas para cualquier otro objeto que las quiera hacer volar.

Algunos lenguajes como Java fuerzan a definir un tipo, una interface, para que puedan ser polimórficas. Wollok no.

Aun así, el compilador es capaz de chequear si el mensaje que enviamos es válido.

Además de las clases, puede haber polimorfismo entre clases y objetos:

```scala
    const boomerang = object {
          method volar() {
               // ... va, y viene
          }
    }

    const objetosQueVuelan = [ avion, pepita, boomerang ]

    objetosQueVuelan.forEach { o | o.volar() }

```

## Modularizacion ##

Wollok provee una serie de reglas y construcciones del lenguaje para fomentar programas modulares: separar clases y programas para ser usado por otros programas / bibliotecas.

### Packages ###

Un package es una unidad lógica que agrupa varias clases y/o WKOs.

```scala
package aves {

   class Ave {
        // ...
   }

   class AveQueNada inherits Ave {
        // ...
   }

   // ...

}
```

Cuando se crea un archivo .wlk, el nombre del archivo define el nombre del package por defecto. Ejemplo: si creo un archivo aves.wlk, esto implica definir un package aves...

Un archivo Wollok puede definir más de un package

```scala
package aves {
    // ...
}

package entrenadores {
    // ...
}

package ambiente {
    // ...
}
```

Cada package tiene un nombre ("aves", "entrenadores", etc.). Cada clase definida dentro toma el nombre del package como prefijo, lo que introduce el **fully qualified name** (FQN) de una clase.

Ejemplo:

```scala
package aves {

   class AveQueNada {
       // ...
   }

}
```

El FQN de la clase es: **aves.AveQueNada**

Al codificar dentro de un package, podemos referirnos a las clases por su **nombre corto** (en el ejemplo, AveQueNada). Esto es válido mientras estemos dentro del mismo paquete.

Para referirnos a una clase que está fuera del package DEBEMOS usar su FQN. Para evitar escribir una y otra vez los FQN de la clase, podemos usar los imports, como se describe a continuación.


### Bibliotecas vs Programas ###

// TODO

### Imports ###

Para poder acceder a las definiciones de distintas clases, es necesario decirle a Wollok dónde encontrarlas mediante el mecanismo de imports. Por defecto cada archivo Wollok (.wlk) define un package, por lo que al importar definiciones de un archivo tenemos acceso a todos los packages contenidos en él.

Ejemplo: tenemos un archivo definiciones.wlk

```scala
object pepita {
   var energia = 0
   method volar() { energia -= 10 }
}
```

En otro archivo objects.wlk podemos acceder a pepita mediante un import:

```scala
import definiciones.* // tomar todas las definiciones escritas en definiciones.wlk

object entrenador {
    method entrenar() {
        pepita.volar()
    }
}
```

En el caso de tener varios packages en el mismo archivo, debemos hacer el import de cada uno de los packages involucrados. Si nuestro archivo definiciones.wlk tiene estos packages:

```scala
package points {
    class ImmutablePoint {
    }
}

package aves {
    object pepita {
        var energia = 0
        method volar() {
            energia -= 10   
        }
    }
}
```

Entonces debemos cambiar nuestro import del archivo objects.wlk de la siguiente manera:

```scala
import definiciones.aves.*

object entrenador {
    method entrenar() {
        pepita.volar()
    }
}
```
